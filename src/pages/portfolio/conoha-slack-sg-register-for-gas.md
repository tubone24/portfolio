---
title: "conoha-slack-sg-register-for-gas"
date: "2020-03-08"
tags: ["conoha", "google-apps-script", "slack-commands", "clasp", "ipregistry-client", "chatops", "typescript"]
image: './images/conoha-appscript.png'
---

![](https://raw.githubusercontent.com/tubone24/conoha-slack-sg-register-for-gas/master/docs/images/logo.png)

This is GoogleAppsScript to register home IP address with [conoHa VPS](https://www.conoha.jp/vps/?btn_id=top_vps) SecurityGroup using Slack command.

GitHub is [Here](https://github.com/tubone24/conoha-slack-sg-register-for-gas)

## Background

I use [conoHa VPS](https://www.conoha.jp/vps/?btn_id=top_vps) to create my own OpenVPN service and mail service.

For management purposes, there are times when you want to access the server with SSH, but opening the server SSH with any at any time poses a large security risk, so use the [ConoHa API](https://www.conoha.jp/docs/) when you access SSH. Opening the global IP address, and when the use was over, the access was closed again by API.

Because registering and deleting an IP address every time it is accessed from the API is costly, [Slack's Slash command](https://api.slack.com/interactivity/slash-commands) has been used to make it easier to manage OPEN and CLOSE IP addresses in the form of ChatOps.

In addition, the features of using GoogleAppsScript, which can be used for free, and the fact that scripts are described in TypeScript using clasp are also features.

## Demo

![demo](https://raw.githubusercontent.com/tubone24/conoha-slack-sg-register-for-gas/master/docs/images/demo.gif)

## Contributing

See [the contributing file](CONTRIBUTING.md)!

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT © tubone.](LICENSE)