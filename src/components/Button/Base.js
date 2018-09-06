import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { StyledButton, StyledButtonLink } from "./Base.styles";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "./constants";
import getRelByTarget from "../../utils/link";
import { themes } from "../../theme";

/**
 * Provides a default `global` theme when no theme provider is used higher up
 * the components tree. Or incorrect theme name is used.
 */
const defaultTheme = ({ themeName } = {}) =>
  themes[themeName] ? { themeName } : { themeName: "global" };

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
        {...rest}
      >
        {children}
      </StyledButtonLink>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledButton variant={variant} size={size} {...rest}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: "regular",
  variant: "standard"
};

export default Button;
