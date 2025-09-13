import { fileURLToPath } from "url";

export default {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // Gatsby 関連モジュールを Storybook 用モックに差し替え
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      gatsby: fileURLToPath(new URL("./mocks/gatsby.js", import.meta.url)),
      "gatsby-link": fileURLToPath(new URL("./mocks/gatsby-link.js", import.meta.url)),
      "gatsby-image": fileURLToPath(new URL("./mocks/gatsby-image.js", import.meta.url)),
      "gatsby-plugin-image": fileURLToPath(new URL("./mocks/gatsby-plugin-image.js", import.meta.url)),
    };

    return config;
  },
};
