const React = require('react');
const TypographyModule = require('typography');
const Typography = TypographyModule.default || TypographyModule;
const typographyTheme = require('./src/utils/typography').default;

exports.onRenderBody = ({ setHeadComponents }) => {
  const typography = new Typography(typographyTheme);
  setHeadComponents([
    React.createElement('style', {
      key: 'typography',
      id: 'typography',
      dangerouslySetInnerHTML: { __html: typography.toString() },
    }),
  ]);
};
