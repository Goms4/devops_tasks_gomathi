# ZOOK-27: Day8-Task4:Nginx Web Server Deployment Using Ansible Playbook

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-27
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Sujitha M
- **Created:** 2026-10-22T08:46:47.350Z
- **Updated:** 2026-10-24T07:46:35.116Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Step 1: Create EC2 Instances

Create one Ansible master instance and three managed Linux instances. Configure the key pair, security group, and network settings to allow SSH connectivity between the master and managed nodes.

Step 2: Install Python and Ansible During Instance Creation

In the EC2 launch page, navigate to Advanced details → User data.

For the master instance, enter:


```
#!/bin/bash
yum install python3-pip -y
pip3 install ansible
```

For each managed instance, enter:


```
#!/bin/bash
yum install python3-pip -y
```

Launch the instances and wait for the user-data scripts to execute.

Step 3: Configure PuTTY and Pageant

Load the SSH private key into Pageant, configure PuTTY authentication, and connect to the master instance. Enable agent forwarding if required by your SSH setup.

Step 4: Create the Ansible Inventory File

Create slaves.txt on the master node and add the private IP addresses of the three managed nodes.


```
vi slaves.txt
```

Add:


```
[slaves]
10.0.1.11
10.0.1.12
10.0.1.13
```

Replace the example addresses with the actual private IP addresses, then save the file.

Step 5: Verify Ansible Connectivity

Use the Ansible ping module to confirm that the master can communicate with all managed nodes.


```
ansible all -i slaves.txt -m ping -u ec2-user
```

Confirm that all three nodes return successful responses.

Step 6: Create the HTML Webpage

Create an index.html file on the master node containing the webpage content to deploy.


```
vi index.html
```

Add:


```
<h1>Welcome to Nginx Deployment</h1>
<p>Deployed using Ansible Playbook.</p>
```

Save and exit the editor.

Step 7: Create the Ansible Playbook

Create a YAML playbook named first.yml to install Nginx, start the service, and copy the HTML file to the web server directory on all managed nodes.


```
vi first.yml
```

Add the following playbook for Amazon Linux 2023:


```
---
- name: Deploy webpage using Nginx
  hosts: all
  remote_user: ec2-user
  become: yes

  tasks:
    - name: Install Nginx
      ansible.builtin.dnf:
        name: nginx
        state: present

    - name: Start and enable Nginx
      ansible.builtin.service:
        name: nginx
        state: started
        enabled: yes

    - name: Copy webpage to Nginx web root
      ansible.builtin.copy:
        src: ./index.html
        dest: /usr/share/nginx/html/index.html
        mode: '0644'
```

Save and exit the file.

Step 8: Validate the Playbook Syntax

Check the YAML syntax before running the deployment.


```
ansible-playbook -i slaves.txt first.yml --syntax-check
```

Confirm that Ansible reports a successful syntax check.

Step 9: Execute the Playbook

Run the playbook to install Nginx, start and enable the service, and deploy the webpage on all managed nodes.


```
ansible-playbook -i slaves.txt first.yml
```

Check the output for successful task results on all three managed nodes.

Step 10: Verify Nginx Service Status

Confirm that Nginx is active on all managed nodes.


```
ansible all -i slaves.txt -m command -a "systemctl is-active nginx" -u ec2-user
```

Expected output:


```
active
```

Step 11: Verify the Deployed HTML File

Check that the HTML file exists in the Nginx web root on all managed nodes.


```
ansible all -i slaves.txt -m command -a "cat /usr/share/nginx/html/index.html" -u ec2-user
```

Confirm that the expected webpage content is displayed.

Step 12: Access the Webpage Through a Browser

Configure the EC2 security group to allow inbound HTTP traffic on port 80 from an appropriate source. Open the public IP address of a managed node in a browser:


```
http://<managed-node-public-ip>
```

Verify that the Nginx webpage displays the expected content.

Expected Outcome

Successfully automate Nginx installation, service startup, and HTML webpage deployment across three managed EC2 instances using an Ansible YAML playbook, and verify the deployment through service checks and browser access.

Note: These commands assume Amazon Linux 2023. If your instances use Ubuntu or SUSE, the installation module and web-root path may differ. The master must have SSH access to the managed nodes, and the managed nodes must be able to download Nginx packages.

## Attachments

- [Screenshot 2026-10-24 at 1.10.41 PM.png](attachments/Screenshot%202026-10-24%20at%201.10.41%20PM.png)
- [Screenshot 2026-10-24 at 1.11.04 PM.png](attachments/Screenshot%202026-10-24%20at%201.11.04%20PM.png)
- [Screenshot 2026-10-24 at 1.11.27 PM.png](attachments/Screenshot%202026-10-24%20at%201.11.27%20PM.png)
- [Screenshot 2026-10-24 at 1.13.22 PM.png](attachments/Screenshot%202026-10-24%20at%201.13.22%20PM.png)
- [Screenshot 2026-10-24 at 1.13.25 PM.png](attachments/Screenshot%202026-10-24%20at%201.13.25%20PM.png)
- [Screenshot 2026-10-24 at 1.13.30 PM.png](attachments/Screenshot%202026-10-24%20at%201.13.30%20PM.png)
- [Screenshot 2026-10-24 at 1.15.21 PM.png](attachments/Screenshot%202026-10-24%20at%201.15.21%20PM.png)
- [Screenshot 2026-10-24 at 1.15.31 PM.png](attachments/Screenshot%202026-10-24%20at%201.15.31%20PM.png)
- [Screenshot 2026-10-24 at 1.15.40 PM.png](attachments/Screenshot%202026-10-24%20at%201.15.40%20PM.png)
- [Screenshot 2026-10-24 at 1.15.48 PM.png](attachments/Screenshot%202026-10-24%20at%201.15.48%20PM.png)
- [Screenshot 2026-10-24 at 1.15.53 PM.png](attachments/Screenshot%202026-10-24%20at%201.15.53%20PM.png)
