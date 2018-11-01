import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";
import { typography, themes, constants, spacing } from "../../theme";

import { badgeVariants, badgeProps, badgeDefault } from "./constants";

export const StyledBadge = styled.div`
  padding: ${spacing.slim} ${spacing.cozy};
  font-weight: ${typography.weight.semiBold};
  text-align: center;
  color: ${({ variant = "dark" }) =>
    variant === "light" ? themes.global.gray01 : themes.global.white.base};
  font-size: ${typography.size.mini};
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
  variant: PropTypes.oneOf(Object.values(badgeVariants)),
  className: PropTypes.string
};

StatusBadge.defaultProps = {
  ...badgeDefault,
  variant: badgeVariants.dark,
  className: ""
};

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
