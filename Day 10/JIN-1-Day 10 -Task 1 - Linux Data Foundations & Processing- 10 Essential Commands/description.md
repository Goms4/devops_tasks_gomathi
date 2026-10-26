# JIN-1: Day 10 -Task 1 - Linux Data Foundations & Processing: 10 Essential Commands

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/JIN-1
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-10-26T09:52:54.703Z
- **Updated:** 2026-10-26T10:47:42.623Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

As part of our Linux and infrastructure upskilling, this ticket covers 10 essential command-line tools used for data foundations, file processing, text manipulation, structured data handling, and data validation.

Create a practice script or run these commands interactively in your Ubuntu environment to understand how Linux handles raw data, processes text files, filters records, transforms content, and verifies data integrity.

The 10 Data Foundations & Processing Challenges

1. cat – The Data Inspection Tool

- Concept: Displays file contents and helps inspect raw datasets, configuration files, and logs.
- Practice: cat data.txt
- Challenge: Create a text file containing sample records and display its contents.
2. head – The Dataset Previewer

- Concept: Displays the first few lines of a file, helping inspect CSV datasets without loading the entire file.
- Practice: head -n 5 employees.csv
- Challenge: Create a CSV file with at least 10 records and display its first five lines.
3. tail – The Latest Records Tracker

- Concept: Displays the last lines of a file, useful for checking recent data entries and application logs.
- Practice: tail -n 5 transactions.csv
- Challenge: Display the last five records of a sample transaction dataset.
4. wc – The Data Counting Engine

- Concept: Counts lines, words, and bytes to help measure dataset size and estimate record counts.
- Practice: wc -l employees.csv
- Challenge: Count the number of lines in a CSV file and distinguish the total lines from data records by accounting for the header.
5. sort – The Data Ordering Engine

- Concept: Sorts records alphabetically or numerically, supporting data organization and preprocessing.
- Practice: sort -t',' -k3,3 employees.csv
- Challenge: Sort a sample dataset by a chosen column. Ensure the CSV header is handled separately and numeric fields use appropriate numeric sorting.
6. uniq – The Duplicate Detection Tool

- Concept: Identifies repeated adjacent lines, helping detect duplicate values in datasets.
- Practice: sort emails.txt | uniq -c
- Challenge: Create a file with repeated email addresses and display each unique address with its occurrence count.
7. cut – The Column Extraction Tool

- Concept: Extracts specific fields from delimited text files, allowing quick inspection of selected dataset columns.
- Practice: cut -d',' -f1,3 employees.csv
- Challenge: Extract employee IDs and departments from a sample CSV file. This simple command assumes fields do not contain embedded commas or quoted CSV values.
8. grep – The Data Filtering Engine

- Concept: Searches text for matching patterns, useful for filtering records, finding errors, and locating specific values.
- Practice: grep -i "failed" application.log
- Challenge: Filter a dataset or log file for a specific keyword, such as a department name, transaction status, or error message.
9. awk – The Lightweight Data Processor

- Concept: Processes structured text by selecting fields, applying conditions, and calculating simple summaries.
- Practice: awk -F',' 'NR > 1 {print $1, $3}' employees.csv
- Challenge: Extract selected columns from a CSV file and calculate a simple total or count using awk.
10. sha256sum – The Data Integrity Verifier

- Concept: Generates SHA-256 checksums to verify whether files have changed or been corrupted during transfer or processing.
- Practice: sha256sum employees.csv
- Challenge: Generate a checksum for a sample dataset, modify the file, and generate the checksum again to observe how the hash changes.

## Attachments

- [Screenshot 2026-10-26 at 4.17.04 PM.png](attachments/Screenshot%202026-10-26%20at%204.17.04%20PM.png)
- [Screenshot 2026-10-26 at 4.17.12 PM.png](attachments/Screenshot%202026-10-26%20at%204.17.12%20PM.png)
