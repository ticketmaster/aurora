import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./Base.styles";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "./constants";
import getRelByTarget from "../../utils/link";
import composeEventHandlers from "../../utils/composeEventHandlers";
import { blur } from "../../utils";

const Button = ({ variant, size, children, onClick, ...rest }) => {
  const { href } = rest;

  if (href) {
    const { rel, target } = rest;
    const validatedRel = getRelByTarget(target, rel);

    return (
      <StyledButtonLink
        variant={variant}
        size={size}
        rel={validatedRel}
        {...rest}
      >
        {children}
      </StyledButtonLink>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      {...rest}
      onClick={composeEventHandlers(blur, onClick)}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: "regular",
  variant: "standard",
  onClick: null
};

export default Button;
