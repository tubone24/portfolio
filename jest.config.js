// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest-configs/setup-test-env.js"),
  ],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "\\.svg": "<rootDir>/jest-configs/__mocks__/svgTransform.js",
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./jest-configs/__mocks__/file-mocks.js`,
    "\\.svg": `<rootDir>/jest-configs/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
    "^gatsby-plugin-image$": "<rootDir>/__mocks__/gatsby-plugin-image.ts",
    "^gatsby-image$": "<rootDir>/jest-configs/__mocks__/gatsby-image.js",
    "^gatsby$": "<rootDir>/jest-configs/__mocks__/gatsby.js",
    "^yet-another-react-lightbox$": "<rootDir>/jest-configs/__mocks__/yet-another-react-lightbox.js",
    "^yet-another-react-lightbox/styles.css$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, `cypress`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|yet-another-react-lightbox)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
};
