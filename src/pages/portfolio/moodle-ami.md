---
title: "moodle-ami"
date: "2018-01-08"
tags: ["AWS", "Moodle", "Packer", "Ansible", "Serverspec"]
image: './images/moodle-ami.png'
---

It is a Packer template for creating an educational support content sharing server called Moodle.

[![](https://raw.githubusercontent.com/tubone24/mac-auto-setup/master/docs/images/header.png)](https://github.com/tubone24/moodle-ami)

## Background

In the company's educational content creation and instructor duties, Moodle will be used for text distribution and test creation for students, and it will be possible to easily create a Moodle server on AWS using Packer. did.

In order to save costs, PHP, httpd, and MySQL are packaged in one EC2. Of course, database provisioning is done automatically.

Technically, using Ansible, prepare the environment necessary for Moodle to work and deploy Moodle, and use Serverspec to check the provision status.

[GitHub is Here](https://github.com/tubone24/moodle-ami)
