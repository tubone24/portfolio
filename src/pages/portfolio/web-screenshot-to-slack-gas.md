---
title: "web-screenshot-to-slack-gas"
date: "2019-10-01"
tags: ["Google Apps Script", "API Flash", "Slack", "Clasp", "TypeScript"]
image: './images/web-screenshot-to-slack-gas.png'
---

This app is take screenshots of Web pages with GAS(Google Apps Script) and send images to Slack channel with Slack API.

![](https://raw.githubusercontent.com/tubone24/web-screenshot-to-slack-gas/master/docs/images/header.png)

## Background

I should get a screen capture of my website and paste it into Slack channels.

Because I wanted to do it easily, instead of setting up a dedicated server, I make it as FaaS using Google Apps Script (GAS).

And also, I want to use TypeScript because of a Test and Type lint, so using with `clasp` referenced by [howdy39/gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter)

## Demo

Run main function , send Slack your web page screenshot.

![img](https://raw.githubusercontent.com/tubone24/web-screenshot-to-slack-gas/master/docs/images/slack-preview.png)

## More Information

This uses Clasp, coding GAS with TypeScript, creating unit tests with Jest, automatic testing with GitHub Action, and deployment.

You can also use it as a sample starter kit.

[GitHub is here](https://github.com/tubone24/web-screenshot-to-slack-gas)
