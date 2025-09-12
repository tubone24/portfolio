module.exports = {
  stories: [
    "../src/**/*.stories.@(ts|tsx|mdx)",
    "../src/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack4",
  },
  features: {
    buildStoriesJson: true,
  },
};
