module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-interactions'
  ],
  "core": {
    "builder": "webpack4"
  },
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]
    // Fix for gatsby-page-utils module resolution issue and ES modules issues
    const path = require('path');
    config.resolve.alias = {
      ...config.resolve.alias,
      'gatsby-page-utils/apply-trailing-slash-option': path.resolve(__dirname, '../node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js'),
      // Mock Gatsby modules to prevent ES module import issues
      'gatsby': path.resolve(__dirname, './mocks/gatsby.js'),
      'gatsby-link': path.resolve(__dirname, './mocks/gatsby-link.js'),
      'gatsby-image': path.resolve(__dirname, './mocks/gatsby-image.js')
    };

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: [
          require.resolve("@babel/plugin-proposal-class-properties"),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve("babel-plugin-remove-graphql-queries"),
        ],
      },
    })
    
    // ESモジュールの問題を解決するためにバンドル設定を調整
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    
    config.resolve.extensions.push(".ts", ".tsx", ".mjs")
    
    // モジュール解決の優先順位を調整
    config.resolve.mainFields = ["browser", "main"]
    
    return config
  },
}
