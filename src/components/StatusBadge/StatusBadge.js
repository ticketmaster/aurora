import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";
import classNames from "classnames";
import { badgeProps, badgeDefault } from "./constants";

import {
  typography,
  themes,
  constants,
  spacing
} from "../../theme";

import {
  VARIANTS,
  DARK,
  LIGHT,
  BADGE_TYPES
} from "../constants";

// const COLOR = themes.global;
const {
  CAUTION,
  DEFAULT,
  ERROR,
  NEUTRAL,
  SUCCESS,
  TRANSPARENT,
  DEFAULT_LIGHT,
  ERROR_LIGHT,
  CAUTION_LIGHT,
  SUCCESS_LIGHT,
} = BADGE_TYPES;

const Badge_colors ={
  [CAUTION]: themes.global.caution.dark ,
  [CAUTION_LIGHT]: themes.global.caution.light ,
  [DEFAULT]: themes.global.accent01.dark,
  [DEFAULT_LIGHT]: themes.global.accent01.light,
  [ERROR]: themes.global.error.base,
  [ERROR_LIGHT]: themes.global.error.light,
  [SUCCESS]: themes.global.success.base,
  [SUCCESS_LIGHT]: themes.global.success.light,
  [NEUTRAL]: themes.global.onyx.light,
  [TRANSPARENT]: null 
}

export const StyledBadge = styled.div`
  padding: ${spacing.slim} ${spacing.cozy};
  font-weight: ${typography.weight.semiBold};
  text-align: center;
  color: ${({ variant = DARK, color }) =>
    variant === LIGHT 
      ? themes.global.gray01 
    : variant === TRANSPARENT && color
      ? color 
    : variant === TRANSPARENT
      ? themes.global.gray01
    : themes.global.white.base
  };
  font-size: ${typography.size.mini};
  line-height: 1.2;
  border-radius: ${constants.borderRadius.small};
  letter-spacing: 0.25;
  text-transform: uppercase;
  background-color: ${({color, type}) =>
    type ? Badge_colors[type] : color
  }
 
`;

const StatusBadge = ({ variant, color, label, className, type, ...rest }) => (
  <StyledBadge
    className={classNames(className, `badge`)}
    type={type}
    variant={variant}
    color={color}
    {...rest}
  >
    {label}
  </StyledBadge>
);

StatusBadge.propTypes = {
  ...badgeProps,
  variant: PropTypes.oneOf(VARIANTS),
  className: PropTypes.string,
  type: PropTypes.string
};

StatusBadge.defaultProps = {
  ...badgeDefault,
  variant: DARK,
  className: ""
};

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
