# ZOOK-19: Day8 - Task1 : Linux Commands

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-19
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** Sujitha M
- **Created:** 2026-10-22T07:47:03.555Z
- **Updated:** 2026-10-22T15:56:33.619Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

10 Linux Command Challenges – Text Processing & File Manipulation

Description:

As part of our Linux command-line upskilling, this task covers 10 essential Linux utilities used for text processing, log analysis, file comparison, and data manipulation. These commands are useful in Linux administration, shell scripting, and DevOps workflows.

Create sample files or run these commands interactively in your Ubuntu or SUSE environment to understand how they process text, compare files, and manage data.

The 10 Linux Utility Challenges

1. sed – The Stream Editor

- Concept: Searches, replaces, and transforms text in files without manually opening a text editor.
- Practice:   ``` echo "Welcome to Linux" | sed 's/Linux/DevOps/' ```
- Expected output: Welcome to DevOps
2. awk – The Text Data Analyzer

- Concept: Processes structured text line by line and extracts specific fields from logs, reports, and delimited files.
- Practice:   ``` echo "Yash 25 IT" | awk '{print $1, $3}' ```
- Expected output: Yash IT
3. sort – The Line Ordering Utility

- Concept: Arranges lines alphabetically or numerically, helping organize lists, logs, and command outputs.
- Practice:   ``` printf "banana\napple\nmango\n" | sort ```
- Expected output:   ``` apple banana mango ```
4. uniq – The Duplicate Line Detector

- Concept: Identifies or removes consecutive duplicate lines, useful for analyzing repeated entries in logs and data files.
- Practice:   ``` printf "error\nerror\nsuccess\n" | uniq ```
- Expected output:   ``` error success ```
5. diff – The File Difference Analyzer

- Concept: Compares two text files line by line and displays the differences between their contents.
- Practice:   ``` echo "version=1.0" > old.conf echo "version=2.0" > new.conf diff old.conf new.conf ```
- Expected output:   ``` 1c1 < version=1.0 --- > version=2.0 ```
6. cmp – The Byte Comparison Tool

- Concept: Compares two files byte by byte and reports the first difference, useful for checking whether files are identical.
- Practice:   ``` echo -n "hello" > file1.txt echo -n "hello" > file2.txt cmp file1.txt file2.txt ```
- Expected output: No output and exit status 0, indicating the files are identical.
7. fold – The Text Line Wrapper

- Concept: Breaks long lines into shorter lines of a specified width, making large text outputs easier to read.
- Practice:   ``` echo "Linux commands are useful for DevOps engineers" | fold -w 10 ```
- Expected output:   ``` Linux comm ands are u seful for DevOps eng ineers ```
8. paste – The File Column Combiner

- Concept: Combines corresponding lines from multiple files side by side, useful for joining lists and simple datasets.
- Practice:   ``` printf "Alice\nBob\n" > names.txt printf "IT\nCSE\n" > departments.txt paste names.txt departments.txt ```
- Expected output:   ``` Alice   IT Bob     CSE ```
9. split – The File Segmentation Utility

- Concept: Divides large files into smaller files based on a specified number of lines or byte size, useful for processing large datasets.
- Practice:   ``` seq 1 10 > numbers.txt split -l 3 numbers.txt part_ ls part_* ```
- Expected output: Multiple files, each containing up to three lines, such as part_aa, part_ab, part_ac, and part_ad.
10. rev – The Line Reversal Utility

- Concept: Reverses the characters in each line of input, useful for text manipulation and command-line exercises.
- Practice:   ``` echo "Linux" | rev ```
- Expected output: xuniL
Task expectation: Execute all 10 commands in your assigned Linux environment, record their outputs, and understand their practical applications. Use sample files wherever required and ensure that each command runs successfully.

## Attachments

- [Screenshot 2026-10-22 at 2.58.01 PM.png](attachments/Screenshot%202026-10-22%20at%202.58.01%20PM.png)
