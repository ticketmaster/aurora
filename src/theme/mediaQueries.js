import { css } from "styled-components";

import constants from "./constants";

export const xSmallAndDown = (...args) => css`
  @media screen and ${constants.breakpoints.xSmallAndDown} {
    ${css(...args)};
  }
`;

export const mediumAndUp = (...args) => css`
  @media screen and ${constants.breakpoints.mediumAndUp} {
    ${css(...args)};
  }
`;

export const largeAndUp = (...args) => css`
  @media screen and ${constants.breakpoints.largeAndUp} {
    ${css(...args)};
  }
`;

export const xLargeAndUp = (...args) => css`
  @media screen and ${constants.breakpoints.xLargeAndUp} {
    ${css(...args)};
  }
`;
