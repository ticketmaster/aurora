import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";
import { typography, themes, constants, spacing } from "../../theme";

import { badgeProps, badgeDefault } from "./constants";
import { VARIANTS, DARK, LIGHT } from "../constants";

export const StyledBadge = styled.div`
  padding: ${spacing.slim} ${spacing.cozy};
  font-weight: ${typography.weight.semiBold};
  text-align: center;
  color: ${({ variant = DARK }) =>
    variant === LIGHT ? themes.global.gray01 : themes.global.white.base};
  font-size: ${typography.size.mini};
  line-height: 1.2;
  border-radius: ${constants.borderRadius.small};
  letter-spacing: 0.25;
  text-transform: uppercase;
  background-color: ${({ color }) => color};
`;

const StatusBadge = ({ variant, color, label, className, ...rest }) => (
  <StyledBadge
    className={classNames(className, `badge`)}
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
  className: PropTypes.string
};

StatusBadge.defaultProps = {
  ...badgeDefault,
  variant: DARK,
  className: ""
};

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
