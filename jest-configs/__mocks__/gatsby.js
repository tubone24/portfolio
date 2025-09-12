const React = require('react');

module.exports = {
  __esModule: true,
  // Link を a タグにフォールバック
  Link: ({ to, children, ...rest }) =>
    React.createElement('a', { href: to, ...rest }, children),
  // よく使うユーティリティをスタブ
  graphql: () => {},
  StaticQuery: {},
  useStaticQuery: () => ({}),
  navigate: () => {},
};
