# Jira Cloud Ticket Exporter

Exports every Jira Cloud issue assigned to the account configured in `.env`, including completed issues. Each issue gets its own folder containing `description.md` and an `attachments/` directory.

## Requirements

- Node.js 20 or newer
- A Jira Cloud account with permission to view the issues and attachments
- An Atlassian API token

## Setup

1. Copy `.env.example` to `.env`.
2. Set `JIRA_BASE_URL`, `JIRA_EMAIL`, and `JIRA_API_TOKEN`.
3. Keep `.env` private. Do not commit it or share the API token.
4. Run:

```bash
npm run export
```

The default output directory is `./jira-export`.

## Environment variables

- `JIRA_BASE_URL`: Your Jira site URL, such as `https://example.atlassian.net`.
- `JIRA_EMAIL`: Email address for the Atlassian account.
- `JIRA_API_TOKEN`: API token created from your Atlassian account security settings.
- `JIRA_OUTPUT_DIR`: Optional output directory; defaults to `./jira-export`.
- `JIRA_PAGE_SIZE`: Optional page size from 1 to 100; defaults to `100`.

## Output

```text
jira-export/
  KAN-4-Linux-Day-1/
    description.md
    attachments/
      example.pdf
  KAN-5-Day-1-Infra/
    description.md
    attachments/
```

The Markdown file includes the issue key, title, status, assignee, issue type, priority, created/updated dates, original Jira URL, description, and attachment filenames.

## Safety and behavior

- The exporter only reads Jira data and downloads attachments; it does not modify issues.
- It uses Jira's authenticated API and only exports issues visible to the configured account.
- Attachments are downloaded from Jira's attachment content URLs using the same authentication.
- Existing files are not overwritten by default. If a downloaded filename already exists, a numbered filename is used.
- Filenames are sanitized to avoid path traversal and invalid path characters.
- Failed issue or attachment downloads are reported; the script continues where possible.
- Exported Markdown may contain sensitive work information. Keep the output directory private.
- Do not put `.env` in version control.

## API token

Create an API token in your Atlassian account security settings. Use the email address for the same account. Treat the token like a password.

## Notes

Jira descriptions can contain rich-text Atlassian Document Format (ADF). The exporter converts common ADF structures into readable Markdown-like text. Complex layouts may not preserve their exact visual formatting.
