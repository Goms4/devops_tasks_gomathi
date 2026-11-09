# GLAZ-76: Day 18 | Task 4 | Implement and Practice Essential DAX Functions for Sales Data Analysis in Power BI

- **Jira:** https://mail4mithunu.atlassian.net/browse/GLAZ-76
- **Status:** To Do
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Srinivas Reddy Yamasani
- **Created:** 2026-11-06T17:17:27.783Z
- **Updated:** 2026-11-06T17:17:27.851Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Work with the existing Sales dataset in Power BI and practise different DAX functions to calculate and analyse business information.

The task is to implement commonly used DAX functions such as SUM, AVERAGE, COUNTROWS, DISTINCTCOUNT, DIVIDE, IF, CALCULATE, SUMX, and SWITCH using the available sales data.

Create the required measures to calculate total sales, average sales, total transactions, unique customers, average order value, sales target status, and category-wise sales. Also, understand the difference between aggregating existing columns using SUM() and calculating values row by row using SUMX().

The objective is to gain practical experience with DAX functions and understand how they help in analysing business performance.

Task Steps

Step 1: Calculate Total Sales Using SUM()

- Calculate the total sales by adding all values from the Sales Amount column.
- Understand how SUM() works with an existing numeric column.
Step 2: Calculate Average Sales Using AVERAGE()

- Find the average sales amount for all transactions.
- Understand how AVERAGE() calculates the mean of a column.
Step 3: Count Transactions Using COUNTROWS()

- Calculate the total number of transactions in the sales table.
- Understand how COUNTROWS() counts the records in a table.
Step 4: Calculate Unique Customers Using DISTINCTCOUNT()

- Count the number of unique customers using Customer ID.
- Understand how DISTINCTCOUNT() avoids counting repeated customer IDs multiple times.
Step 5: Calculate Average Order Value Using DIVIDE()

- Calculate the average order value by dividing total sales by total orders.
- Understand how DIVIDE() handles division safely and allows a default result when the denominator is zero.
Step 6: Check Sales Target Using IF()

- Set a sales target of ₹10,00,000.
- Compare actual sales with the target.
- Display "Target Achieved" or "Target Not Achieved" based on the result.
Step 7: Calculate Category-wise Sales Using CALCULATE()

- Calculate total sales for the Electronics category.
- Apply a category filter using CALCULATE().
- Understand how CALCULATE() evaluates a measure under a specified filter condition.
Step 8: Calculate Revenue Using SUMX()

- Calculate revenue by multiplying Quantity by Unit Price for each transaction.
- Add the calculated values to get total revenue.
- Understand how SUMX() evaluates an expression row by row.
Step 9: Classify Sales Using SWITCH()

- Classify sales performance into HIGH, MEDIUM, and LOW categories.
- Define suitable sales thresholds.
- Use SWITCH(TRUE()) to evaluate multiple conditions and return the matching category.
Step 10: Verify and Compare Results

- Compare the results of SUM() and SUMX().
- Verify the total sales, average sales, transaction count, and customer count.
- Check whether the measures respond correctly to City and Date slicers.
- Capture screenshots of the created measures and their results.
Expected Deliverables

- DAX measures using all nine functions.
- Sales and revenue calculations.
- Customer and transaction analysis.
- Sales target status calculation.
- Category-wise sales calculation.
- Sales performance classification.
- Screenshots of the formulas and their outputs.
Expected Outcome

Gain practical knowledge of commonly used DAX functions and understand how to apply them to real business datasets. Be able to create measures, apply filters, perform calculations, classify business performance, and analyse sales data dynamically using Power BI.

## Attachments

_No attachments._
