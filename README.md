# portfolio
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/tubone24/portfolio) 
![DeployToNetlifyPRD](https://github.com/tubone24/portfolio/workflows/DeployToNetlifyPRD/badge.svg)

tubone's Portfolio

[https://portfolio.tubone-project24.xyz/](https://portfolio.tubone-project24.xyz/)

## About

This project uses Gatsby.js, an SSG tool that uses React with TypeScript, and React coding is developed using TypeScript and Styled Components for styles.

Deployment is also achieved using Netlify.

## Setup and Develop

### Run locally

Run Gatsby develop

```
npm install

npm start
```

### Build static HTMLs

Run Gatsby build, output to a `public` directory

```
npm run build
```

### Type Check

This project is developed using TypeScript, so it can be type-checked by `TSC`.

```
npm run typecheck
```

## Storybook

This project uses Storybook to catalog the UI of the components used.

```
# Run local
npm run storybook

# Publish
npm run build-storybook
```

And also the catalog is available on GitHub Pages.

[Storybook](https://tubone24.github.io/portfolio/?path=/story/example-introduction--page)

## Design

[Figma](https://www.figma.com/file/ay3SORZ5aWVpZQov8ewrcL/portfolio?node-id=0%3A1)
