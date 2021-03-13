module.exports = {
  siteMetadata: {
    title: `tubone24`,
  },
  plugins: [
    // 'gatsby-plugin-preact',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`${__dirname}/src/__generated__/*.ts`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 925,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false,
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
  ],
};
