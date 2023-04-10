---
id: role-tasks-variables
sidebar_position: 5
title: Role Tasks and Variables
---

### Role Tasks and Variables

When running this role from a Tower environment or running from cmdline, the following vars are required and/or overwriteable. This is a breakdown per task:

**Task:** `mq-add-pub-cert.yaml`

Description: This task allows for adding a trusted cert to a keystore.

Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `cert_body` - The actual cert itself.
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `addpubcert`

**Task:** `mq-create-keystore.yaml`

Description: This task will create a new keystore for a queue manager and configure the qm to use it.

Variables:
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `createkeystore`

**Task:** `mq-getcerts.yaml`

Description: Get a list of all certs that exist in a keystore and send a formatted email with them broken down between Trusted, Personal, and any generated CSRs.

Variables:
  - `email_address` - The email address to send any updates for this task.

Tags: `getallcerts`

**Task:** `mq-get-cert-expirations.yaml`

Description: Get a list of all certs that have imminent or expired dates.

Variables:
  - `email_address` - The email address to send any updates for this task.

Tags: `listexpires`

**Task:** `mq-create-cert.yaml`

Description: Create a new personal cert for the keystore and then extract and email the public cert so we can add it to any SSL peer and update any associated Github issue number with what we've done.

Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `createcert`

**Task:** `mq-get-pub-cert.yaml`

Description: Extract and email the trusted cert for the named cert label we give.

Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `email_address` - The email address to send any updates for this task.

Tags: `getpubcert`

**Task:** `mq-remove-pub-cert.yaml`

Description: Delete a Trusted cert from the keystores

Variables:
  - `cert_label` - The label the cert will be known by in the keystore.
  - `email_address` - The email address to send any updates for this task.
  - `github_issue` - The github issue number we want to update with our status on this job.

Tags: `certremove`

**Task:** `mq-get-info.yaml`

Description: This is a required task that is called via tags by any of the other tasks. It retrieves information from the keystore that is used by the other tasks. This task isn't typically called directly. The type of info it returns are as such:
  - Pulls the current keyfile path that is set in the queue manager
  - Pulls the current cert label that is set in the queue manager
  - Pulls the list of trusted certs
  - Pulls thelist of personal certs
  - Pulls the list of certs with expirations
  - Pulls a list of any unsigned CSRs that were created in the keystore

  Tags: `getinfo, getpubcert, certremove, addpubcert, listexpires, createcert, getallcerts`