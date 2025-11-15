module.exports = {
  siteMetadata: {
    title: `tubone24`,
    siteUrl: `https://portfolio.tubone-project24.xyz`,
    description: `Full-stack developer portfolio showcasing web development, photography, and music projects by tubone24.`,
    author: `tubone24`,
    keywords: [
      `portfolio`,
      `web developer`,
      `full-stack developer`,
      `TypeScript`,
      `React`,
      `Node.js`,
      `AWS`,
      `Python`,
      `photography`,
      `music`,
      `DTM`,
    ],
    social: {
      twitter: `@tubone24`,
      github: `tubone24`,
      facebook: `yu.otsubo`,
      instagram: `mugimugi.cutedog`,
    },
    image: `/logo-512x512.png`,
    lang: `ja`,
  },
  graphqlTypegen: false,
  plugins: [
    // 'gatsby-plugin-preact',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `pacifico:400`,
          `Arizonia:400`,
          `raleway:100,400,600,700`,
          `Love Ya Like A Sister:100,400,600,700`,
          `lato: 300,400,500`,
        ],
      },
    },
    // Gatsby v5 で非推奨のため削除: `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`${__dirname}/src/__generated__/*.ts`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/static/hero/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/static/books/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    // Gatsby v5 で利用できないため削除: gatsby-plugin-typography
    // 代わりに gatsby-browser / gatsby-ssr で注入
    // 画像最適化: gatsby-plugin-image を追加
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 925,
              linkImagesToOriginal: true,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154418185-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "tubone24 Portfolio",
        short_name: "tubone24",
        start_url: "/",
        background_color: "#292929",
        theme_color: "#4bff21",
        icon: "static/logo-150x150.png",
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://d15f1e2f481849e0ba6d36d55ae52f9f@sentry.io/1778883",
        environment: process.env.NODE_ENV,
        release: `tubone-portfolio@${process.env.GATSBY_GITHUB_SHA}`,
        tracesSampleRate: 1.0,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://portfolio.tubone-project24.xyz",
        sitemap: "https://portfolio.tubone-project24.xyz/sitemap-index.xml",
        resolveEnv: () => process.env.NETLIFY_ENV || process.env.NODE_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
