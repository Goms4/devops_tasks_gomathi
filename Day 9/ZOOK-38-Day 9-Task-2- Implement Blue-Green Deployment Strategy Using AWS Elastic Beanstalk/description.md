# ZOOK-38: Day 9-Task-2: Implement Blue-Green Deployment Strategy Using AWS Elastic Beanstalk

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-38
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-24T08:56:14.290Z
- **Updated:** 2026-10-24T09:47:55.636Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

As part of our deployment and release engineering upskilling, this task focuses on implementing a Blue-Green Deployment strategy using AWS Elastic Beanstalk. The objective is to maintain two separate application environments, Blue (current production version) and Green (updated application version), to enable controlled releases, validate changes before switching traffic, and minimize application downtime during deployments.

Create two Elastic Beanstalk environments, deploy the initial application to Blue, deploy an updated version to Green, validate the changes through the Green environment URL, and perform an environment URL/domain swap to direct traffic to the updated application.

Blue-Green Deployment Challenges

1. AWS Elastic Beanstalk Application Setup

- Concept: Create an Elastic Beanstalk application that manages separate environments for the current and updated application versions.
- Practice:  - Create an Elastic Beanstalk application. - Select the appropriate platform and runtime for the application. - Prepare a simple web application with a visible version identifier.
2. Create the Blue Environment

- Concept: Deploy the initial stable application version into the Blue environment, representing the current production release.
- Practice:  - Create an Elastic Beanstalk environment named blue-env. - Deploy the initial application version, such as v1. - Access the Blue environment URL and verify that the application is working correctly. - Record the environment URL and the displayed application version.
3. Create the Green Environment

- Concept: Establish a separate environment for deploying and validating the next application release without immediately affecting the Blue environment.
- Practice:  - Create another Elastic Beanstalk environment named green-env. - Use the same application platform and compatible configuration as Blue. - Deploy the initial version or a baseline application. - Verify that Green is healthy and accessible through its environment URL.
4. Update the Green Environment

- Concept: Deploy a new application version to Green while keeping Blue unchanged and available.
- Practice:  - Modify the webpage to display an updated version identifier, such as v2. - Update the webpage content with a visible change, such as a new heading or release message. - Deploy the updated application bundle to green-env. - Confirm that the Green environment displays the new version while Blue continues to display v1.
5. Validate the Green Environment

- Concept: Test the updated application before routing production traffic to it.
- Practice:  - Open the Green environment URL in a browser. - Verify that the updated webpage and version identifier are visible. - Check application health, HTTP responses, and relevant logs. - Confirm that the updated environment is ready to receive production traffic.
6. Perform the Environment URL Swap

- Concept: Use Elastic Beanstalk's environment swap functionality to exchange the environment URLs, directing the existing production URL to the updated application.
- Practice:  - Navigate to the Elastic Beanstalk environment management console. - Select the environment URL swap action between blue-env and green-env. - Confirm the swap and wait for the operation to complete. - Verify that the original Blue URL now serves the updated application from Green. - Record the environment URLs before and after the swap.
7. Verify the Deployment After the Swap

- Concept: Confirm that the updated application is accessible through the production-facing URL after the traffic switch.
- Practice:  - Open the original Blue environment URL in a browser. - Verify that the webpage displays version v2 and the updated content. - Open the other environment URL and record which application version it serves. - Check HTTP responses and environment health. - Capture screenshots showing the updated webpage through the original production URL.
8. Validate Blue-Green Isolation and Availability

- Concept: Ensure that the environment switch does not unintentionally modify the previous application deployment or introduce availability issues.
- Practice:  - Confirm that the original Blue deployment remains available in the other environment after the swap. - Check both environments for health and application errors. - Verify that the production-facing URL consistently serves the expected version. - Document any downtime, DNS caching, or temporary routing inconsistencies observed.
Acceptance Criteria

- Two separate Elastic Beanstalk environments, blue-env and green-env, are created successfully.
- The Blue environment initially serves application version v1.
- The Green environment is updated to version v2 without modifying the Blue application's deployment.
- The Green environment is validated before the URL swap.
- The Elastic Beanstalk environment URL swap completes successfully.
- The original Blue environment URL serves the updated v2 webpage after the swap.
- The final environment URLs, application versions, and health statuses are documented.
- Before-and-after screenshots are attached as execution evidence.
- Any deployment issues and rollback considerations are documented.
Deliverable: A working Blue-Green deployment demonstration on AWS Elastic Beanstalk, supported by environment URLs, version verification, health checks, and before-and-after screenshots.

Environment: AWS Elastic Beanstalk

Labels: aws, elastic-beanstalk, blue-green-deployment, ci-cd, deployment, release-engineering

## Attachments

- [Screenshot 2026-10-24 at 2.58.27 PM.png](attachments/Screenshot%202026-10-24%20at%202.58.27%20PM.png)
- [Screenshot 2026-10-24 at 2.58.58 PM.png](attachments/Screenshot%202026-10-24%20at%202.58.58%20PM.png)
- [Screenshot 2026-10-24 at 3.07.49 PM.png](attachments/Screenshot%202026-10-24%20at%203.07.49%20PM.png)
- [Screenshot 2026-10-24 at 3.11.22 PM.png](attachments/Screenshot%202026-10-24%20at%203.11.22%20PM.png)
- [Screenshot 2026-10-24 at 3.14.04 PM.png](attachments/Screenshot%202026-10-24%20at%203.14.04%20PM.png)
- [Screenshot 2026-10-24 at 3.14.31 PM.png](attachments/Screenshot%202026-10-24%20at%203.14.31%20PM.png)
- [Screenshot 2026-10-24 at 3.14.56 PM.png](attachments/Screenshot%202026-10-24%20at%203.14.56%20PM.png)
- [Screenshot 2026-10-24 at 3.15.48 PM.png](attachments/Screenshot%202026-10-24%20at%203.15.48%20PM.png)
- [Screenshot 2026-10-24 at 3.15.52 PM.png](attachments/Screenshot%202026-10-24%20at%203.15.52%20PM.png)
