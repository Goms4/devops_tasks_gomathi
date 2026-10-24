# ZOOK-14: Day 7 - Task 3 - Configure Chained Jenkins Jobs with Scheduled Execution

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-14
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** sasidharana504
- **Created:** 2026-10-21T09:32:56.484Z
- **Updated:** 2026-10-22T09:20:09.122Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

OS: RedHat
Labels: jenkins, ci-cd, job-scheduling, build-triggers, automation

Description

Create and configure three Jenkins jobs connected through post-build triggers to establish an automated, sequential CI/CD workflow. Configure a scheduled trigger for the first job so that execution of the pipeline begins automatically at the specified time or interval.

The workflow must ensure that successful completion of each upstream job triggers the next job in the sequence, with appropriate execution logs and failure handling.

Scope of Work

1. Create three Jenkins jobs: Job-A, Job-B, and Job-C.
2. Configure build steps for each job and verify that each job executes independently.
3. Configure a post-build trigger on Job-A to trigger Job-B after a successful build.
4. Configure a post-build trigger on Job-B to trigger Job-C after a successful build.
5. Configure a scheduled trigger for Job-A using Jenkins cron syntax.
6. Validate the complete job chain through both manual and scheduled execution.
7. Document the configuration, execution results, and any failures encountered.
Implementation Tasks

1. Create the Jenkins Jobs

- Create Job-A, Job-B, and Job-C as Freestyle projects.
- Add a simple shell build step to each job.
- Ensure each job produces a clear execution message and exits with the appropriate status.
Example build steps:

Job-A


```
echo "Job-A: Pipeline initiation"
date
```

Job-B


```
echo "Job-B: Intermediate processing"
date
```

Job-C


```
echo "Job-C: Final processing completed"
date
```

2. Configure Post-Build Triggers

- In Job-A, configure a post-build action to trigger Job-B only when Job-A succeeds.
- In Job-B, configure a post-build action to trigger Job-C only when Job-B succeeds.
- Ensure failed or unstable upstream builds do not trigger downstream jobs unless explicitly required.
3. Schedule the First Job

Configure the Build periodically option under Job-A with the following example schedule:


```
H/15 * * * *
```

This schedules Job-A approximately every 15 minutes, with Jenkins distributing the minute within the interval using its hash-based scheduling convention.

Use an approved schedule for the target environment; avoid frequent production execution unless required.

4. Validate the Workflow

- Trigger Job-A manually and confirm that Job-B and Job-C execute in sequence.
- Confirm that downstream jobs are triggered only after successful upstream completion.
- Introduce a controlled failure in Job-A and verify that Job-B and Job-C are not triggered.
- Confirm that the scheduled trigger starts Job-A at the configured interval.
- Review console output and build history for all three jobs.
Acceptance Criteria

- Three Jenkins jobs are created and execute independently.
- Job-A triggers Job-B after successful completion.
- Job-B triggers Job-C after successful completion.
- The first job has a valid scheduled trigger configured.
- A manual run completes the full three-job chain successfully.
- A failed upstream job prevents the corresponding downstream trigger.
- Scheduled execution is verified through Jenkins build history.
- Console logs and screenshots or equivalent evidence are attached to the Jira ticket.
- Job names, trigger conditions, and scheduling configuration are documented.
Dependencies and Assumptions

- Jenkins is installed and operational on the designated EC2 instance.
- The user has sufficient permissions to create jobs and configure build triggers.
- The Jenkins controller has the correct system time and timezone configuration.
- The required shell environment is available to the Jenkins execution agent.
Definition of Done

All three jobs are configured, the post-build trigger chain works as intended, the first job executes according to its configured schedule, and both successful and failure scenarios have been validated and documented.

## Attachments

- [Screenshot 2026-10-21 at 5.56.30 PM.png](attachments/Screenshot%202026-10-21%20at%205.56.30%20PM.png)
- [Screenshot 2026-10-21 at 5.56.51 PM.png](attachments/Screenshot%202026-10-21%20at%205.56.51%20PM.png)
