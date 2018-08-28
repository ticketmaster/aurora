import React from "react";
import PropTypes from "prop-types";

import StyledBadge from "./Badge.styles";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "./constants";

const Badge = ({ children, variant, ...props }) => (
  <StyledBadge variant={variant} {...props}>
    {children}
  </StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES))
};

Badge.defaultProps = {
  size: "regular",
  variant: "standard"
};

export default Badge;
