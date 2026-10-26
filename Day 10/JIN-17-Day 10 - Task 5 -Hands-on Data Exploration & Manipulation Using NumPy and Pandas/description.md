# JIN-17: Day 10 - Task 5 -Hands-on Data Exploration & Manipulation Using NumPy and Pandas

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-17
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-26T10:35:31.442Z
- **Updated:** 2026-10-26T12:34:14.907Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

As part of our data foundations and analytics upskilling, this task focuses on developing practical skills in numerical computing, data exploration, data manipulation, and filtering using Python libraries.

Choose any platform of your choice, such as Jupyter Notebook, JupyterLab, Google Colab, or VS Code. Use a dataset related to your selected business scenario or choose a suitable sample dataset.

Work with NumPy arrays, Pandas Series, and Pandas DataFrames to perform numerical operations, explore dataset structures, identify data-quality issues, create derived columns, and filter records based on multiple attributes and conditions.

The Data Exploration & Manipulation Challenges

1. Set Up the Environment and Import Libraries

- Concept: Understand the purpose of Python libraries used for data analysis.
- Practice: Import NumPy and Pandas using their standard aliases.
- Challenge: Create a notebook, import the required libraries, load or create a dataset, and verify that the environment is ready for analysis.
2. Create and Explore NumPy Arrays

- Concept: Understand how NumPy arrays store and process numerical data.
- Practice: Create one-dimensional and two-dimensional arrays using sample numerical values or dataset columns.
- Challenge: Perform array operations such as addition, subtraction, multiplication, division, total, average, minimum, maximum, and element-wise calculations.
3. Work with Pandas Series

- Concept: Understand a Series as a one-dimensional labeled data structure.
- Practice: Create Series from lists, NumPy arrays, or individual DataFrame columns.
- Challenge: Calculate the sum, mean, minimum, maximum, and other relevant statistics. Explore indexing, slicing, and filtering Series values using conditions.
4. Create and Explore Pandas DataFrames

- Concept: Understand DataFrames as two-dimensional tabular structures containing rows and columns.
- Practice: Create a DataFrame from a dictionary, lists, or an imported dataset.
- Challenge: Explore the dataset using the following operations:  - df.head() to view the first five rows. - df.tail() to view the last five rows. - df.shape to identify the number of rows and columns. - df.columns to display column names. - df.info() to inspect data types and non-null counts. - df.describe() to generate descriptive statistics.
5. Perform Numerical and Statistical Operations

- Concept: Summarize numerical data to understand overall performance and trends.
- Practice: Use NumPy and Pandas to calculate totals, averages, minimums, maximums, and counts.
- Challenge: Calculate daily totals and averages where the dataset contains dates and numerical measures, such as daily sales, transactions, quantities, or website visits. Compare results obtained using NumPy and Pandas.
6. Identify Missing Values and Duplicate Records

- Concept: Assess data quality before performing further analysis.
- Practice: Use df.isnull() and df.isnull().sum() to identify missing values, and df.duplicated() and df.duplicated().sum() to identify duplicate rows.
- Challenge: Report missing values and duplicates for the dataset. Apply suitable handling strategies and verify the changes.
7. Create New Columns from Existing Columns

- Concept: Derive useful business metrics by combining or transforming existing attributes.
- Practice: Create new columns using arithmetic operations, conditions, and existing column values.
- Challenge: Create at least two derived columns relevant to the selected dataset.  Examples:  - Revenue = Price × Quantity - Profit = Revenue − Cost - Discounted_Price = Price − Discount - Conversion_Rate = Conversions / Visitors × 100 Perform calculations, summary statistics, and comparisons on the newly created columns. Handle zero denominators and missing values appropriately.
8. Filter Data Using Different Columns and Attributes

- Concept: Extract relevant subsets of records using conditions and logical operators.
- Practice: Use Boolean indexing with comparison operators such as ==, !=, >, <, >=, and <=, along with &, |, and ~.
- Challenge: Apply at least five different filters, including:  - Filtering records using a categorical attribute. - Filtering numerical values above or below a threshold. - Combining multiple conditions using AND. - Combining alternative conditions using OR. - Filtering records using a date range or a condition on a derived column. Display the filtered results and calculate relevant statistics for each subset.
9. Perform Grouping and Aggregation

- Concept: Summarize data across categories or time periods to identify patterns.
- Practice: Use groupby() with aggregation functions such as sum(), mean(), min(), max(), and count().
- Challenge: Group records by a suitable attribute, such as product, category, region, or date. Calculate relevant metrics and identify the highest-performing and lowest-performing groups.
10. Document Findings and Validate Results

- Concept: Ensure analytical results are accurate and communicate findings clearly.
- Practice: Compare calculations, inspect filtered datasets, and validate the consistency of derived columns and grouped results.
- Challenge: Document at least five findings from the dataset and explain how they relate to the selected business scenario. Include relevant code outputs, tables, or charts.
Expected Outcome

By completing this task, you should be able to:

- Import and use NumPy and Pandas in a notebook environment.
- Create and manipulate arrays, Series, and DataFrames.
- Perform numerical calculations and descriptive statistics.
- Explore dataset structure and identify data-quality issues.
- Create derived columns using existing attributes.
- Filter datasets using multiple conditions and logical operators.
- Aggregate data by categories and dates.
- Validate results and communicate meaningful analytical findings.

## Attachments

- [Data_Exploration_Manipulation.ipynb](attachments/Data_Exploration_Manipulation.ipynb)
