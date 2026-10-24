import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

function loadEnv(filePath) {
  return fs
    .readFile(filePath, "utf8")
    .then((contents) => {
      for (const rawLine of contents.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (!line || line.startsWith("#")) continue;

        const separator = line.indexOf("=");
        if (separator < 1) continue;

        const key = line.slice(0, separator).trim();
        let value = line.slice(separator + 1).trim();

        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        if (process.env[key] === undefined) {
          process.env[key] = value;
        }
      }
    })
    .catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
}

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}. Set it in .env or the environment.`);
  }
  return value;
}

function safeName(value, fallback = "untitled") {
  const cleaned = String(value ?? "")
    .normalize("NFKC")
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/[. ]+$/g, "")
    .trim()
    .slice(0, 140);

  return cleaned || fallback;
}

function adfToText(node, depth = 0) {
  if (node === null || node === undefined) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    return node
      .map((item) => adfToText(item, depth))
      .filter(Boolean)
      .join("");
  }
  if (typeof node !== "object") return "";

  const type = node.type;
  const content = node.content ?? [];
  const textValue = node.text ?? "";

  if (type === "text") return textValue;
  if (type === "hardBreak") return "\n";
  if (type === "mention") {
    return node.attrs?.text ?? node.attrs?.displayName ?? "@mention";
  }
  if (type === "emoji") {
    return node.attrs?.text ?? node.attrs?.shortName ?? "";
  }
  if (type === "inlineCard" || type === "blockCard") {
    return node.attrs?.url ?? "";
  }

  const inner = content
    .map((item) => adfToText(item, depth + 1))
    .filter(Boolean)
    .join("");

  if (type === "paragraph" || type === "heading") return `${inner}\n\n`;

  if (type === "bulletList") {
    return content
      .map((item) => `- ${adfToText(item).trim().replace(/\n/g, " ")}\n`)
      .join("");
  }

  if (type === "orderedList") {
    return content
      .map(
        (item, index) =>
          `${index + 1}. ${adfToText(item).trim().replace(/\n/g, " ")}\n`,
      )
      .join("");
  }

  if (type === "listItem") return inner;
  if (type === "codeBlock") {
    return `\n\`\`\`\n${inner.trim()}\n\`\`\`\n\n`;
  }
  if (type === "blockquote") {
    return (
      inner
        .split("\n")
        .filter(Boolean)
        .map((line) => `> ${line}`)
        .join("\n") + "\n\n"
    );
  }
  if (type === "rule") return "\n---\n\n";
  if (type === "table") return `\n${inner}\n`;
  if (type === "tableRow") {
    return `${content.map((cell) => adfToText(cell).trim()).join(" | ")}\n`;
  }
  if (type === "tableCell" || type === "tableHeader") return inner;

  return inner;
}

function plainDescription(description) {
  if (description === null || description === undefined) {
    return "_No description provided._";
  }
  if (typeof description === "string") {
    return description.trim() || "_No description provided._";
  }

  const text = adfToText(description).trim();
  return text || "_No description provided._";
}

function dateValue(value) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString();
}

function basicAuth(email, token) {
  return `Basic ${Buffer.from(`${email}:${token}`).toString("base64")}`;
}

async function jiraRequest(url, headers, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { ...headers, ...(options.headers ?? {}) },
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `HTTP ${response.status} ${response.statusText} for ${url}\n${detail.slice(0, 500)}`,
    );
  }

  return response;
}

async function getIssues(baseUrl, headers, pageSize) {
  const issues = [];
  let nextPageToken;
  const seenTokens = new Set();

  while (true) {
    const url = new URL(`${baseUrl}/rest/api/3/search/jql`);

    url.searchParams.set("jql", "assignee = currentUser() ORDER BY key ASC");
    url.searchParams.set("maxResults", String(pageSize));
    url.searchParams.set(
      "fields",
      [
        "summary",
        "description",
        "status",
        "assignee",
        "issuetype",
        "priority",
        "created",
        "updated",
        "attachment",
        "project",
        "labels",
        "components",
        "duedate",
        "resolution",
        "reporter",
      ].join(","),
    );

    if (nextPageToken) {
      url.searchParams.set("nextPageToken", nextPageToken);
    }

    const response = await jiraRequest(url, headers);
    const data = await response.json();

    issues.push(...(data.issues ?? []));

    if (data.isLast === true || !data.nextPageToken) break;

    if (seenTokens.has(data.nextPageToken)) {
      throw new Error(
        "Jira returned a repeated pagination token; stopping to avoid an infinite loop.",
      );
    }

    seenTokens.add(data.nextPageToken);
    nextPageToken = data.nextPageToken;
  }

  return issues;
}

async function downloadAttachment(attachment, destination, headers) {
  const url = attachment.content;

  if (!url) {
    throw new Error("Jira did not provide an attachment content URL.");
  }

  const parsed = new URL(url);

  if (
    parsed.protocol !== "https:" ||
    parsed.hostname !== new URL(process.env.JIRA_BASE_URL).hostname
  ) {
    throw new Error(
      "Refusing attachment URL outside the configured Jira Cloud host.",
    );
  }

  const response = await jiraRequest(url, headers);
  const bytes = Buffer.from(await response.arrayBuffer());

  // Never overwrite an existing file.
  await fs.writeFile(destination, bytes, { flag: "wx" });
}

function issueMarkdown(issue, baseUrl, attachmentNames) {
  const fields = issue.fields ?? {};
  const title = fields.summary ?? "Untitled";
  const status = fields.status?.name ?? "Unknown";
  const assignee =
    fields.assignee?.displayName ??
    fields.assignee?.emailAddress ??
    "Unassigned";
  const issueType = fields.issuetype?.name ?? "Unknown";
  const priority = fields.priority?.name ?? "—";
  const description = plainDescription(fields.description);
  const labels = (fields.labels ?? []).join(", ") || "—";
  const components =
    (fields.components ?? []).map((item) => item.name).join(", ") || "—";
  const resolution = fields.resolution?.name ?? "—";
  const reporter = fields.reporter?.displayName ?? "—";
  const dueDate = fields.duedate ?? "—";

  const attachments = attachmentNames.length
    ? attachmentNames
        .map(
          (name) =>
            `- [${name}](attachments/${encodeURIComponent(name).replace(/%2F/gi, "/")})`,
        )
        .join("\n")
    : "_No attachments._";

  return `# ${issue.key}: ${title}

- **Jira:** ${baseUrl}/browse/${issue.key}
- **Status:** ${status}
- **Assignee:** ${assignee}
- **Issue type:** ${issueType}
- **Priority:** ${priority}
- **Resolution:** ${resolution}
- **Reporter:** ${reporter}
- **Created:** ${dateValue(fields.created)}
- **Updated:** ${dateValue(fields.updated)}
- **Due date:** ${dueDate}
- **Labels:** ${labels}
- **Components:** ${components}

## Description

${description}

## Attachments

${attachments}
`;
}

async function main() {
  await loadEnv(path.resolve(".env"));

  const baseUrl = requiredEnv("JIRA_BASE_URL").replace(/\/+$/, "");
  const email = requiredEnv("JIRA_EMAIL");
  const token = requiredEnv("JIRA_API_TOKEN");
  const base = new URL(baseUrl);

  if (base.protocol !== "https:") {
    throw new Error("JIRA_BASE_URL must use HTTPS.");
  }

  if (!base.hostname.endsWith(".atlassian.net")) {
    console.warn(
      "Warning: the URL does not look like a standard *.atlassian.net Jira Cloud site.",
    );
  }

  const pageSizeValue = Number.parseInt(
    process.env.JIRA_PAGE_SIZE ?? "100",
    10,
  );
  const pageSize = Number.isFinite(pageSizeValue)
    ? Math.min(100, Math.max(1, pageSizeValue))
    : 100;

  const outputRoot = path.resolve(
    process.env.JIRA_OUTPUT_DIR ?? "./jira-export",
  );

  const headers = {
    Authorization: basicAuth(email, token),
    Accept: "application/json",
  };

  const meResponse = await jiraRequest(`${baseUrl}/rest/api/3/myself`, headers);
  const me = await meResponse.json();

  console.log(`Authenticated as ${me.displayName ?? me.emailAddress ?? email}`);

  await fs.mkdir(outputRoot, { recursive: true });

  // Read existing task folders once before exporting.
  const existingEntries = await fs.readdir(outputRoot, {
    withFileTypes: true,
  });

  const existingTaskFolders = existingEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const issues = await getIssues(baseUrl, headers, pageSize);

  console.log(`Found ${issues.length} assigned issue(s).`);

  let exportedIssues = 0;
  let skippedIssues = 0;
  let issueFailures = 0;
  let attachmentFailures = 0;

  for (const issue of issues) {
    const fields = issue.fields ?? {};
    const folderName = safeName(
      `${issue.key}-${fields.summary ?? "untitled"}`,
      issue.key,
    );

    // Skip tasks whose folders already exist.
    const alreadyExists = existingTaskFolders.some(
      (name) => name === issue.key || name.startsWith(`${issue.key}-`),
    );

    if (alreadyExists) {
      skippedIssues++;
      console.log(`Skipping ${issue.key} — already exists in target folder.`);
      continue;
    }

    const issueDir = path.join(outputRoot, folderName);
    const attachmentDir = path.join(issueDir, "attachments");

    try {
      // Create the new task directory exclusively.
      await fs.mkdir(issueDir);

      await fs.mkdir(attachmentDir, { recursive: true });

      const attachments = fields.attachment ?? [];
      const savedNames = [];
      const usedNames = new Set();

      for (const attachment of attachments) {
        const originalName = safeName(
          attachment.filename,
          `attachment-${attachment.id ?? "file"}`,
        );

        const extension = path.extname(originalName);
        const stem = path.basename(originalName, extension);

        let filename = originalName;
        let index = 2;

        while (usedNames.has(filename)) {
          filename = `${stem}-${index}${extension}`;
          index++;
        }

        usedNames.add(filename);

        const destination = path.join(attachmentDir, filename);

        try {
          await downloadAttachment(attachment, destination, headers);
          savedNames.push(filename);
          console.log(`  Downloaded ${issue.key}: ${filename}`);
        } catch (error) {
          attachmentFailures++;
          console.error(
            `  Attachment failed (${issue.key}, ${filename}): ${error.message}`,
          );
        }
      }

      const markdown = issueMarkdown(issue, baseUrl, savedNames);

      await fs.writeFile(path.join(issueDir, "description.md"), markdown, {
        encoding: "utf8",
        flag: "wx",
      });

      exportedIssues++;
      console.log(`Exported ${issue.key} — ${fields.summary ?? "Untitled"}`);
    } catch (error) {
      issueFailures++;
      console.error(`Issue export failed (${issue.key}): ${error.message}`);
    }
  }

  console.log("\nIncremental export complete.");
  console.log(`Issues found: ${issues.length}`);
  console.log(`New issues exported: ${exportedIssues}`);
  console.log(`Existing issues skipped: ${skippedIssues}`);
  console.log(`Issue export failures: ${issueFailures}`);
  console.log(`Attachment failures: ${attachmentFailures}`);
  console.log(`Output: ${outputRoot}`);
}

await main().catch((error) => {
  console.error(`\nExport failed: ${error.message}`);
  process.exitCode = 1;
});
