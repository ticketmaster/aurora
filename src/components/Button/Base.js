import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./Base.styles";
import { SIZES, REGULAR, BUTTON_VARIANTS, STANDARD } from "../constants";
import { getRelByTarget } from "../../utils/link";

const Button = ({ variant, size, children, ...rest }) => {
  const { href } = rest;

  if (href) {
    const { rel, target } = rest;
    const validatedRel = getRelByTarget(target, rel);

    return (
      <StyledButtonLink
        variant={variant}
        size={size}
        rel={validatedRel}
        as="a"
        {...rest}
      >
        {children}
      </StyledButtonLink>
    );
  }

  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES),
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: REGULAR,
  variant: STANDARD
};

export default Button;
