import { css } from "styled-components";

import { typography } from "../theme";
import {
  smallAndUp,
  mediumAndUp,
  largeAndUp,
  xLargeAndUp
} from "../theme/mediaQueries";

export const responsiveSizeMixin = size =>
  size
    ? css`
        font-size: ${typography.size[
          typeof size === "string" ? size : size.xSmall
        ]};

        ${size.small &&
          typeof size.small === "string" &&
          smallAndUp`
    font-size: ${typography.size[size.small]};
  `};

        ${size.medium &&
          mediumAndUp`
    font-size: ${typography.size[size.medium]};
  `};

        ${size.large &&
          largeAndUp`
    font-size: ${typography.size[size.large]};
  `};

        ${size.xLarge &&
          xLargeAndUp`
    font-size: ${typography.size[size.xLarge]};
  `};
      `
    : "";

export const getResponsiveSize = ({ size = "hecto", responsiveSize = null }) =>
  responsiveSize
    ? {
        xSmall: responsiveSize.xSmall || responsiveSize.small || size,
        small: responsiveSize.small,
        medium: responsiveSize.medium,
        large: responsiveSize.large,
        xLarge: responsiveSize.xLarge
      }
    : size;
