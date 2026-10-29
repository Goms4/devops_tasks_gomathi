# JIN-63: Day 13 - Task 2 - E-commerce Data Analysis Using Pandas DataFrames

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-63
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Srivatsan Baranidaran
- **Created:** 2026-10-29T09:54:17.864Z
- **Updated:** 2026-10-29T18:04:42.878Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Use the existing E-commerce dataset to practice and implement essential Pandas DataFrame operations, data cleaning techniques, date handling, grouping, aggregation, sorting, and data visualisation.

The objective is to understand how to inspect raw data, identify and handle data quality issues, derive new columns, summarise business performance, and visualise meaningful insights using Python, Pandas, NumPy, and Matplotlib.

Complete all the operations in a Jupyter Notebook (.ipynb) with separate code cells, meaningful variable names, and clear outputs.

Implementation Steps

1. Load and Understand the Dataset

1. Load the existing E-commerce dataset into a Pandas DataFrame. If the dataset is already loaded, reuse the existing DataFrame.
2. Display the first 5 records using head().
3. Display the last 5 records using tail().
4. Check the number of rows and columns using shape.
5. Display all column names using columns.
6. Inspect column data types and non-null counts using info().
7. Generate descriptive statistics using describe().
8. Check the number of unique order IDs using nunique().
2. Data Quality Checks and Cleaning

1. Identify missing values in each column using isna().sum().
2. Check the total number of missing values using isna().sum().sum().
3. Identify duplicate records using duplicated().
4. Count duplicate records using duplicated().sum().
5. Display the duplicate rows and remove duplicates if necessary.
6. Convert columns to appropriate data types where required.
7. Validate numeric columns such as Units, UnitPrice, and DiscountPct.
8. Check for invalid values, such as negative quantities, negative prices, or discount percentages outside the valid range.
9. Handle missing, duplicate, or invalid records appropriately and document the changes.
Do not remove or modify records without first checking whether the change is justified.

3. Date Handling and Feature Engineering

1. Convert the Date column into a datetime format using pd.to_datetime().
2. Use errors="coerce" to identify invalid date values.
3. Check for invalid dates using df["Date"].isna().sum().
4. Extract the year, month, and day from the date column.
5. Create a Month column in YYYY-MM format using the date column.
6. Sort the dataset chronologically using sort_values().
7. Use the Month column for monthly sales analysis.
4. Create Derived Columns

1. Calculate revenue for each order using the following formula:  Revenue = Units × UnitPrice × (1 - DiscountPct)
2. Create a new Revenue column in the DataFrame.
3. Verify the calculation using a few sample records.
4. Check the data types and missing values in the newly created column.
5. Ensure that the discount percentage is represented as a decimal, such as 0.10 for a 10% discount.
5. Sorting and Filtering Operations

1. Sort the DataFrame by Revenue in descending order using sort_values().
2. Display the top 5 highest-revenue orders using head(5).
3. Select only the required columns using column selection.
4. Filter orders based on conditions, such as:  - Orders with revenue greater than ₹500. - Orders with discounts greater than 10%. - Orders with units sold greater than 2. - Orders belonging to a specific region or product.
5. Combine multiple conditions using & and |.
6. Use loc and iloc to select rows and columns.
7. Reset the DataFrame index where necessary using reset_index().
6. Grouping and Aggregation: Regional Analysis

Group the DataFrame by Region using groupby() and calculate the following metrics using agg():

1. TotalRevenue: Sum of revenue.
2. Orders: Count of order IDs.
3. AverageRevenuePerOrder: Mean revenue.
Sort the regional summary by TotalRevenue in descending order.

Store the result in a variable named region_summary and display it.

7. Grouping and Aggregation: Product Analysis

Group the DataFrame by Product and calculate:

1. TotalRevenue: Sum of revenue.
2. UnitsSold: Sum of units sold.
3. Orders: Count of order IDs.
Sort the results by TotalRevenue in descending order.

Store the result in product_summary and identify the highest-revenue product.

8. Grouping and Aggregation: Monthly Analysis

Group the DataFrame by Month and calculate:

1. TotalRevenue: Sum of revenue for each month.
2. Orders: Count of order IDs for each month.
Sort the results chronologically using sort_index().

Store the result in monthly_summary and identify the month with the highest revenue.

9. Identify the Highest-Revenue Orders

1. Sort the DataFrame by Revenue in descending order.
2. Select the columns OrderID, Date, Region, Product, Units, UnitPrice, DiscountPct, and Revenue.
3. Display the top 5 highest-revenue orders using head(5).
4. Store the result in highest_revenue_orders.
10. Data Visualisation Using Matplotlib and Pandas

Import matplotlib.pyplot as plt and create the following charts.

Chart 1: Total Revenue by Region

- Use a bar chart.
- Plot region_summary["TotalRevenue"].
- Set the title to Total Revenue by Region.
- Label the axes as Region and Revenue (₹).
Chart 2: Monthly Revenue Trend

- Use a line chart with circular markers.
- Plot monthly_summary["TotalRevenue"].
- Set the title to Monthly Revenue Trend.
- Label the axes as Month and Revenue (₹).
- Rotate the month labels by 45 degrees for readability.
Chart 3: Total Revenue by Product

- Use a bar chart.
- Plot product_summary["TotalRevenue"].
- Set the title to Total Revenue by Product.
- Label the axes as Product and Revenue (₹).
For each chart, use plt.tight_layout() and plt.show() to display the output properly.

11. Additional DataFrame Operations

Practise the following operations using the same dataset:

1. value_counts() to count records by region, product, or sales channel.
2. unique() to retrieve distinct values.
3. mean(), sum(), min(), and max() to calculate basic statistics.
4. median() and quantile() to understand the distribution of numeric columns.
5. sort_values() to rank records.
6. groupby() with multiple grouping columns, such as Region and Product.
7. agg() to calculate multiple metrics in one operation.
8. reset_index() and sort_index() to manage grouped results.
9. rename() to change column names where required.
10. drop() to remove unnecessary columns from a separate copy of the DataFrame.
11. apply() to practise applying a function to a Series.
12. corr() to examine correlations between numeric columns, where meaningful.
12. Document Findings

At the end of the notebook, provide a short summary of the analysis covering:

1. Which region generated the highest revenue?
2. Which product generated the highest revenue?
3. Which month recorded the highest revenue?
4. What were the top 5 highest-revenue orders?
5. Which products or regions showed relatively lower revenue?
6. Were any missing values, duplicates, invalid dates, or suspicious numeric values identified?
7. What business insights can be derived from the analysis?
Expected Deliverables

- A completed Jupyter Notebook (.ipynb) containing all code, outputs, and analysis.
- A cleaned DataFrame, with justified cleaning decisions documented.
- Derived columns including Revenue and Month.
- Three summary DataFrames: region_summary, product_summary, and monthly_summary.
- A highest_revenue_orders DataFrame showing the top 5 orders.
- Three visualisations: regional revenue, monthly revenue trend, and product revenue.
- A brief business findings section at the end of the notebook.
Acceptance Criteria

- All required DataFrame inspection operations are demonstrated.
- Missing values and duplicate records are identified and handled appropriately.
- Date conversion and monthly feature extraction are completed.
- Revenue is calculated correctly using the discount-adjusted formula.
- Sorting, filtering, indexing, and selection operations are demonstrated.
- Regional, product, and monthly summaries are generated using groupby() and agg().
- The top 5 highest-revenue orders are displayed correctly.
- All three charts have appropriate titles, axis labels, and readable formatting.
- All notebook cells execute successfully from beginning to end.
- Final findings are based on the actual dataset outputs.
Technical Requirements

- Language: Python
- Libraries: Pandas, NumPy, Matplotlib
- Environment: Jupyter Notebook
- Dataset: Existing E-commerce dataset
- Submission: Completed and executed .ipynb notebook
Note: If the dataset contains one row per order, counting OrderID is sufficient for order counts. If an order can contain multiple rows, use nunique() for distinct order counts to avoid overcounting.

## Attachments

- [Day13.ipynb](attachments/Day13.ipynb)
- [ecommerce_unclean.csv](attachments/ecommerce_unclean.csv)
