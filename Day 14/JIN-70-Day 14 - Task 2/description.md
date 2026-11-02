# JIN-70: Day 14 - Task 2

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-70
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-11-01T15:48:55.479Z
- **Updated:** 2026-11-02T09:22:34.498Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

TASK: Snowflake Account Setup, Database Creation, CSV Staging and Data Loading Using SQL

Description

Create and configure a Snowflake account using the Snowflake trial/free edition and perform basic data warehouse operations using Snowflake SQL.

The objective is to understand the fundamental Snowflake architecture and its data-loading workflow, starting from account creation and proceeding through database creation, schema configuration, table creation, file format definition, internal stage creation, CSV file uploading, and loading data into the target table.

Use a sample e-commerce retail CSV file (sales.csv) containing order information such as Order ID, Product, Quantity, Unit Price, and City.

Complete the activities in the following sequence:

Snowflake Account → Warehouse → Database → Schema → Table → File Format → Stage → CSV Upload → COPY INTO → Data Validation


---

TASK 1: CREATE A SNOWFLAKE ACCOUNT

1. Visit https://signup.snowflake.com/
2. Register for a Snowflake trial account using your official or personal email address.
3. Complete the registration and email verification process.
4. Log in to the Snowflake Web Interface.
5. Explore the Snowflake interface and identify:  - Worksheets / Workspaces - Databases - Warehouses - Schemas - Tables - Stages
6. Open a new SQL worksheet.
7. Verify the currently logged-in user and active role.
Queries to execute:


```
SELECT CURRENT_USER();

SELECT CURRENT_ROLE();

SELECT CURRENT_DATABASE();

SELECT CURRENT_SCHEMA();

SELECT CURRENT_WAREHOUSE();
```

Expected Outcome: Successfully access the Snowflake environment and identify the current user, role, database, schema, and warehouse.


---

TASK 2: CREATE AND CONFIGURE A VIRTUAL WAREHOUSE

A virtual warehouse provides the compute resources required to execute SQL queries and load data.

1. Create a warehouse named RETAIL_WH.
2. Configure its size as X-SMALL.
3. Enable automatic resume and automatic suspension.
4. Activate the warehouse.
Queries to execute:


```
CREATE WAREHOUSE IF NOT EXISTS RETAIL_WH
WAREHOUSE_SIZE = 'XSMALL'
AUTO_SUSPEND = 60
AUTO_RESUME = TRUE
INITIALLY_SUSPENDED = TRUE;
```

Verify the warehouse:


```
SHOW WAREHOUSES LIKE 'RETAIL_WH';
```

Activate it:


```
USE WAREHOUSE RETAIL_WH;
```

Verify the active warehouse:


```
SELECT CURRENT_WAREHOUSE();
```

Expected Outcome: The RETAIL_WH warehouse should be created and selected successfully.


---

TASK 3: CREATE A DATABASE

Create a database named RETAIL_DB to store the retail sales data.

Queries to execute:


```
CREATE DATABASE IF NOT EXISTS RETAIL_DB;
```

Verify database creation:


```
SHOW DATABASES LIKE 'RETAIL_DB';
```

Identify the active schema:


```
SELECT CURRENT_SCHEMA() AS ACTIVE_SCHEMA;
```

Expected Outcome: The RETAIL_DB database should appear in the Snowflake database list.


---

TASK 4: CREATE A SCHEMA

Create a schema named RAW inside the RETAIL_DB database.

The RAW schema will store the original retail sales data loaded from the CSV file.

Queries to execute:


```
CREATE SCHEMA IF NOT EXISTS RAW;
```

Select the schema:


```
USE SCHEMA RETAIL_DB.RAW;
```

Verify schema creation:


```
SHOW SCHEMAS IN DATABASE RETAIL_DB;
```

Expected Outcome: The RAW schema should appear under the RETAIL_DB database.


---

TASK 5: CREATE A SALES TABLE

Create a table named SALES inside the RETAIL_DB.RAW schema.

The table should contain the following five columns:


Column Name | Data Type | Description
ORDER_ID | NUMBER(10,0) | Unique order identifier
PRODUCT | VARCHAR(100) | Name of the purchased product
QUANTITY | NUMBER(10,0) | Number of units purchased
UNIT_PRICE | NUMBER(12,2) | Price per unit
CITY | VARCHAR(100) | Customer's city

Query to execute:


```
CREATE TABLE IF NOT EXISTS SALES (
    ORDER_ID NUMBER(10,0),
    PRODUCT VARCHAR(100),
    QUANTITY NUMBER(10,0),
    UNIT_PRICE NUMBER(12,2),
    CITY VARCHAR(100)
);
```

Verify table creation:


```
SHOW TABLES LIKE 'SALES' IN SCHEMA RETAIL_DB.RAW;
```

Describe the table structure:


```
DESCRIBE TABLE RETAIL_DB.RAW.SALES;
```

Expected Outcome: The SALES table should be created with all five specified columns and their corresponding data types.


---

TASK 6: CREATE A CSV FILE FORMAT

Create a reusable file format named RETAIL_CSV_FORMAT to define how Snowflake should interpret the uploaded CSV file.

Configure the file format with the following properties:

- File type: CSV
- Skip the first row because it contains column headers.
- Handle optionally enclosed text fields using double quotes.
- Interpret empty fields as NULL values.
Query to execute:


```
CREATE FILE FORMAT IF NOT EXISTS RETAIL_CSV_FORMAT
    TYPE = CSV
    SKIP_HEADER = 1
    FIELD_OPTIONALLY_ENCLOSED_BY = '"'
    EMPTY_FIELD_AS_NULL = TRUE;
```

Verify the file format:


```
SHOW FILE FORMATS IN SCHEMA RETAIL_DB.RAW;
```

Expected Outcome: The RETAIL_CSV_FORMAT file format should be successfully created and visible under the RAW schema.


---

TASK 7: CREATE AN INTERNAL STAGE

Create an internal named stage called RETAIL_STAGE.

An internal stage is a Snowflake storage location used to temporarily hold files before loading them into database tables.

Query to execute:


```
CREATE STAGE IF NOT EXISTS RETAIL_STAGE
FILE_FORMAT = RETAIL_CSV_FORMAT;
```

Verify stage creation:


```
SHOW STAGES IN SCHEMA RETAIL_DB.RAW;
```

Expected Outcome: The RETAIL_STAGE should be successfully created and associated with the CSV file format.


---

TASK 8: UPLOAD THE CSV FILE TO THE INTERNAL STAGE

Prepare a CSV file named sales.csv.

The file should contain the following columns:


```
ORDER_ID,PRODUCT,QUANTITY,UNIT_PRICE,CITY
1001,Laptop,2,55000,Chennai
1002,Mouse,5,750,Hyderabad
1003,Keyboard,3,1200,Bangalore
1004,Monitor,2,12000,Mumbai
1005,Headphones,4,2500,Delhi
1006,Tablet,1,22000,Chennai
1007,Printer,2,8500,Pune
1008,Smartphone,3,18000,Hyderabad
1009,Webcam,2,3200,Bangalore
1010,Speaker,4,1800,Mumbai
```

Upload Procedure:

1. Navigate to the Snowflake workspace.
2. Open the Databases section.
3. Expand RETAIL_DB.
4. Navigate to the RAW schema.
5. Open the Stages section.
6. Select RETAIL_STAGE.
7. Use the Upload Files option.
8. Select the prepared sales.csv file from the local system.
9. Upload the file to the internal stage.
10. Verify that the file appears in the stage.
Query to execute:


```
LIST @RETAIL_DB.RAW.RETAIL_STAGE;
```

Expected Outcome: The uploaded sales.csv file should appear in the stage listing with its filename, size, and modification information.


---

TASK 9: LOAD CSV DATA INTO THE SALES TABLE

Use Snowflake's COPY INTO command to load the staged CSV file into the SALES table.

Query to execute:


```
COPY INTO RETAIL_DB.RAW.SALES
FROM @RETAIL_DB.RAW.RETAIL_STAGE
FILE_FORMAT = (
    FORMAT_NAME = 'RETAIL_DB.RAW.RETAIL_CSV_FORMAT'
)
ON_ERROR = 'ABORT_STATEMENT';
```

Review the COPY INTO execution results.

Check the output for:

- File name
- Number of rows parsed
- Number of rows loaded
- Load status
- Any errors encountered
Expected Outcome: Snowflake should successfully read the staged CSV file and insert its records into the SALES table.


---

TASK 10: VALIDATE THE LOADED DATA

After loading the CSV file, execute the following validation queries.

1. Count the total records:

```
SELECT COUNT(*) AS TOTAL_RECORDS
FROM RETAIL_DB.RAW.SALES;
```

Expected result: 10 records for the provided sample CSV.

1. Display all loaded records:

```
SELECT *
FROM RETAIL_DB.RAW.SALES
ORDER BY ORDER_ID;
```

1. Identify duplicate order IDs:

```
SELECT
    ORDER_ID,
    COUNT(*) AS RECORD_COUNT
FROM RETAIL_DB.RAW.SALES
GROUP BY ORDER_ID
HAVING COUNT(*) > 1;
```

Expected result: No duplicate order IDs for the provided sample CSV.

1. Verify the number of records by city:

```
SELECT
    CITY,
    COUNT(*) AS TOTAL_ORDERS
FROM RETAIL_DB.RAW.SALES
GROUP BY CITY
ORDER BY TOTAL_ORDERS DESC;
```

1. Calculate the total sales value:

```
SELECT
    SUM(QUANTITY * UNIT_PRICE) AS TOTAL_SALES
FROM RETAIL_DB.RAW.SALES;
```

1. Identify products with their total quantities sold:

```
SELECT
    PRODUCT,
    SUM(QUANTITY) AS TOTAL_QUANTITY
FROM RETAIL_DB.RAW.SALES
GROUP BY PRODUCT
ORDER BY TOTAL_QUANTITY DESC;
```

Expected Outcome: The loaded records should be visible, the total record count should be correct, and the validation queries should execute successfully.

## Attachments

- [sales.csv](attachments/sales.csv)
- [SNOWFLAKE PRACTICE.pdf](attachments/SNOWFLAKE%20PRACTICE.pdf)
- [sql_quries_in_snowflake.pdf](attachments/sql_quries_in_snowflake.pdf)
