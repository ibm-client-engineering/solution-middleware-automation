---
id: integrate
sidebar_position: 4
title: Integrate
---

## Use Cases:
> **Note**
>![construction](https://user-images.githubusercontent.com/95059/190730003-07b8b678-ebe8-4164-ac45-fb283ce031ca.svg) Work in Progress!
- **Certificate Management:**
Automate the manual workflow of certificate management across the customer's IBM MQ footprint.
![image](https://user-images.githubusercontent.com/95059/190799946-d6ebfa22-1b29-4d2d-a6ae-cf94a2b576a7.png)

### Examples of running the role in Ansible Tower

The following is an example of running the role to collect all existing certs that exist in the keystore:
![Collecting the key labels](https://user-images.githubusercontent.com/102995992/190835292-fe1b51ee-282d-4699-869a-60d158436548.gif)

This would return two emails, one for each cluster we checked:

|||
|--------|--------|
|<img width="695" alt="email one" src="https://user-images.githubusercontent.com/102995992/190835529-629510b7-9a6f-4441-aede-4bea1f9d1f48.png"\>|<img width="620" alt="email two" src="https://user-images.githubusercontent.com/102995992/190835534-8789e173-64d7-4dbe-a12e-54097105fc12.png"\>|

This would be an example of running the role to add a public cert to the keystores:
![Adding public cert](https://user-images.githubusercontent.com/102995992/190836263-7cf5cc6d-706b-4ad5-8521-38f2f3cee151.gif)

This would also return two emails, one for each cluster we checked:

|||
|--------|--------|
|<img width="601" alt="Email one" src="https://user-images.githubusercontent.com/102995992/190836329-802c4fc8-b470-4397-855e-c4833ad15e3d.png"\>|<img width="608" alt="Email two" src="https://user-images.githubusercontent.com/102995992/190836331-9a258fdd-b460-4516-bd33-87649598391d.png"\>|

And furthermore since we specified a github issue, that issue would also be updated with two comments:

|||
|--------|--------|
|<img width="600" alt="Comment one" src="https://user-images.githubusercontent.com/102995992/190836389-791bc1a2-0943-48a3-a896-42385e1864ff.png"\>|<img width="600" alt="Comment two" src="https://user-images.githubusercontent.com/102995992/190836395-6ff7904d-1181-4376-8b2b-feeb1106022f.png"\>|