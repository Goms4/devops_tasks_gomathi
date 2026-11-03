# GLAZ-6: Day 15 | Task 3 | Design and Deploy a Public-Private Network Architecture Using AWS VPC

- **Jira:** https://mail4mithunu.atlassian.net/browse/GLAZ-6
- **Status:** In Review
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** —
- **Reporter:** Boyalla Gomathi
- **Created:** 2026-11-02T09:55:26.226Z
- **Updated:** 2026-11-02T18:08:19.897Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Create and configure an AWS Virtual Private Cloud (VPC) with separate public and private subnets. Deploy two EC2 instances:

- Public EC2 Instance: Hosts a simple Home Page and is accessible over the internet.
- Private EC2 Instance: Hosts a simple Login Page and is accessible only through the public security group.
The objective is to understand VPC networking, subnet isolation, Internet Gateway, NAT Gateway, route tables, security groups, and EC2 deployment.

1. Create a VPC

1. Navigate to the AWS Management Console.
2. Open the VPC Dashboard.
3. Select Create VPC.
4. Configure the following:  - Resources to create: VPC only. - IPv4 CIDR block: select a ip for example 10.0.0.0/16 - Tenancy: Default.
5. Create the VPC.
Important:

- Do not modify or delete any existing default VPC configurations, default subnets, route tables, or security groups.
- All resources created for this task must belong to the newly created VPC.
- The VPC CIDR block 10.0.0.0/16 provides a private IP address range for the network.
2. Create Public and Private Subnets

Divide the VPC into two separate subnets.

Navigate to VPC → Subnets → Create Subnet.

Create the following:

Public Subnet

- Name: Public-Subnet (or any preferred name).
- VPC: Newly created VPC.
- IPv4 CIDR block: 10.0.10.0/24.
- Availability Zone: Choose an available AZ.
Private Subnet

- Name: Private-Subnet (or any preferred name).
- VPC: Newly created VPC.
- IPv4 CIDR block: 10.0.20.0/24.
- Availability Zone: Choose an available AZ. Preferably use a different AZ from the public subnet for this exercise.
Note: Both subnets must belong to the same VPC, and their CIDR blocks must not overlap.

3. Create and Attach an Internet Gateway (IGW)

1. Navigate to VPC → Internet Gateways.
2. Select Create Internet Gateway.
3. Provide a suitable name.
4. Create the Internet Gateway.
5. Select the newly created Internet Gateway.
6. Choose Actions → Attach to a VPC.
7. Select the VPC created in Step 1.
The Internet Gateway allows resources in the VPC to communicate with the internet when their routing and security configurations permit it.

4. Create and Configure Route Tables

Create two separate route tables to control traffic for the public and private subnets.

Navigate to VPC → Route Tables → Create Route Table.

4.1 Public Route Table

1. Create a route table and associate it with the newly created VPC.
2. Add the following route:

Destination | Target
10.0.0.0/16 | local (existing route)
0.0.0.0/0 | Internet Gateway

1. Navigate to Subnet Associations → Edit Subnet Associations.
2. Select the Public Subnet.
3. Save the association.
This makes the public subnet internet-routable through the Internet Gateway.

4.2 Create a NAT Gateway

The private subnet requires outbound internet access without allowing unsolicited inbound internet connections.

1. Navigate to VPC → NAT Gateways.
2. Select Create NAT Gateway.
3. Configure:  - Subnet: Public Subnet. - Connectivity type: Public (Zonal). - Elastic IP allocation: Allocate a new Elastic IP.
4. Create the NAT Gateway.
5. Wait until its status changes to Available.
4.3 Private Route Table

1. Create another route table associated with the newly created VPC.
2. Add the following route:

Destination | Target
10.0.0.0/16 | local (existing route)
0.0.0.0/0 | NAT Gateway

1. Navigate to Subnet Associations → Edit Subnet Associations.
2. Select the Private Subnet.
3. Save the association.
The private subnet can now initiate outbound internet connections through the NAT Gateway without exposing its instances directly to the internet.

5. Create Security Groups

Create two security groups under EC2 → Security Groups. Ensure both belong to the newly created VPC.

5.1 Public Security Group

This security group will be attached to the public EC2 instance.

Configure inbound rules:


Type | Protocol | Port | Source
SSH | TCP | 22 | My IP
HTTP | TCP | 80 | 0.0.0.0/0
HTTPS | TCP | 443 | 0.0.0.0/0

- SSH access should be restricted to your own public IP.
- HTTP and HTTPS should be accessible from the internet.
5.2 Private Security Group

This security group will be attached to the private EC2 instance.

Configure inbound rules:


Type | Protocol | Port | Source
HTTP | TCP | 80 | Public Security Group

If SSH access is required for administration, allow SSH only from the Public Security Group rather than opening it to the internet.

Important: Use the security group ID of the Public Security Group as the source. Do not use 0.0.0.0/0 for private instance access.

This ensures that only resources associated with the permitted public security group can initiate connections to the private instance on the allowed ports.

6. Launch Two EC2 Instances

Launch two EC2 instances using a suitable Linux AMI (Ubuntu or Amazon Linux).

6.1 Public EC2 Instance – Home Page

1. Navigate to EC2 → Instances → Launch Instance.
2. Provide an appropriate instance name.
3. Select a suitable AMI.
4. Choose an instance type.
5. Create or select an SSH key pair.
6. Under Network Settings, configure:  - VPC: Newly created VPC. - Subnet: Public Subnet. - Auto-assign Public IP: Enable. - Security Group: Public Security Group.
7. Launch the instance.
This instance will host the publicly accessible Home Page.

6.2 Private EC2 Instance – Login Page

1. Launch another EC2 instance.
2. Provide an appropriate instance name.
3. Select the same or a suitable Linux AMI.
4. Choose an instance type.
5. Use an appropriate SSH key pair.
6. Under Network Settings, configure:  - VPC: Newly created VPC. - Subnet: Private Subnet. - Auto-assign Public IP: Disable. - Security Group: Private Security Group.
7. Launch the instance.
This instance will host the Login Page and must not have direct public internet accessibility.

7. Deploy Home and Login Pages

Deploy a simple web server on both EC2 instances. Nginx or Apache can be used.

Public EC2 – Home Page

1. Connect to the public EC2 instance using SSH.
2. Install and configure a web server.
3. Create a simple Home Page.
4. Ensure the web server is listening on port 80.
5. Access the page using the instance's public IPv4 address.
Expected result:

http://<PUBLIC_EC2_IP>

The Home Page should be accessible from a browser over the internet.

Private EC2 – Login Page

1. Configure the private EC2 instance with a web server.
2. Create a simple Login Page.
3. Ensure the web server is listening on port 80.
4. Verify that the private instance does not have a public IPv4 address.
5. Access the private Login Page through the public EC2 instance or another authorized resource within the VPC.
Expected result:

http://<PRIVATE_EC2_PRIVATE_IP>

The Login Page should not be directly accessible from the public internet.

Note: For this exercise, you can use the public EC2 instance as a jump host to access the private instance. Use SSH agent forwarding or another secure key-management approach rather than unnecessarily copying private SSH keys onto the public server.

8. Verify Network Connectivity

Perform the following verification checks:

Public Subnet

- Verify that the public EC2 instance has a public IPv4 address.
- Verify that the Home Page is accessible over the internet.
- Verify that SSH access is restricted to your own IP.
- Verify that the public route table has a default route pointing to the Internet Gateway.
Private Subnet

- Verify that the private EC2 instance does not have a public IPv4 address.
- Verify that the Login Page cannot be accessed directly from the internet.
- Verify that the public EC2 instance can access the private Login Page.
- Verify that the private route table has a default route pointing to the NAT Gateway.
- Verify that the private instance can initiate outbound internet connectivity through the NAT Gateway.
9. Resource Cleanup and Deletion

Important: AWS resources such as NAT Gateways and EC2 instances may incur charges. Delete all resources created for this exercise once verification is complete.

Follow this deletion order:

1. Terminate EC2 Instances  - Navigate to EC2 → Instances. - Terminate both public and private EC2 instances. - Wait until termination is complete.
2. Delete NAT Gateway  - Navigate to VPC → NAT Gateways. - Select the NAT Gateway created for this task. - Delete it. - Wait until its status changes to Deleted.
3. Release Elastic IP  - Navigate to EC2 → Elastic IPs. - Disassociate the Elastic IP if necessary. - Release the Elastic IP allocated for the NAT Gateway.
4. Delete Security Groups  - Delete the custom security groups created for this task, if they are not automatically removed during VPC deletion.
5. Delete Route Tables  - Delete the custom public and private route tables after removing their subnet associations, if required.
6. Detach and Delete Internet Gateway  - Navigate to VPC → Internet Gateways. - Detach the Internet Gateway from the created VPC. - Delete the Internet Gateway.
7. Delete VPC  - Navigate to VPC → Your VPCs. - Select the VPC created for this task. - Delete it. - AWS may require dependent resources to be removed before the VPC can be deleted.
8. Final Verification  - Verify that all resources created for this exercise have been removed. - Ensure no NAT Gateway, Elastic IP, EC2 instance, or other billable resource remains. - Do not delete or modify any pre-existing default VPC resources.

## Attachments

- [Screenshot 2026-11-02 at 10.55.16 PM.png](attachments/Screenshot%202026-11-02%20at%2010.55.16%20PM.png)
- [Screenshot 2026-11-02 at 11.17.21 PM.png](attachments/Screenshot%202026-11-02%20at%2011.17.21%20PM.png)
- [Screenshot 2026-11-02 at 11.17.35 PM.png](attachments/Screenshot%202026-11-02%20at%2011.17.35%20PM.png)
- [Screenshot 2026-11-02 at 11.22.59 PM.png](attachments/Screenshot%202026-11-02%20at%2011.22.59%20PM.png)
- [Screenshot 2026-11-02 at 11.28.25 PM.png](attachments/Screenshot%202026-11-02%20at%2011.28.25%20PM.png)
- [Screenshot 2026-11-02 at 11.28.35 PM.png](attachments/Screenshot%202026-11-02%20at%2011.28.35%20PM.png)
- [Screenshot 2026-11-02 at 11.37.45 PM.png](attachments/Screenshot%202026-11-02%20at%2011.37.45%20PM.png)
- [Screenshot 2026-11-02 at 9.16.02 PM.png](attachments/Screenshot%202026-11-02%20at%209.16.02%20PM.png)
- [Screenshot 2026-11-02 at 9.16.10 PM.png](attachments/Screenshot%202026-11-02%20at%209.16.10%20PM.png)
- [Screenshot 2026-11-02 at 9.25.06 PM.png](attachments/Screenshot%202026-11-02%20at%209.25.06%20PM.png)
- [Screenshot 2026-11-02 at 9.32.49 PM.png](attachments/Screenshot%202026-11-02%20at%209.32.49%20PM.png)
- [Screenshot 2026-11-02 at 9.32.59 PM.png](attachments/Screenshot%202026-11-02%20at%209.32.59%20PM.png)
