import React from "react";
import PropTypes from "prop-types";

import StyledBadge from "./Badge.styles";
import { SIZES, REGULAR, BUTTON_VARIANTS, STANDARD } from "../constants";

const Badge = ({ children, variant, ...props }) => (
  <StyledBadge variant={variant} {...props}>
    {children}
  </StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES)
};

Badge.defaultProps = {
  size: REGULAR,
  variant: STANDARD
};

export default Badge;
