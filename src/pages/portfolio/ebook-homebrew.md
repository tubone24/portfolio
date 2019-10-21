---
title: "Ebook-homebrew"
date: "2018-01-08"
tags: ["website", "Python", "Vue.js", "PDF", "Docker", "Heroku"]
image: './images/ebook-homebrew.png'
---

The Ebook HomeBrew provides you functional [APIs] which make e-book format files from images.
It is made by Python, Vue.js, Docker and taking in latest technologies.(Recently, GitHub Action, GitPitch, automatic testing with CI, automatic deployment, etc.)

It also provides functional Python modules which file name to only digit name like 001.jpg and make e-book format files, [reference here].

The demo site made by heroku, [demo here]

![](./images/ebook-homebrew-1.png)

Top page

![](./images/ebook-homebrew-2.png)

Upload your images

![](./images/ebook-homebrew-3.png)

Image list

## Background

The Ebook HomeBrew is the first API service I created.

First, I created a Python CLI using PyPDF and Pillow, one of the Python libraries.

This was converted into an API using a web framework called Responder, and a front was created using Vue.js.

In addition, we started document production using Sphinx and OpenAPI, and established a mechanism for automatic testing using CI and indexing to PyPI.

The demo site is implemented using Heroku.

[GitHub is here]

## Presentation

This repo has presentation with GitPitch.

[GitPitch presentation]

<!--- reference links --->
[APIs]: <https://ebook-homebrew.herokuapp.com/docs>
[reference here]: <https://ebook-homebrew.readthedocs.io/en/latest/index.html>
[demo here]: <https://ebook-homebrew.herokuapp.com/#/>
[GitHub is here]: <https://github.com/tubone24/ebook_homebrew>
[GitPitch presentation]: <https://gitpitch.com/tubone24/ebook_homebrew/master?grs=github>
