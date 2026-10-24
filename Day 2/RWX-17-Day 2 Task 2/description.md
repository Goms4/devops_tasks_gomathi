# RWX-17: Day 2 Task 2

- **Jira:** https://mailaryanprakash.atlassian.net/browse/RWX-17
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Epic
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-12T10:13:46.360Z
- **Updated:** 2026-10-12T12:31:37.343Z
- **Due date:** 2026-10-12
- **Labels:** —
- **Components:** —

## Description

Linux User, File Permissions and Group Ownership

Objective: Execute and validate a combination of Linux user, permission, and ownership commands.

Commands:

1. sudo useradd -m teamuser5 Create a user with a home directory.
2. chmod 600 ~/sandbox/file5.txt Give the owner read/write permissions and remove permissions for group and others.
3. chmod a+r,u+w,g+x ~/sandbox/file5.txt Add read permission for everyone, owner write permission, and group execute permission.
4. sudo chown teamuser5 ~/sandbox/file5.txt Change the owner of the file.
5. sudo chgrp teamgroup5 ~/sandbox/file5.txt Change the file's group.
Validation: Run id teamuser5 and ls -l ~/sandbox/file5.txt.

Deliverables: Attach screenshots and record the initial and final permission states.

## Attachments

- [Screenshot 2026-10-12 at 5.24.21 PM.png](attachments/Screenshot%202026-10-12%20at%205.24.21%20PM.png)
