# JIN-26: Day 11 - Task 2 - E-commerce Dataset: Data Loading, Inspection, Cleaning & Transformation

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-26
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Praneesh Parshi
- **Created:** 2026-10-27T09:45:01.349Z
- **Updated:** 2026-10-27T11:44:43.702Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Take an e-commerce dataset and perform an end-to-end data preparation workflow using Python and Pandas. The objective is to understand the dataset, identify data-quality issues, clean the data, perform necessary transformations, create derived features, identify outliers, and export the final cleaned dataset.

Activities:

- Load the e-commerce dataset into a Pandas DataFrame.
- Inspect the dataset using:  - .head() - .shape - .columns - .info() - .isnull().sum() - .describe() - .duplicated().sum()
- Identify missing values, duplicate records, incorrect data types, inconsistent strings, and other data-quality issues.
- Convert columns to appropriate data types:  - String/object columns - Numeric columns using pd.to_numeric() - Date columns using pd.to_datetime()
- Compare .info() before and after type conversion and verify whether conversion introduced NaN/NaT values.
- Understand the meaning of the datetime64[us] (<M8[us]) NumPy/Pandas datetime dtype and its microsecond-level precision.
- Print only the duplicated rows and remove duplicates using .drop_duplicates().
- Standardize string columns using operations such as:  - .str.strip() - .str.title()
- Identify and handle invalid/non-numeric values using pd.to_numeric().
- Identify potential numerical outliers using statistical methods such as IQR.
- Visualize outliers using a Pandas/Matplotlib box plot (kind='box').
- Create at least one derived column from existing columns.
- Create a new feature using .apply().
- Perform final validation of the cleaned dataset.
- Export the final cleaned dataset using .to_csv().

## Attachments

- [Ecommerce_Data_Preparation.ipynb](attachments/Ecommerce_Data_Preparation.ipynb)
