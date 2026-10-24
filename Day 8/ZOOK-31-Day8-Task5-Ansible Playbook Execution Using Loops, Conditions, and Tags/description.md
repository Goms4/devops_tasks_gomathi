# ZOOK-31: Day8-Task5:Ansible Playbook Execution Using Loops, Conditions, and Tags

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-31
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Sujitha M
- **Created:** 2026-10-22T08:50:40.217Z
- **Updated:** 2026-10-24T07:55:21.526Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

1. Create or update an Ansible playbook named task5.yml on the master node.   ``` vi task5.yml ```
2. Configure the playbook to target all managed nodes listed in slaves.txt, using the ec2-user remote user and privilege escalation.   ``` --- - name: Practice Ansible loops, conditions, and tags   hosts: all   remote_user: ec2-user   become: yes ```
3. Implement a loop to execute a task multiple times, such as creating multiple directories on the managed nodes.   ``` tasks:   - name: Create multiple directories     ansible.builtin.file:       path: "{{ item }}"       state: directory       mode: '0755'     loop:       - /tmp/dev       - /tmp/test       - /tmp/prod     tags:       - directories ```
4. Implement a when condition to execute a task only when a specified condition is satisfied.   ``` - name: Display Amazon Linux information     ansible.builtin.debug:       msg: "This node is running Amazon Linux."     when: ansible_facts['distribution'] == "Amazon"     tags:       - oscheck ```
5. Implement skip tags by using Ansible's --skip-tags option to skip selected tasks during playbook execution.   ``` ansible-playbook -i slaves.txt task5.yml --skip-tags directories ```
6. Validate the playbook syntax before execution.   ``` ansible-playbook -i slaves.txt task5.yml --syntax-check ```
7. Execute the complete playbook to test the loop and condition.   ``` ansible-playbook -i slaves.txt task5.yml ```
8. Execute only tasks marked with a specific tag.   ``` ansible-playbook -i slaves.txt task5.yml --tags oscheck ```
9. Verify that the directories were created on the managed nodes.   ``` ansible all -i slaves.txt -m command -a "ls -ld /tmp/dev /tmp/test /tmp/prod" ```
10. Verify the playbook output and confirm that loops execute multiple iterations, conditional tasks run only when their conditions match, and skipped tags prevent the corresponding tasks from running.
Expected Outcome: Understand and implement Ansible loops, conditional execution using when, and selective task execution using tags and --skip-tags in a YAML playbook.

Note: Save all task definitions under the same tasks: section in task5.yml. The when example checks Amazon Linux specifically; on other Linux distributions, that task will be skipped.

## Attachments

- [Screenshot 2026-10-24 at 1.24.46 PM.png](attachments/Screenshot%202026-10-24%20at%201.24.46%20PM.png)
- [Screenshot 2026-10-24 at 1.24.51 PM.png](attachments/Screenshot%202026-10-24%20at%201.24.51%20PM.png)
