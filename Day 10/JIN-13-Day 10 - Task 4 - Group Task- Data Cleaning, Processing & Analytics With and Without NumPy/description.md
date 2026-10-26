# JIN-13: Day 10 - Task 4 - Group Task: Data Cleaning, Processing & Analytics With and Without NumPy

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-13
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-26T10:23:37.207Z
- **Updated:** 2026-10-26T12:49:02.360Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

As part of our data foundations and analytics upskilling, this task group focuses on implementing data cleaning, preprocessing, transformation, and analytical operations using the business scenario selected in the previous task group, End-to-End Data Strategy, Collection & Analytics for a Business Scenario.

Using the data requirements, data sources, and business problem defined in the previous task, obtain or create a suitable dataset and perform the required data operations in Python.

Implement the same operations in two approaches:

1. Without NumPy: Use core Python features, including lists, dictionaries, loops, conditional statements, and built-in functions.
2. With NumPy: Use NumPy arrays, vectorized operations, statistical functions, and array-based data processing.
Compare both approaches to understand their implementation, readability, performance, limitations, and suitability for different data-processing scenarios.

The Data Processing & Analytics Challenges

Task 1: Load and Understand the Dataset

- Concept: Understand the structure, attributes, data types, and quality of the selected dataset.
- Practice: Load the dataset using Python's built-in file-handling capabilities and, where appropriate, NumPy.
- Challenge: Display the number of records, available fields, sample values, and basic information about the dataset using both approaches.
Task 2: Identify and Handle Missing Values

- Concept: Detect incomplete records and determine an appropriate strategy for handling missing data.
- Practice: Identify missing, empty, or invalid values and apply suitable strategies such as removal, replacement, or imputation.
- Challenge: Implement missing-value detection and handling without NumPy, then repeat using NumPy where suitable. Document the chosen strategy and its impact on the data.
Task 3: Detect and Remove Duplicate Records

- Concept: Identify repeated records that could distort analytical results.
- Practice: Use Python sets, dictionaries, or loops to identify duplicates, and compare this with NumPy-based techniques where applicable.
- Challenge: Remove duplicates according to a clearly defined rule and verify the final record count using both approaches.
Task 4: Perform Data Validation and Type Conversion

- Concept: Ensure that data values follow expected formats, types, and business rules.
- Practice: Validate numerical values, dates, categories, identifiers, and ranges.
- Challenge: Identify invalid records, convert suitable values into appropriate types, and document how invalid or inconsistent data is handled in both implementations.
Task 5: Perform Data Transformation and Normalization

- Concept: Convert raw values into a consistent format suitable for analysis.
- Practice: Standardize text, transform numerical values, calculate derived fields, and normalize numerical data where appropriate.
- Challenge: Implement the same transformations using core Python and NumPy, then verify that the resulting values are equivalent.
Task 6: Perform Descriptive Analytics

- Concept: Summarize historical data to understand what happened in the selected business scenario.
- Practice: Calculate count, sum, mean, median, minimum, maximum, range, and standard deviation for relevant numerical fields.
- Challenge: Calculate the required statistics without NumPy using Python's built-in functions and appropriate logic, then repeat using NumPy statistical functions. Compare the results.
Task 7: Perform Diagnostic Analysis

- Concept: Investigate potential reasons behind observed trends, differences, or unexpected outcomes.
- Practice: Compare relevant groups, identify outliers, examine relationships between variables, and investigate differences in performance.
- Challenge: Use the selected scenario's business questions to identify patterns and potential explanations. Implement suitable calculations using both approaches and distinguish observed relationships from proven causes.
Task 8: Perform Predictive Analysis

- Concept: Use historical observations to estimate future outcomes.
- Practice: Select an appropriate numerical variable and apply a basic forecasting method or simple statistical model.
- Challenge: Implement a simple prediction method, such as linear regression using basic Python calculations, and compare it with a NumPy-based implementation using array operations or numpy.polyfit. Document the assumptions and limitations.
Task 9: Perform Prescriptive Analysis

- Concept: Translate analytical findings into recommendations for business decisions.
- Practice: Define business rules or decision criteria based on the processed data and analytical results.
- Challenge: Develop actionable recommendations for the selected scenario, such as adjusting inventory, prioritizing products, investigating unusual transactions, or improving resource allocation. Implement the decision logic using both approaches and explain the reasoning behind the recommendations.
Task 10: Compare Both Implementations

- Concept: Evaluate the differences between manual Python processing and NumPy-based computation.
- Practice: Compare code complexity, readability, numerical accuracy, execution time, and memory considerations.
- Challenge: Run both implementations on the same dataset, verify that they produce equivalent results where applicable, and document the strengths and limitations of each approach.
Implementation Requirements

- Use the same business scenario and dataset selected in the previous task group.
- Keep the data-cleaning and analytical objectives consistent across both implementations.
- Organize the code into separate scripts or clearly separated sections for the two approaches.
- Use Python's built-in features for the implementation without NumPy.
- Use NumPy for numerical operations in the NumPy implementation.
- Avoid using NumPy indirectly in the non-NumPy implementation.
- Use the same input data and comparable processing logic to ensure a fair comparison.
- Record assumptions, data-quality issues, and any differences in results.
- Use Python's time module for basic execution-time comparisons, and interpret timing results carefully because small datasets may not show meaningful performance differences.
Expected Outcome

By completing this task group, you should be able to:

- Clean and validate a dataset using Python.
- Handle missing values, duplicates, invalid data, and inconsistent formats.
- Transform raw data into an analysis-ready format.
- Perform descriptive, diagnostic, predictive, and prescriptive analytics.
- Understand the difference between core Python processing and NumPy vectorization.
- Compare correctness, readability, and performance across implementations.
- Convert analytical findings into evidence-based business recommendations.

## Attachments

- [TV_TRP_Data_Analytics.ipynb](attachments/TV_TRP_Data_Analytics.ipynb)
