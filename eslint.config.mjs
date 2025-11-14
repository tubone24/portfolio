import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import storybookPlugin from "eslint-plugin-storybook";
import globals from "globals";

export default [
  // Ignore patterns (replacing .eslintignore)
  {
    ignores: [
      "src/__generated__/**/*.ts",
      "node_modules/**",
      "public/**",
      ".cache/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
      ".storybook/**",
      "sb/**",
    ],
  },
  // Base JavaScript config
  js.configs.recommended,
  // TypeScript and React files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooksPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "no-undef": "off", // TypeScriptがチェックするので不要
      "@typescript-eslint/no-unused-vars": "off", // 一旦オフ
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
    },
  },
  // Prettier config (should be last)
  prettierConfig,
];
