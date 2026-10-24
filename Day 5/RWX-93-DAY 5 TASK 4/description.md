# RWX-93: DAY 5 TASK 4

- **Jira:** https://mailaryanprakash.atlassian.net/browse/RWX-93
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Bug
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Aryan Prakash
- **Created:** 2026-10-15T10:50:17.363Z
- **Updated:** 2026-10-21T16:50:47.500Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Task: Implement Prometheus and Grafana Monitoring for an AWS EC2 Instance

Description:

Launch an AWS EC2 instance and implement server monitoring using Prometheus, Node Exporter, and Grafana. Configure Node Exporter to expose system-level metrics, Prometheus to scrape and store those metrics, and Grafana to visualize them through a monitoring dashboard.

Scope of Work:

- Launch and configure an EC2 instance.
- Install and configure Node Exporter to collect CPU, memory, disk, and network metrics.
- Install and configure Prometheus to scrape metrics from Node Exporter.
- Set up Grafana and connect it to Prometheus as a data source.
- Create or import a Grafana dashboard to visualize sample system metrics.
- Verify that metrics are being collected and updated in real time.
- Configure appropriate AWS security group rules to allow only the required monitoring traffic.
Expected Outcome:

A working monitoring setup in which system metrics from the EC2 instance are collected by Node Exporter, stored in Prometheus, and displayed on a Grafana dashboard.

Acceptance Criteria:

- EC2 instance is running successfully.
- Node Exporter exposes system metrics.
- Prometheus successfully scrapes metrics from Node Exporter.
- Grafana connects to Prometheus and displays sample metrics, including CPU usage, memory utilization, disk usage, and network traffic.
- Monitoring services remain operational and accessible through the intended configuration.

## Attachments

- [Screenshot 2026-10-21 at 10.04.03 PM.png](attachments/Screenshot%202026-10-21%20at%2010.04.03%20PM.png)
- [Screenshot 2026-10-21 at 9.38.26 PM.png](attachments/Screenshot%202026-10-21%20at%209.38.26%20PM.png)
- [Screenshot 2026-10-21 at 9.38.42 PM.png](attachments/Screenshot%202026-10-21%20at%209.38.42%20PM.png)
- [Screenshot 2026-10-21 at 9.39.02 PM.png](attachments/Screenshot%202026-10-21%20at%209.39.02%20PM.png)
