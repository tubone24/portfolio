module.exports = {
  extends: [
    "stylelint-config-standard",
  ],
  customSyntax: "postcss-styled-syntax",
  rules: {
    "nesting-selector-no-missing-scoping-root": null,
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-property-value-no-unknown": null,
    "no-descending-specificity": null,
    "keyframes-name-pattern": null,
    "block-no-empty": null,
    "no-invalid-position-at-import-rule": null,
  },
};
