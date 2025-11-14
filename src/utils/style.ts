import { css } from "styled-components";

type AtLeast1<T> = [T, ...T[]];

export const media = {
  ws: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (width <= 280px) {
      ${css(...args)}
    }
  `,
  xs: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (width <= 767px) {
      ${css(...args)}
    }
  `,
  sm: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (width <= 991px) {
      ${css(...args)}
    }
  `,
  md: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (width <= 1199px) {
      ${css(...args)}
    }
  `,
  lg: (...args: AtLeast1<TemplateStringsArray>) => css`
    @media (width >= 1200px) {
      ${css(...args)}
    }
  `,
};
