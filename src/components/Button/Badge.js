import React from "react";
import PropTypes from "prop-types";

import { StyledBadge } from "./";
import BUTTON_VARIANTS from "./constants";

const Badge = ({ children, variant, ...props }) => (
  <StyledBadge variant={variant} {...props}>
    {children}
  </StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANTS).isRequired
};

export default Badge;
