import Typography from 'typography';
import typographyTheme from './src/utils/typography';

const typography = new Typography(typographyTheme);

export const onClientEntry = () => {
  // クライアント側で Typography のスタイルを注入
  typography.injectStyles();
};

export const shouldUpdateScroll = () => {
  return false;
};