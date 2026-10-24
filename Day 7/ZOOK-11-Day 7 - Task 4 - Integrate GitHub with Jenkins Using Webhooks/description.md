# ZOOK-11: Day 7 - Task 4 - Integrate GitHub with Jenkins Using Webhooks

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-11
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** sasidharana504
- **Created:** 2026-10-21T09:17:50.209Z
- **Updated:** 2026-10-22T09:19:57.673Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

OS: SUSE
Labels: jenkins, github, webhook, ci-cd, automation

Description

Configure a GitHub repository to communicate with Jenkins through webhooks, enabling automated job execution when relevant repository events occur.

Configure Jenkins to connect to the designated GitHub repository, establish webhook-based build triggers, and validate end-to-end integration by pushing a commit to GitHub and confirming that Jenkins starts the corresponding build automatically.

Scope of Work

1. Configure Git and GitHub repository details in Jenkins.
2. Install and configure the required Jenkins Git and GitHub integration plugins.
3. Configure the Jenkins job to pull source code from the designated GitHub repository.
4. Enable the GitHub webhook build trigger in Jenkins.
5. Configure the GitHub repository webhook to send push events to the Jenkins endpoint.
6. Ensure the Jenkins endpoint is reachable from GitHub over HTTPS.
7. Validate automatic build execution following a repository push.
8. Document the integration configuration, test results, and troubleshooting findings.
Implementation Tasks

1. Configure Jenkins

- Verify that the Git and GitHub integration plugins are installed.
- Configure the Git executable and required credentials under Jenkins system settings where applicable.
- Open the target Jenkins job and configure Source Code Management → Git.
- Provide the GitHub repository URL and credentials if the repository is private.
- Under Build Triggers, enable GitHub hook trigger for GITScm polling.
- Add a simple build step to verify that the source code has been checked out successfully.
2. Configure the GitHub Webhook

Navigate to the GitHub repository:

Settings → Webhooks → Add webhook

Configure the following:

- Payload URL: https://<jenkins-domain>/github-webhook/
- Content type: application/json
- Secret: Configure a shared webhook secret if supported by the chosen integration and ensure it is validated.
- Events: Select Just the push event.
- Active: Enabled.
Replace <jenkins-domain> with the actual reachable Jenkins hostname. Do not expose Jenkins directly to the public internet without appropriate access controls.

3. Validate Webhook Delivery

- Confirm that GitHub can reach the configured Jenkins endpoint.
- Inspect the webhook delivery response in GitHub under Settings → Webhooks → Recent Deliveries.
- Push a new commit to the configured repository.
- Confirm that Jenkins receives the event and starts the corresponding job.
- Review Jenkins console output to verify checkout and build execution.
- Check for duplicate or unexpected builds and verify the behavior for unrelated branches.
4. Troubleshooting

Investigate the following if the build does not trigger:

- Incorrect webhook URL or Jenkins context path.
- Security group, firewall, reverse proxy, DNS, or TLS certificate issues.
- Missing Git/GitHub plugins or incorrect trigger configuration.
- Invalid repository credentials or branch specifications.
- Jenkins authorization or webhook validation failures.
- GitHub webhook delivery errors and Jenkins system logs.
Acceptance Criteria

- Jenkins is configured to access the designated GitHub repository.
- The required Git and GitHub integration plugins are installed and operational.
- The target Jenkins job has the GitHub webhook build trigger enabled.
- A GitHub webhook is configured for push events.
- GitHub successfully delivers a test webhook to Jenkins.
- A push to the configured repository automatically triggers the intended Jenkins job.
- Jenkins successfully checks out the latest commit and executes the build.
- Webhook delivery and Jenkins console logs provide sufficient evidence of successful integration.
- Webhook secrets and repository credentials are stored securely and are not exposed in logs.
- The configuration and test evidence are documented in the Jira ticket.
Dependencies and Assumptions

- Jenkins is installed and running on the designated EC2 instance.
- A GitHub repository is available for integration.
- The Jenkins endpoint is reachable from GitHub over HTTPS.
- Appropriate GitHub repository permissions and Jenkins administrative access are available.
- Network access is restricted to the required endpoints and administrative sources.
Definition of Done

The GitHub repository is successfully integrated with Jenkins through a webhook, and a repository push automatically triggers the intended Jenkins build. The successful delivery, source checkout, and build execution are verified and documented.

## Attachments

- [Screenshot 2026-10-21 at 6.29.42 PM.png](attachments/Screenshot%202026-10-21%20at%206.29.42%20PM.png)
- [Screenshot 2026-10-21 at 6.30.36 PM.png](attachments/Screenshot%202026-10-21%20at%206.30.36%20PM.png)
- [Screenshot 2026-10-21 at 6.30.46 PM.png](attachments/Screenshot%202026-10-21%20at%206.30.46%20PM.png)
