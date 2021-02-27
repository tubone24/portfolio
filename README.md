# portfolio
[![Twitter URL](https://img.shields.io/twitter/url/https/portfolio.tubone-project24.xyz?style=social)](https://twitter.com/intent/tweet?text=LikeThis:&url=https%3A%2F%2Fportfolio.tubone-project24.xyz)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/tubone24/portfolio) 
[![DeployToNetlifyPRD](https://github.com/tubone24/portfolio/workflows/DeployToNetlifyPRD/badge.svg)](https://github.com/tubone24/portfolio/actions/workflows/deploy.yml)
[![DeployToNetlifyPreview](https://github.com/tubone24/portfolio/actions/workflows/previewDeploy.yml/badge.svg)](https://github.com/tubone24/portfolio/actions/workflows/previewDeploy.yml)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/d0b9144f/portfolio)
[![CodeFactor](https://www.codefactor.io/repository/github/tubone24/portfolio/badge)](https://www.codefactor.io/repository/github/tubone24/portfolio)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier)](https://github.com/prettier/prettier)
[![storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://tubone24.github.io/portfolio/sb/?path=/story/example-introduction--page)

tubone's Portfolio

[https://portfolio.tubone-project24.xyz/](https://portfolio.tubone-project24.xyz/)

## About

This project uses Gatsby.js, an SSG tool that uses React with TypeScript, and React coding is developed using TypeScript and Styled Components for styles.

Use GitHub Actions to build, and deploy to Netlify

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

## Testing

### Unit Testing

You can use jest to perform unit tests on React components.

```
npm test
```

### E2E Testing

E2E testing can be performed using Cypress.

```
npm run test:e2e
```

### Visual Testing

You can use Percy to check your PR for unexpected changes in your design.

[Percy](https://percy.io/d0b9144f/portfolio)

## Formatting

### Prettier

You can use Prettier to keep the code format constant.

```
npm run format
```

### CodeFactor

The codefactor will be started at the timing of the PR.

[CodeFactor](https://www.codefactor.io/repository/github/tubone24/portfolio)

## UI catalog

### Storybook

This project uses Storybook to catalog the UI of the components used.

```
# Run local
npm run storybook

# Publish
npm run build-storybook
```

And also the catalog is available on GitHub Pages.

[Storybook](https://tubone24.github.io/portfolio/sb/?path=/story/example-introduction--page)

### Design

The UI design for this project is managed by Figma.

[Figma](https://www.figma.com/file/ay3SORZ5aWVpZQov8ewrcL/portfolio?node-id=0%3A1)
