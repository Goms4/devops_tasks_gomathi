# JIN-34: Day 11 - Task 5 -Identify Duplicate Records and Repeated Order IDs

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-34
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Praneesh Parshi
- **Created:** 2026-10-27T09:59:33.950Z
- **Updated:** 2026-10-27T11:56:20.334Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Analyze the e-commerce dataset for duplicate records and repeated Order_ID values to determine whether they represent actual duplicate transactions or legitimate multiple items within the same order.

Activities:

- Use df.duplicated().sum() to determine the total number of completely duplicated rows.
- Print only the duplicated records.
- Identify repeated order IDs using methods such as:

```
df['Order_ID'].duplicated().sum()
```

and:


```
df['Order_ID'].value_counts()
```

- Identify the orders that occur multiple times.
- Investigate whether repeated Order_IDs are:  - Actual duplicate transactions. - Multiple products belonging to the same order. - Multiple entries caused by data collection issues.
- Compare relevant columns such as product, quantity, price, customer, and date to determine the cause.
- Remove only genuine duplicate records using .drop_duplicates().
- Preserve legitimate repeated order IDs when they represent multiple products in the same order.

## Attachments

- [Duplicate Record Analysis.txt](attachments/Duplicate%20Record%20Analysis.txt)
- [Screenshot 2026-10-27 at 5.24.36 PM.png](attachments/Screenshot%202026-10-27%20at%205.24.36%20PM.png)
- [Screenshot 2026-10-27 at 5.24.50 PM.png](attachments/Screenshot%202026-10-27%20at%205.24.50%20PM.png)
- [Screenshot 2026-10-27 at 5.24.58 PM.png](attachments/Screenshot%202026-10-27%20at%205.24.58%20PM.png)
