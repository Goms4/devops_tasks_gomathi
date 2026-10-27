# JIN-30: Day 11 - Task 3 - Identify Missing Values in Every Column

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-30
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Praneesh Parshi
- **Created:** 2026-10-27T09:47:58.211Z
- **Updated:** 2026-10-27T11:51:39.484Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Analyze the e-commerce dataset to identify missing/null values in every column and determine the possible causes and appropriate handling strategy for each issue.

Activities:

- Use df.isnull().sum() to calculate the number of missing values in each column.
- Identify columns containing missing values.
- Calculate the percentage of missing values where useful.
- Investigate possible causes of missing data, such as:  - Data not provided by the customer. - Optional fields. - Failed data collection. - Incorrect data import. - Missing values represented by empty strings or special values. - Incomplete transactions.
- Determine an appropriate solution for each column:  - Fill with mean/median/mode where appropriate. - Use a default/category such as "Unknown". - Forward/backward fill for suitable time-series data. - Remove rows where the missing record cannot be reliably recovered. - Correct the source data if the missing value is caused by an import/transformation issue.
- Recheck isnull().sum() after cleaning to verify the result.

## Attachments

- [missing value anaysis.txt](attachments/missing%20value%20anaysis.txt)
- [Screenshot 2026-10-27 at 5.15.58 PM.png](attachments/Screenshot%202026-10-27%20at%205.15.58%20PM.png)
- [Screenshot 2026-10-27 at 5.17.27 PM.png](attachments/Screenshot%202026-10-27%20at%205.17.27%20PM.png)
