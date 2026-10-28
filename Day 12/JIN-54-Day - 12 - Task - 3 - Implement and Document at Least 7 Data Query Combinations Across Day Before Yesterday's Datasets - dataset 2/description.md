# JIN-54: Day - 12 - Task - 3 - Implement and Document at Least 7 Data Query Combinations Across Day Before Yesterday's Datasets - dataset 2

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-54
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** N ASHISH
- **Created:** 2026-10-28T10:37:40.379Z
- **Updated:** 2026-10-28T11:46:22.668Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description

Implement and demonstrate at least 7 different query combinations across day before yesterdays dataset, with a minimum of 7 combinations in total. The queries should demonstrate different ways of retrieving, filtering, aggregating, sorting, and analyzing data.

The implementation must be applicable to general-purpose structured datasets, such as sales, customer, employee, inventory, transaction, or operational datasets. The query combinations should not be restricted to any specific dataset or business domain.

For each query combination, document the results using the following format:

Heading: A clear title describing the query objective.

Query: The SQL query or equivalent data-query expression used.

Output: The actual result produced by executing the query.

Implement at least seven combinations selected from the following query patterns:

1. Filtering with Multiple Conditions
Retrieve records that satisfy two or more conditions using logical operators such as AND and OR.

Objective: Demonstrate how multiple criteria can be combined to filter records.

1. Sorting and Limiting Results
Retrieve records in ascending or descending order and restrict the result to a specified number of records.

Objective: Identify the highest, lowest, newest, oldest, or otherwise prioritized records.

1. Aggregation with Grouping
Group records by one or more categorical fields and calculate aggregate values using functions such as COUNT(), SUM(), AVG(), MIN(), and MAX().

Objective: Summarize data by category, region, department, status, or another relevant dimension.

1. Filtering Aggregated Results
Combine GROUP BY with HAVING to return only groups that meet a specified aggregate condition.

Objective: Identify groups that exceed a threshold, contain a minimum number of records, or satisfy another aggregate criterion.

1. Joining Multiple Tables or Datasets
Combine related records from two tables using an appropriate join, such as INNER JOIN or LEFT JOIN.

Objective: Retrieve related information from different data sources using a common key.

1. Subqueries
Use a subquery to compare records against a calculated value or retrieve records that satisfy a condition derived from another query.

Objective: Demonstrate nested query logic, such as identifying records above an overall average or matching values from a related dataset.

1. Date-Based Queries
Filter, group, or aggregate records based on dates, months, years, or time ranges.

Objective: Analyze trends over time and retrieve records within a specified period.

1. Handling Missing or NULL Values
Use IS NULL, IS NOT NULL, COALESCE(), or appropriate conditional expressions to identify or handle missing values.

Objective: Demonstrate data-quality checks and suitable handling of incomplete records.

1. Duplicate Detection
Identify duplicate values or repeated combinations of fields using GROUP BY and HAVING COUNT(*) > 1.

Objective: Detect potential duplicate records while distinguishing legitimate repeated business identifiers from true duplicates.

1. Conditional Aggregation
Use CASE WHEN with aggregate functions to calculate multiple conditional metrics in a single query.

Objective: Compare categories or statuses and calculate several metrics in one result set.

1. Window Functions
Use functions such as ROW_NUMBER(), RANK(), DENSE_RANK(), or SUM() OVER().

Objective: Rank records, identify top records within groups, or calculate running totals without collapsing individual rows.

1. Set Operations
Use UNION, UNION ALL, INTERSECT, or EXCEPT where supported by the query engine.

Objective: Combine or compare result sets from different queries.

Implementation Requirements

Use two structured datasets and select query combinations that are appropriate for their schemas.

Implement at least seven distinct query combinations across both datasets combined.

Ensure the selected queries demonstrate meaningful analytical operations rather than repeating the same pattern with different column names.

## Attachments

- [TV_TRP_querying.pdf](attachments/TV_TRP_querying.pdf)
