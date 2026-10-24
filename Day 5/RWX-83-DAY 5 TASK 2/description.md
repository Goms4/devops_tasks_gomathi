# RWX-83: DAY 5 TASK 2

- **Jira:** https://mailaryanprakash.atlassian.net/browse/RWX-83
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Bug
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Aryan Prakash
- **Created:** 2026-10-15T06:49:32.499Z
- **Updated:** 2026-10-15T08:15:41.640Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Task 2: Build an AWS Notification System Using CloudTrail, CloudWatch, SNS, SQS, EC2, and IAM Roles

Task Description

Design and implement a simple, event-driven notification system on AWS by integrating Amazon CloudTrail, Amazon CloudWatch, Amazon SNS, Amazon SQS, an EC2 instance, and IAM roles.

Objectives

- Amazon EC2: Launch an EC2 instance to serve as the target resource for monitoring and testing.
- AWS CloudTrail: Capture and record AWS API activity, including relevant EC2 instance events.
- Amazon CloudWatch: Create a metric filter and alarm to detect specified events from CloudTrail logs.
- Amazon SNS: Configure an SNS topic to send notifications, such as email alerts, when the CloudWatch alarm is triggered.
- Amazon SQS: Create an SQS queue and subscribe it to the SNS topic to receive and retain notifications for asynchronous processing.
- AWS IAM Roles and Policies: Configure appropriate IAM roles and permissions to allow AWS services to interact securely, following the principle of least privilege.
Implementation Steps

1. Launch an EC2 instance for monitoring and testing.
2. Configure CloudTrail to capture relevant AWS management events.
3. Create a CloudWatch Logs integration and metric filter to identify a specific EC2 API event, such as instance termination.
4. Create a CloudWatch alarm that triggers when the selected event is detected.
5. Create an SNS topic and configure an email subscription for notifications.
6. Create an SQS queue and subscribe it to the SNS topic, including the required queue access policy.
7. Configure the necessary IAM roles and policies for CloudTrail, CloudWatch, SNS, and SQS integrations.
8. Test the complete workflow by performing the selected EC2 action and verifying that the CloudWatch alarm triggers, an SNS notification is delivered, and a message is received in the SQS queue.
9. Document the AWS configuration, permissions, testing results, and cleanup procedure.
Expected Outcome

A functional AWS notification system that monitors selected EC2-related API activity, detects configured events through CloudWatch, sends alerts through SNS, and delivers notification messages to SQS for reliable asynchronous consumption.

Acceptance Criteria

- CloudTrail successfully records the selected AWS API event.
- CloudWatch Logs and the metric filter identify the configured event.
- The CloudWatch alarm transitions to the expected state when the event occurs.
- SNS delivers an email notification after the alarm is triggered.
- SQS receives and retains the corresponding SNS message.
- IAM roles and resource policies grant only the permissions required for the workflow.
- The implementation is tested and documented, and temporary AWS resources are cleaned up where appropriate.

## Attachments

- [Screenshot 2026-10-15 at 1.27.41 PM.png](attachments/Screenshot%202026-10-15%20at%201.27.41%20PM.png)
- [Screenshot 2026-10-15 at 1.31.56 PM.png](attachments/Screenshot%202026-10-15%20at%201.31.56%20PM.png)
- [Screenshot 2026-10-15 at 1.34.38 PM.png](attachments/Screenshot%202026-10-15%20at%201.34.38%20PM.png)
- [Screenshot 2026-10-15 at 1.36.14 PM.png](attachments/Screenshot%202026-10-15%20at%201.36.14%20PM.png)
- [Screenshot 2026-10-15 at 1.45.12 PM.png](attachments/Screenshot%202026-10-15%20at%201.45.12%20PM.png)
