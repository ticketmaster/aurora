import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./Base.styles";
import BUTTON_VARIANTS from "./constants";
import getRelByTarget from "../../utils/link";

const Button = ({ variant, children, ...rest }) => {
  const { href } = rest;

  if (href) {
    const { rel, target } = rest;
    const validatedRel = getRelByTarget(target, rel);

    return (
      <StyledButtonLink variant={variant} rel={validatedRel} {...rest}>
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
