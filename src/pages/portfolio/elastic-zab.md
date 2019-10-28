---
title: "Elastic-Zab"
date: "2017-07-23"
tags: ["Elasticsearch", "Zabbix", "Shell"]
image: './images/elastic-zab.png'
---

![](https://raw.githubusercontent.com/tubone24/Elastic_zab/master/es-zab.png)

Elasticsearch cluster status and health check are collected by Zabbix externalscript, then to visualize by Zabbix Graphs.

[GitHub is Here](https://github.com/tubone24/Elastic_zab)

### Background

Created because it is necessary to obtain and monitor metrics with Zabbix while operating an Elasticsearch cluster.

It is realized by using Zabbix external script and Elasticsearch MonitorAPI.

## Installation
1. Set up "2" following user macros in your Elasticsearch nodes to Zabbix Host menus.
 * **{$ESIP}** = The Elasticsearch node IP or DNS name.
 * **{$ESPORT}** = The Elasticsearch node port number.

2. Import the template to zabbix (elasticsearch_zab.xml) and link it to your Elasticsearch nodes.
Template name is "Elasticsearch Cluster"

3. Copy the shell script (elastic.sh) to the Zabbix server in the externalscript directory. (e.g. /usr/lib/zabbix/externalscripts)

4. Set a executable permission the script by using chown and chmod commands.
```
chown zabbix. elastic.sh
chmod 751 elastic.sh
```
5. Enjoy your Elasticsearch and Zabbix life!

