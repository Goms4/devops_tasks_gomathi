# ZOOK-13: Day 7 - Task 2 - Install and Validate Jenkins on an AWS EC2 Instance / Docker

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-13
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** sasidharana504
- **Created:** 2026-10-21T09:32:26.979Z
- **Updated:** 2026-10-22T06:35:26.225Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

OS: Suse
Labels: jenkins, aws, ec2, devops, ci-cd

Description

Provision and configure Jenkins on an AWS EC2 instance to establish a functional CI/CD automation server. Verify that Jenkins starts successfully, remains operational, and is accessible through the configured network endpoint.

Scope of Work

1. Verify EC2 instance readiness, operating system compatibility, and required compute resources.
2. Configure the required Java runtime and install Jenkins using the official package repository.
3. Configure Jenkins to start automatically on system boot and enable the service.
4. Configure the EC2 security group and host firewall to permit access only from authorized sources.
5. Access the Jenkins web interface and complete the initial setup wizard.
6. Validate Jenkins service health, HTTP availability, and application logs.
7. Document the Jenkins URL, installation steps, validation results, and any configuration issues.
Acceptance Criteria

- Jenkins is installed successfully on the designated EC2 instance.
- The Jenkins systemd service is enabled and reports active (running).
- Jenkins starts automatically after an EC2 instance reboot.
- The Jenkins web interface responds successfully over HTTP/HTTPS, as configured.
- The initial Jenkins setup wizard loads and can be completed.
- No persistent startup errors or critical failures are observed in Jenkins logs.
- Network access is restricted to authorized users or IP ranges; the Jenkins port is not exposed indiscriminately to the public internet.
- Installation and verification evidence is attached to the Jira ticket.
Implementation Tasks

1. Prepare the EC2 instance and confirm connectivity through SSH or AWS Systems Manager.
2. Install the compatible Java runtime and Jenkins package.
3. Configure and start the Jenkins service.
4. Configure network access, preferably using HTTPS through an appropriate reverse proxy or load balancer.
5. Complete initial administrator setup and secure the instance.
6. Execute service, HTTP, log, and reboot-persistence checks.
7. Record the final status and supporting evidence.
Validation Commands


```
# Check Jenkins service state
sudo systemctl status jenkins --no-pager

# Confirm service is enabled at boot
sudo systemctl is-enabled jenkins

# Check recent service logs
sudo journalctl -u jenkins -n 100 --no-pager

# Check the local Jenkins HTTP endpoint
curl -sS -o /dev/null \
  -w 'HTTP status: %{http_code}\n' \
  http://localhost:8080/login

# Confirm the Jenkins listener
sudo ss -ltnp | grep ':8080'
```

Expected results: The service is active and enabled, the logs show no persistent critical startup errors, and the login endpoint returns a successful HTTP response or an expected redirect. The listener check confirms that Jenkins is listening on the intended interface and port.

Definition of Done

Jenkins is installed, configured, accessible to authorized users, and verified as operational. Startup persistence is confirmed, validation evidence is documented, and any outstanding issues are recorded.

Dependencies and Assumptions

- An AWS account and designated EC2 instance are available.
- Appropriate IAM permissions and administrative access are provided.
- The instance has network connectivity to the required package repositories.
- A DNS name and TLS configuration are available if HTTPS is required.
- The operating system and Jenkins-supported Java version are confirmed before installation.

## Attachments

- [Screenshot 2026-10-21 at 3.48.35 PM.png](attachments/Screenshot%202026-10-21%20at%203.48.35%20PM.png)
- [Screenshot 2026-10-21 at 3.48.43 PM.png](attachments/Screenshot%202026-10-21%20at%203.48.43%20PM.png)
- [Screenshot 2026-10-21 at 3.48.51 PM.png](attachments/Screenshot%202026-10-21%20at%203.48.51%20PM.png)
- [Screenshot 2026-10-21 at 3.48.59 PM.png](attachments/Screenshot%202026-10-21%20at%203.48.59%20PM.png)
- [Screenshot 2026-10-21 at 3.49.07 PM.png](attachments/Screenshot%202026-10-21%20at%203.49.07%20PM.png)
- [Screenshot 2026-10-21 at 4.17.39 PM.png](attachments/Screenshot%202026-10-21%20at%204.17.39%20PM.png)
