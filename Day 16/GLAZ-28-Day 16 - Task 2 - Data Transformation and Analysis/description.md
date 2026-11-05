# GLAZ-28: Day 16 | Task 2 | Data Transformation and Analysis

- **Jira:** https://mail4mithunu.atlassian.net/browse/GLAZ-28
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Sriram JAGU
- **Created:** 2026-11-04T10:13:00.643Z
- **Updated:** 2026-11-04T12:38:01.295Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Extend the existing Snowflake environment by introducing additional datasets and performing an end-to-end data engineering workflow.

The objective is to gain practical experience in loading multiple datasets, transforming raw data into analysis-ready tables, writing analytical SQL queries, and optimizing query performance using Snowflake's Query Profile.

The implementation should reuse the existing Snowflake environment and follow consistent database, schema, table, and warehouse naming conventions.

Scope of Work

1. Extend the Existing Snowflake Environment
Reuse the existing Snowflake account and environment.

Create additional tables under the appropriate schemas.

Define suitable column names and data types for each dataset.

1. Dataset Preparation
Identify and prepare multiple CSV datasets.

Ensure consistent column names, data types, and date formats.

Inspect and handle missing values, duplicates, and invalid records before ingestion.

1. CSV Upload and Data Ingestion
Upload the prepared CSV files to Snowflake internal stages.

Configure appropriate CSV file formats.

Load each dataset into its corresponding table using COPY INTO.

1. Data Validation
Validate the number of records loaded.

Check for NULL values and duplicate records.

Verify data types and identify rejected or incorrectly loaded records.

Compare source dataset counts with Snowflake table counts.

1. Data Transformation
Perform data cleaning and transformation using SQL.

Apply filtering, type casting, calculated columns, and aggregations.

Create transformed tables or views for analytical use.

1. Analytical Queries
Execute analytical queries across the loaded datasets.

Perform aggregations, joins, grouping, and filtering.

Derive meaningful business insights from the datasets.

1. SQL Query Optimization
Review analytical queries for potential performance improvements.

Optimize joins, filters, aggregations, and query structure.

Compare the original and optimized SQL queries.

1. Query Performance Analysis
Execute both original and optimized queries.

Compare execution time and other available query statistics.

Inspect Snowflake Query Profile to understand query execution.

Identify expensive operations such as table scans, joins, and data spilling, where applicable.

Expected Deliverables

Prepared CSV datasets.

SQL scripts for table creation, file formats, stages, and data ingestion.

Data validation and transformation SQL scripts.

Analytical SQL queries.

Original and optimized query versions.

Query performance comparison results.

Screenshots of successful ingestion, query results, and Query Profile.

Documentation explaining the workflow, findings, and optimization decisions.

## Attachments

- [attendance.csv](attachments/attendance.csv)
- [Day16.sql](attachments/Day16.sql)
- [departments.csv](attachments/departments.csv)
- [employees.csv](attachments/employees.csv)
- [payroll.csv](attachments/payroll.csv)
- [SnowFlake day .pdf](attachments/SnowFlake%20day%20.pdf)
