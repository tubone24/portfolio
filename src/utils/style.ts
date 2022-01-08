import { css } from "styled-components";

type AtLeast1<T> = [T, ...T[]];

export const media = {
  ws: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (max-width: 280px) {
      ${css(...args)}
    }
  `,
  xs: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  sm: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (max-width: 991px) {
      ${css(...args)}
    }
  `,
  md: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (max-width: 1199px) {
      ${css(...args)}
    }
  `,
  lg: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
};
