# RWX-32: Day 2 Task 5

- **Jira:** https://mailaryanprakash.atlassian.net/browse/RWX-32
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Epic
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-12T10:31:03.145Z
- **Updated:** 2026-10-12T12:57:09.804Z
- **Due date:** 2026-10-12
- **Labels:** —
- **Components:** —

## Description

Deploy a Static Web Application on Two EC2 Servers

Objective: Deploy the same static web application on two EC2 instances, one running Ubuntu and the other running Windows Server.

Instructions

1. Use the two EC2 instances created in the previous ticket: Ubuntu-Server and Windows-Server.
2. Choose any simple static application, such as a basic HTML, CSS, and JavaScript website.
3. On the Ubuntu server:  - Install and configure a web server such as Apache or Nginx. - Copy the static application files to the web server's document root. - Start the web server and enable it to start automatically.
4. On the Windows server:  - Install and configure IIS (Internet Information Services). - Copy the same static application files into the IIS website directory. - Start the IIS service.
5. Configure the EC2 security groups to allow HTTP traffic on port 80, restricted to the approved lab IP range where possible.
6. Open the public IP address of each server in a browser and verify that the application loads successfully.
Expected Outcome

- The same static application is deployed on both EC2 instances.
- The website is accessible through the Ubuntu server's public IP and the Windows server's public IP.
- Both deployments are tested and working.
Deliverables

- Screenshots of both EC2 instances.
- Screenshots showing the application running from each server's public IP.
- A brief note describing the web server used on each OS and the deployment steps.
Important: Use only the authorized AWS lab account. Keep SSH (port 22) and RDP (port 3389) restricted to approved IPs, and stop or terminate the instances after testing if they are no longer needed to avoid unnecessary costs.

## Attachments

- [Screenshot 2026-10-12 at 6.04.46 PM.png](attachments/Screenshot%202026-10-12%20at%206.04.46%20PM.png)
- [Screenshot 2026-10-12 at 6.16.28 PM.png](attachments/Screenshot%202026-10-12%20at%206.16.28%20PM.png)
