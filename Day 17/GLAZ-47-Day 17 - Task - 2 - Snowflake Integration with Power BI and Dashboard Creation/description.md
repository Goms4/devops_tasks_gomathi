# GLAZ-47: Day 17 | Task - 2 | Snowflake Integration with Power BI and Dashboard Creation

- **Jira:** https://mail4mithunu.atlassian.net/browse/GLAZ-47
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Krishnaa S
- **Created:** 2026-11-05T10:11:07.130Z
- **Updated:** 2026-11-06T19:27:25.440Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

Establish a connection between Snowflake and Power BI, create and populate a sample dataset, perform the required data transformations, and develop an interactive Power BI dashboard with multiple visualizations and regional filtering.

Objective:

To understand the end-to-end integration of Snowflake with Power BI, including warehouse and database creation, data ingestion, connectivity, data transformation, and dashboard development using different visualization types.

Step-by-Step Process

1. Snowflake Setup and Database Creation
1. Create a new SQL file in Snowflake.
2. Create a warehouse.
3. Create a database.
4. Create a schema.
5. Set the newly created warehouse and schema as the active context.
6. Create a table with the required columns.
7. Insert sample data into the table.
8. Execute SELECT queries to verify the table structure and inserted records.
1. Snowflake Connection Details
1. Navigate to Account Profile → Account Details.
2. Note down the Snowflake Server URL required for external connectivity.
3. Note down the warehouse name for establishing the Power BI connection.
1. Connect Snowflake to Power BI
1. Open Power BI Desktop.
2. Navigate to Get Data → View More.
3. Search for and select Snowflake.
4. Enter the Snowflake Server URL and Warehouse Name.
5. Authenticate using the appropriate credentials.
6. Select the required warehouse, database, schema, and table from the available datasets.
7. Select Transform Data to open Power Query Editor.
1. Data Transformation and Preparation
1. Import the selected dataset into Power BI.
2. Add a custom column that aggregates the values of two existing columns.
3. Perform the necessary data cleaning and transformations.
4. Verify column data types and ensure the dataset is ready for visualization.
5. Apply the required formatting and load the transformed data.
1. Dashboard Creation and Visualizations
Create a Power BI report containing the following visualizations:

A. KPI Cards – 4 Cards

1. Total Orders
2. Total Revenue
3. Total Customers
4. Average Order Value
B. Charts

1. Bar Chart – Display the sum of revenue.
2. Line Chart – Display the sum of revenue over time.  - Create a date hierarchy. - Use the month level to visualize monthly revenue changes.
3. Pie Chart / Donut Chart – Display the revenue distribution.
C. Additional Visualizations

1. Create at least five additional meaningful visualizations using the available dataset.
2. Ensure the visualizations provide different insights into the underlying data.
1. Slicer Implementation
1. Create a slicer using the Region column.
2. Verify that selecting different regions dynamically filters the dashboard visualizations.
1. Formatting and Final Validation
1. Enable titles for all visualizations.
2. Provide meaningful titles that clearly describe the information presented.
3. Adjust font sizes for better readability.
4. Resize and align visuals appropriately.
5. Maintain consistent formatting, fonts, colors, and styling throughout the report.
6. Verify that all cards, charts, and slicers function correctly.
7. Perform a final review of the dashboard to ensure the report is clear, consistent, and interactive.
Expected Outcome:

A fully functional Power BI dashboard connected to Snowflake, containing four KPI cards, multiple charts, additional analytical visualizations, and a working Region slicer, with consistent formatting and meaningful titles across the report.

## Attachments

- [NovaCare_Hospital_Analytics.xlsx](attachments/NovaCare_Hospital_Analytics.xlsx)
- [PowerBI_Healthcare_Analytics_Report_Day17.pdf](attachments/PowerBI_Healthcare_Analytics_Report_Day17.pdf)
- [Screenshot 2026-11-06 at 11.39.02 PM.png](attachments/Screenshot%202026-11-06%20at%2011.39.02%20PM.png)
- [Screenshot 2026-11-07 at 12.12.33 AM.png](attachments/Screenshot%202026-11-07%20at%2012.12.33%20AM.png)
- [Screenshot 2026-11-07 at 12.27.34 AM.png](attachments/Screenshot%202026-11-07%20at%2012.27.34%20AM.png)
