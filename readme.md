<h1>IBM Client Engineering - Solution Document</h1>

> **Note**
> :mega:
> This is a Client Engineering engagement that is currently in progress.
> As we _'work in the open'_, details and solution design is subject to change.

<h2>Automating IBM Middleware IT Operations using Ansible</h2>
<img align="right" src="https://user-images.githubusercontent.com/95059/166857681-99c92cdc-fa62-4141-b903-969bd6ec1a41.png" width="491" >

- [Background and Business Problem](#background-and-business-problem)
    - [Use Cases:](#use-cases)
- [Solution Overview](#solution-overview)
  - [Building Block View](#building-block-view)
  - [Solution Deployment](#solution-deployment)
    - [MQ Cert Management](#mq-cert-management)
    - [Requirements for the role](#requirements-for-the-role)
    - [Role Tasks and Variables](#role-tasks-and-variables)
    - [Dependencies](#dependencies)
    - [Playbook Example](#playbook-example)
    - [Variables](#variables)
- [Security](#security)
- [Cost](#cost)
- [Risks and Technical Debts](#risks-and-technical-debts)
- [Testing](#testing)
- [Architecture Decisions](#architecture-decisions)

# Background and Business Problem
A valued Financial Services customer has approached IBM Client Engineering to formulate a point of view on **automating** manual IT Operations tasks for their IBM middleware landscape. Today, these manual tasks can be error-prone and time consuming.
### Use Cases:
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
- **Certificate Management:**
Automate the manual workflow of certificate management across the customer's IBM MQ footprint.
![image](https://user-images.githubusercontent.com/95059/190799946-d6ebfa22-1b29-4d2d-a6ae-cf94a2b576a7.png)

# Solution Overview

After gathering data on all the use-cases, this solution will use Ansible as the primary driver for automating operations.
![image](https://user-images.githubusercontent.com/95059/190798762-1aa5b297-dab9-420d-8e38-5743eab10d3a.png)

> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
## Building Block View
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!

## Solution Deployment

> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) This is a work in progress and the solution details are subject to change as the engagement progresses.
### MQ Cert Management

> **Warning**
> To prove Ansible's capability to solve the customer's use case, IBM Client Engineering > has built the following Ansible Role for demo purposes. This code and structure is
> going to evolve and change as the engagement progresses.

> **Note**
>** The certification management code is located in the "mq-cert-management-ansible-role" folder in this repository. [Here is a direct link](https://github.com/ibm-client-engineering/solution-middleware-automation/tree/main/mq-cert-management-ansible-role)

This role allows for simple certificate management in the local keystore on each node of MQ. This works for any RDQM cluster or standalone MQ host.

### Requirements for the role

At the moment this role requires a lot of specific settings in the inventory:

```
[mqipt_hosts]
mqipt ansible_host=<MQIPT HOST IP> ansible_user=<SYSTEM USER FOR ANSIBLE>

[washington]
ceng-wdc1-mq1 ansible_host=<HOST IP 1> mq_role=primary
ceng-wdc2-mq1 ansible_host=<HOST IP 2> mq_role=standby
ceng-wdc3-mq1 ansible_host=<HOST IP 3> mq_role=standby

[dallas]
ceng-dal1-mq1 ansible_host=<HOST IP 4> mq_role=primary
ceng-dal2-mq1 ansible_host=<HOST IP 5> mq_role=standby
ceng-dal3-mq1 ansible_host=<HOST IP 6> mq_role=standby

[washington:vars]
ansible_port=22
ansible_user=<ANSIBLE USER IF DIFFERENT>
queuemgr='<QUEUE MANAGER ON THIS CLUSTER>'
keypath='/var/mqm/vols/<QM>/qmgr/<QM>/ssl/defaultSSLKeyFile.kdb'
private_key_file=keys/<PATHTOSSHKEY>_pem
load_balancer="<OUR REGIONAL LOADBALANCER FOR THIS CLUSTER>"
## Add this line to inventory if using a bastion host as ssh proxy
ansible_ssh_common_args='-l <USER> -i <path to ssh pem> -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ProxyCommand="ssh -l <USER> -i <path to pem> -W %h:%p -q <BASTION HOST IP"'

[dallas:vars]
ansible_port=22
ansible_user=<ANSIBLE USER IF DIFFERENT>
queuemgr='<QUEUE MANAGER ON THIS CLUSTER>'
keypath='/var/mqm/vols/<QM>/qmgr/<QM>/ssl/defaultSSLKeyFile.kdb'
private_key_file=keys/<PATHTOSSHKEY>_pem
load_balancer="<OUR REGIONAL LOADBALANCER FOR THIS CLUSTER>"
## Add this line to inventory if using a bastion host as ssh proxy
ansible_ssh_common_args='-l <USER> -i <path to ssh pem> -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ProxyCommand="ssh -l <USER> -i <path to pem> -W %h:%p -q <BASTION HOST IP"'
```

In our example above, we define the hosts and we set a `primary` node for each cluster. This isn't conducive to failovers in this revision of the role.

We also set a `queuemgr` for each group as it's specific to that cluster. The milage may vary on different types of MQ configurations, but this is a variable that can be overwritten at execution time.

Also in our example, ansible will connect as the root user. For future use, always configure a local user with the correct sudo permissions. This also necessitates the need to define a path to the ssh private key for ansible to use.

The `ansible_ssh_common_args` is used for ansible to connect if you are using a bastion host and not running on the same secured network

When importing this role, it's important to also note that it is useful to have the following

### Role Tasks and Variables

When running this role from a Tower environment or running from cmdline, the following vars are required and/or overwriteable. This is a breakdown per task:

**Task:** `mq-add-pub-cert.yaml`<br>
Description: This task allows for adding a trusted cert to a keystore.<br>
Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `cert_body` - The actual cert itself.
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `addpubcert`

**Task:** `mq-create-keystore.yaml`<br>
Description: This task will create a new keystore for a queue manager and configure the qm to use it.<br>
Variables:
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `createkeystore`

**Task:** `mq-getcerts.yaml`<br>
Description: Get a list of all certs that exist in a keystore and send a formatted email with them broken down between Trusted, Personal, and any generated CSRs.<br>
Variables:
  - `email_address` - The email address to send any updates for this task.

Tags: `getallcerts`

**Task:** `mq-get-cert-expirations.yaml`<br>
Description: Get a list of all certs that have imminent or expired dates.<br>
Variables:
  - `email_address` - The email address to send any updates for this task.

Tags: `listexpires`

**Task:** `mq-create-cert.yaml`<br>
Description: Create a new personal cert for the keystore and then extract and email the public cert so we can add it to any SSL peer and update any associated Github issue number with what we've done.<br>
Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `createcert`

**Task:** `mq-get-pub-cert.yaml`<br>
Description: Extract and email the trusted cert for the named cert label we give.<br>
Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `email_address` - The email address to send any updates for this task.

Tags: `getpubcert`

**Task:** `mq-remove-pub-cert.yaml`<br>
Description: Delete a Trusted cert from the keystores<br>
Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `certremove`

**Task:** `mq-get-info.yaml`<br>
Description: This is a required task that is called via tags by any of the other tasks. It retrieves information from the keystore that is used by the other tasks. This task isn't typically called directly. The type of info it returns are as such:
  - Pulls the current keyfile path that is set in the queue manager
  - Pulls the current cert label that is set in the queue manager
  - Pulls the list of trusted certs
  - Pulls thelist of personal certs
  - Pulls the list of certs with expirations
  - Pulls a list of any unsigned CSRs that were created in the keystore

  Tags: `getinfo, getpubcert, certremove, addpubcert, listexpires, createcert, getallcerts`

### Dependencies

A list of other roles hosted on Galaxy should go here, plus any details in regards to parameters that may need to be set for other roles, or variables that are used from other roles.

### Playbook Example

A typical example of using this role would be to first import it via ansible-galaxy and then point a playbook to it.

An example entry in your requirements file in your roles directory:

```
- name MQ Certificate Management
  src: https://github.com/client-engineering-devops/mq-cert-management-role.git
  name: mq-cert-managment-role
  scm: git
  version: main
```
And our playbook would look like this:

```
- hosts: washington,dallas
  become: true
  become_user: root
  gather_facts: true
  roles:
  - role: mq-cert-management-role
```
### Variables

For our orchestrator we would want to set some group vars for this role, particularly ansible vault encrypted tokens or passwords. For our test environment we set our `group_vars/all/main.yaml` with the following variables:

```
smtp_info:
  host: smtp.sendgrid.net
  port: 465
  user: apikey
  pass: "{{ smtp_pass }}"
  auth: true
  from: "IBM Digital Business Automation on Cloud<noreply@bpm.ibmcloud.com>"

email_address:
  - Ross Kramer <kramerro@us.ibm.com>
  - Faraz Ahmad <faraz@ibm.com>

github_repo: "https://github.com/api/v3/repos/ibm-client-engineering/solution-mq-certificate-management"

github_issue: "1"

github_access_token: !vault |
          $ANSIBLE_VAULT;1.1;AES256
          64333133313831313363663861346637613663323439643731333264383831646137646637396436
          3461353530386564616339383764303832333332333761340a643437343734643334626631616138
          34613039383933616539306431616139363535643663373065643763646237343938386265363332
          3962333439313930630a373031343033393165346662656131643361653162313730396465323264
          3962333439313930630a373031343033393165346662656131643361653162313730396465323264
          65643438353136643863333530376537363830346664613761376663346462616462653366643639
          6336303230373363333533393663626266323539656337313336

smtp_pass: !vault |
          $ANSIBLE_VAULT;1.1;AES256
          32303333346433623861363861626466356331343934626531623633386234646234633066623731
          6635656463346130326366666663383031393239336665310a393836633138376137666630663739
          34373539393234363561333066323736646437663463326231383737333865343766363939366136
          6433396233646365610a373132636633313761333734326237343335633131626364333065636564
          66386239663337643064346231666163623333356538666363376466343535303165663265623139
          32613335613262333132323264363964643534646337623938313164333031663736663139623265
          65346362323331633163663964353134653431653532366266663433373338663064326335306234
          32393936613964643234

keystore_passwd: !vault |
          $ANSIBLE_VAULT;1.1;AES256
          36353763323034333765386265306165333936303832336336323132616532663739356438356563
          3066653839656534393538643438633832613138373033310a343538333834383132333966326632
          63653638313336653638646663633632616165376631303637636238343763613235386239326330
          3164633530303338640a653036343735633135306539613633356634646233623435373263326435
          3631

# Cert management stuff

sig_alg: "SHA256WithRSA"
expire_time: 90
```

We stored a lot of elements here in the global vars above. Primarily we do this so we can share the variables across multiple roles. These vars however can be very much localized into the role itself via `vars/main.yaml` or `defaults/main.yaml`.

The important variables are `smtp_info` as these are the required vars for the `mail` module in ansible. This allows us to email out. Others are the `github_repo` path. This is necessary in order to update our associated github issue. The `github_issue` var and `email_address` var are just populated with default values that we overwrite with our `extra_vars`.

Ansible vault encryption is how we are protecting our passwords and tokens. These entries are encrypted and are decrypted at run time using the ansible secret. That secret is typically stored in Tower or can be stored in a file to reference at run time when using the ansible-playbook command. Other vars like `sig_alg` and `expire_time` are also set to be default values to use when creating new certificates in the keystores.

Once again, any variable set here can be overwritten with the `extra-vars` flag when running via commandline.

Local Vars:

In our defaults dir we set some default vars. Currently it would look like this:

```
---
# defaults file for mq-cert-management

MQM_BIN_PATH: "/opt/mqm/bin"

company_url: "https://www.ibm.com"
company_logo: "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png"
```

This lets us set a default URL and default company logo to use for our email templates.

### Examples of running the role in Ansible Tower

The following is an example of running the role to collect all existing certs that exist in the keystore:
![Collecting the key labels](https://user-images.githubusercontent.com/102995992/190835292-fe1b51ee-282d-4699-869a-60d158436548.gif)

This would return two emails, one for each cluster we checked:

|||
|--------|--------|
|<img width="695" alt="email one" src="https://user-images.githubusercontent.com/102995992/190835529-629510b7-9a6f-4441-aede-4bea1f9d1f48.png">|<img width="620" alt="email two" src="https://user-images.githubusercontent.com/102995992/190835534-8789e173-64d7-4dbe-a12e-54097105fc12.png">|

This would be an example of running the role to add a public cert to the keystores:
![Adding public cert](https://user-images.githubusercontent.com/102995992/190836263-7cf5cc6d-706b-4ad5-8521-38f2f3cee151.gif)

This would also return two emails, one for each cluster we checked:

|||
|--------|--------|
|<img width="601" alt="Email one" src="https://user-images.githubusercontent.com/102995992/190836329-802c4fc8-b470-4397-855e-c4833ad15e3d.png">|<img width="608" alt="Email two" src="https://user-images.githubusercontent.com/102995992/190836331-9a258fdd-b460-4516-bd33-87649598391d.png">|

And furthermore since we specified a github issue, that issue would also be updated with two comments:

|||
|--------|--------|
|<img width="600" alt="Comment one" src="https://user-images.githubusercontent.com/102995992/190836389-791bc1a2-0943-48a3-a896-42385e1864ff.png">|<img width="600" alt="Comment two" src="https://user-images.githubusercontent.com/102995992/190836395-6ff7904d-1181-4376-8b2b-feeb1106022f.png">|


# Security
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
# Cost
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
# Risks and Technical Debts
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
# Testing
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
# Architecture Decisions
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
