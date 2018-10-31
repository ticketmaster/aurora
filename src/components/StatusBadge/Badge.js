import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typography, themes, constants } from "../../theme";

import { badgeTypes, badgeProps, badgeDefault } from "./constants";

export const StyledBadge = styled.div`
  padding: 4px 8px;
  font-weight: ${typography.weight.semiBold};
  text-align: center;
  color: ${({ type = "dark" }) =>
    type === "light" ? themes.global.gray01 : themes.global.white.base};
  font-size: ${typography.size.mini};
  border-radius: ${constants.borderRadius.small};
  letter-spacing: 0.25;
  text-transform: uppercase;
  background-color: ${({ color }) => color};
`;

const Badge = ({ type, color, label, className, ...rest }) => (
  <StyledBadge
    className={`${className} badge`}
    type={type}
    color={color}
    {...rest}
  >
    {label}
  </StyledBadge>
);

Badge.propTypes = {
  ...badgeProps,
  type: PropTypes.oneOf(Object.values(badgeTypes)),
  className: PropTypes.string
};

Badge.defaultProps = {
  ...badgeDefault,
  type: badgeTypes.dark,
  className: ""
};

Badge.displayName = "Badge";

export default Badge;
