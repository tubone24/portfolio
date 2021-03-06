---
title: "post_twitter_on_work (Twitter CLI client)"
date: "2020-09-22"
tags: ["twitter","nim","cli"]
image: './images/post-twitter-nim.png'
---

[![](https://raw.githubusercontent.com/tubone24/post_twitter_on_work/master/docs/images/header_twitter.png)](https://github.com/tubone24/post_twitter_on_work)

> If you use it, you can watch Twitter on work.

# Quick start

First, download binary files as link the below. (compatible with Windows, Ubuntu, MacOS)

<https://github.com/tubone24/post_twitter_on_work/releases>

And you execute this binary, set your access token.

```
$ ./post_witter_on_work home

Access the url, please obtain the verifier key.
https://api.twitter.com/oauth/authorize?oauth_token=xxxxxxxxxxxxxxxxxxxxxxx
Please enter a verifier key (PIN code).

```

And you try to access authorize token url (https://api.twitter.com/oauth/authorize?oauth_token=xxxxxxxxxxxxxxxxxxxxxxx)

![img](https://raw.githubusercontent.com/tubone24/post_twitter_on_work/master/docs/images/auth.png)

And set PIN code and push enter button. That's all.

# Setup

Use Nim and Nimble, so you should install nim (>=1.00)

## Secret file

If you build this app, copy `secret.tpl.nim` to `secret.nim`

```
mv src/post_twitter_on_workpkg/secret.tpl.nim src/post_twitter_on_workpkg/secret.nim
```

## build

```
$ nimble install -d
$ nimble build
```

And create `settings.cfg` file, fill out Twitter Keys

```
[auth]
appKey="xxxxxx"
appKeySecret="xxxxxxxxxxxxxxxx"
accessToken="xxxxxxxxxxxxxx"
accessTokenSecret="xxxxxxx"
```

## Release Build

If you would like to optimize build.

```
$ nimble build -d:release
```

# Run

## Build and Run

```
$ nimble run post_twitter_on_work
```

## Or Run builder binary 

### for LINUX

```
$ ./bin/post_twitter_on_work
```

### for Windows

```
$ bin\post_twitter_on_work.exe
```

## Usage

```
Overview:
  Get Tweets on CLI for Nim Client

Usage:
  post_twitter_on_work status
  post_twitter_on_work home [-r|--resetToken] [-i|--interval=<seconds>]
  post_twitter_on_work mention [-r|--resetToken] [-i|--interval=<seconds>]
  post_twitter_on_work user <username> [-r|--resetToken] [-i|--interval=<seconds>]
  post_twitter_on_work search <query> [-r|--resetToken] [-i|--interval=<seconds>]
  post_twitter_on_work list <username>
  post_twitter_on_work showlist <username> <slugname> [-r|--resetToken] [-i|--interval=<seconds>]
  post_twitter_on_work post <text> [-r|--resetToken]

Options:
  status                      Get status
  home                        Get home timeline
  mention                     Get mention timeline
  user                        Get user timeline
  search                      Get twitter search
  list                        Get twitter list
  post                        Post Tweet
  showlist                    Show list
  <username>                  Twitter username
  <query>                     Search query keyword
  <text>                      Tweet text
  <slugname>                  Slug name
  -i, --interval=<seconds>    Get tweet interval (defaults 60 second)
  -r, --resetToken            Reset accessToken when change user account

```

## demo

You can watch your timeline and post tweets only CLI.

![img](https://raw.githubusercontent.com/tubone24/post_twitter_on_work/master/docs/images/demo.gif)
