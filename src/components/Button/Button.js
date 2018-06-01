import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./Button.styles";
import BUTTON_VARIANTS from "./constants";

const Button = ({ variant, children, ...rest }) => {
  const { href, target } = rest;

  if (href) {
    const rel = (target === "_blank" && "noopener") || undefined;

    return (
      <StyledButtonLink variant={variant} rel={rel} {...rest}>
        {children}
      </StyledButtonLink>
    );
  }

  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(BUTTON_VARIANTS).isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
