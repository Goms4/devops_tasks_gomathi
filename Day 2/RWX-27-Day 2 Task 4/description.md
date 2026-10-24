# RWX-27: Day 2 Task 4

- **Jira:** https://mailaryanprakash.atlassian.net/browse/RWX-27
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Epic
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-12T10:24:36.330Z
- **Updated:** 2026-10-12T12:54:16.374Z
- **Due date:** 2026-10-12
- **Labels:** —
- **Components:** —

## Description

Convert PPK Key to PEM Format

Objective: Convert an existing .ppk private key into .pem format for connecting to an AWS EC2 Ubuntu instance.

Instructions:

1. Locate the existing .ppk private key file provided for the lab.
2. Download and open PuTTYgen.
3. Click Load and select the .ppk file. You may need to select All Files to see it.
4. Go to Conversions → Export OpenSSH key.
5. Save the exported private key with a .pem extension, for example, ubuntu-key.pem.
6. Set the correct file permissions on Linux/macOS:   ``` chmod 400 ubuntu-key.pem ```
7. Verify the converted key by using it to connect to the assigned Ubuntu EC2 instance:   ``` ssh -i ubuntu-key.pem ubuntu@<EC2-PUBLIC-IP> ```
Expected Outcome:

- A valid .pem key file is created.
- The key is used to successfully connect to the assigned Ubuntu EC2 instance.
Important: Use only the authorized lab key. Keep the private key secure, do not share or upload it, and never include it in screenshots or submissions. A .ppk to .pem conversion changes the key file format, not the key itself.

## Attachments

- [Screenshot 2026-10-12 at 5.52.55 PM.png](attachments/Screenshot%202026-10-12%20at%205.52.55%20PM.png)
