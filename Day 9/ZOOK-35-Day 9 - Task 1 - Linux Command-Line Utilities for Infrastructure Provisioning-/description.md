# ZOOK-35: Day 9 - Task 1 - Linux Command-Line Utilities for Infrastructure Provisioning


- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-35
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-24T06:56:43.015Z
- **Updated:** 2026-10-24T09:57:40.272Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

As part of our infrastructure automation and DevOps upskilling, this ticket covers 10 essential Linux command-line tools used in infrastructure provisioning, server configuration, network diagnostics, storage management, and service administration.

Create a practice script or execute these commands interactively in your Red Hat Enterprise Linux (RHEL) environment to understand how Linux systems are inspected, configured, prepared, and managed before application deployment.

The 10 Infrastructure Provisioning Challenges

1. hostnamectl | Server Identity and Configuration

- Concept: Displays and manages the system hostname and operating system information.
- Practice:   ``` hostnamectl sudo hostnamectl set-hostname infra-server-01 hostnamectl ```
2. ip | Network Interface Configuration

- Concept: Inspects network interfaces, IP addresses, and routing information for connectivity and network troubleshooting.
- Practice:   ``` ip addr ip route ip link show ```
3. dnf | Package and Dependency Management

- Concept: Installs, updates, and manages software packages and their dependencies on RHEL systems.
- Practice:   ``` sudo dnf check-update sudo dnf install -y git python3 rpm -q git python3 ```
4. systemctl | Service Provisioning and Management

- Concept: Controls and monitors Linux services required for infrastructure components and applications.
- Practice:   ``` sudo systemctl status sshd sudo systemctl enable --now sshd systemctl is-enabled sshd ```
5. lsblk | Block Device and Storage Discovery

- Concept: Identifies attached disks, partitions, and storage devices before provisioning filesystems or expanding volumes.
- Practice:   ``` lsblk lsblk -f sudo fdisk -l ```
6. df and du | Disk Capacity and Usage Monitoring

- Concept: Checks filesystem capacity and directory-level storage consumption to prevent disk exhaustion on servers.
- Practice:   ``` df -h sudo du -sh /var/log sudo du -sh /opt ```
7. mkdir and chmod | Infrastructure Directory Setup

- Concept: Creates standard directories for deployment scripts, application configurations, and logs while applying appropriate filesystem permissions.
- Practice:   ``` sudo mkdir -p /opt/infra/{scripts,configs,logs} sudo chmod 750 /opt/infra ls -ld /opt/infra /opt/infra/* ```
8. firewall-cmd | Firewall and Network Access Configuration

- Concept: Inspects and manages firewall rules to control permitted network traffic to infrastructure services.
- Practice:   ``` sudo firewall-cmd --state sudo firewall-cmd --list-all sudo firewall-cmd --get-active-zones ```
9. curl | Service Connectivity and Endpoint Validation

- Concept: Tests HTTP/HTTPS endpoints and validates application or service availability during infrastructure setup and deployment.
- Practice:   ``` curl -I https://example.com curl -sS -o /dev/null -w "%{http_code}\n" https://example.com ```
10. journalctl | System Logs and Troubleshooting

- Concept: Examines systemd journal logs to diagnose service failures, startup issues, and infrastructure configuration problems.
- Practice:   ``` sudo journalctl -p err -b sudo journalctl -u sshd --since "1 hour ago" sudo journalctl --disk-usage ```
Acceptance Criteria

- Execute all 10 challenges successfully in a RHEL environment.
- Understand the purpose of each command and its relevance to infrastructure provisioning.
- Capture command outputs or terminal screenshots as execution evidence.
- Document any errors encountered and the troubleshooting steps taken.
- Verify that the infrastructure directories and required packages are available after setup.
- Ensure no existing firewall rules, storage partitions, or production services are modified unintentionally.
Deliverable: A Linux practice script or execution record containing the commands, their outputs, and brief observations for each challenge.

Environment: Red Hat Enterprise Linux (RHEL) on an AWS EC2 instance.

Labels: linux, rhel, infrastructure-provisioning, devops, automation

## Attachments

- [Screenshot 2026-10-24 at 3.27.11 PM.png](attachments/Screenshot%202026-10-24%20at%203.27.11%20PM.png)
- [Screenshot 2026-10-24 at 3.27.15 PM.png](attachments/Screenshot%202026-10-24%20at%203.27.15%20PM.png)
