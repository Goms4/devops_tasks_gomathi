# RWX-22: Day 2 Task 3

- **Jira:** https://mailaryanprakash.atlassian.net/browse/RWX-22
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Epic
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-12T10:19:13.294Z
- **Updated:** 2026-10-12T12:53:03.516Z
- **Due date:** 2026-10-12
- **Labels:** —
- **Components:** —

## Description

Create Two EC2 Instances: Ubuntu Linux and Windows Server

Objective: Launch two virtual servers on AWS EC2, one running Ubuntu Linux and the other running Windows Server, and verify that both instances are running.

Tasks:

1. Create an Ubuntu EC2 instance  - Open the AWS Management Console and navigate to EC2 → Instances → Launch instances. - Enter the instance name Ubuntu-Server. - Select an Ubuntu Server AMI. - Choose an instance type permitted by the training environment. - Configure a key pair and security group. - Launch the instance and wait until it reaches Running status and passes its status checks.
2. Create a Windows EC2 instance  - Launch another EC2 instance named Windows-Server. - Select a Windows Server AMI. - Choose an approved instance type. - Configure a key pair and security group. - Launch the instance and wait until it reaches Running status and passes its status checks.
3. Verify both instances  - Confirm that both instances appear in the EC2 Instances list. - Check their instance IDs, operating systems, instance states, and status checks. - Connect to Ubuntu using SSH or EC2 Instance Connect, where supported. - Connect to Windows using RDP or EC2 Instance Connect Endpoint, where supported by the selected configuration.
Security requirements:

- Allow SSH (port 22) or RDP (port 3389) only from an approved source IP or training network.
- Never expose SSH or RDP to 0.0.0.0/0 for this exercise.
- Store private keys securely and never share them in screenshots or tickets.
- Use the approved training account and instance types to avoid unnecessary costs.
Expected outcome: Two EC2 instances, one running Ubuntu Linux and one running Windows Server, are visible in the AWS console and ready for authorized connection.

Deliverables:

- Screenshot of the EC2 Instances page showing both instances and their states.
- Screenshot of each instance's details showing its selected AMI and status checks.
- Screenshot of a successful connection to each server, with sensitive information hidden.
- Brief confirmation of the operating system and connection method used for each instance.

## Attachments

- [Screenshot 2026-10-12 at 5.48.52 PM.png](attachments/Screenshot%202026-10-12%20at%205.48.52%20PM.png)
