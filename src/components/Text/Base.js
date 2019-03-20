import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import StyledTextBase from "./Base.styles";
import * as PT from "./PropTypes";
import { themeShape } from "../../utils/getThemeValue";
import { getResponsiveSize } from "../../utils/responsiveSize";
import { THEME_TM } from "../../theme/constants";

const AVAILABLE_TAGS = ["div", "span", "p", "h3", "h4", "h5", "h6"];

const TextBase = ({
  tag,
  variant,
  accent,
  primary,
  secondary,
  disabled,
  size,
  responsiveSize,
  weight,
  className,
  allCaps,
  children,
  theme,
  themed,
  ...props
}) => {
  const isThemed = themed && theme && theme.themeName;
  const classes = classnames({
    text: true,
    [`text--${variant}`]: !!variant,
    [`text--${accent}`]: variant === "accent",
    [`text-${isThemed}`]: isThemed,
    "text--primary": !!primary || (!secondary && !disabled && !accent),
    "text--secondary": !!secondary,
    "text--disabled": !!disabled,
    [className]: !!className
  });

  return (
    <StyledTextBase
      className={classes}
      size={getResponsiveSize({ size, responsiveSize })}
      weight={weight}
      variant={variant}
      accent={accent}
      primary={primary}
      secondary={secondary}
      disabled={disabled}
      allCaps={allCaps}
      as={tag}
      themed={themed}
      {...props}
    >
      {children}
    </StyledTextBase>
  );
};

TextBase.propTypes = {
  tag: PropTypes.oneOf(AVAILABLE_TAGS),
  variant: PT.variant,
  accent: PT.accent,
  size: PT.size,
  responsiveSize: PT.responsiveSize,
  weight: PT.weight,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  allCaps: PropTypes.bool,
  monospace: PropTypes.bool,
  theme: PropTypes.shape(themeShape),
  themed: PropTypes.bool
};

TextBase.defaultProps = {
  tag: "div",
  variant: "dark",
  accent: "",
  size: "hecto",
  responsiveSize: PT.defaultResponsiveSize,
  weight: "regular",
  className: "",
  primary: false,
  secondary: false,
  disabled: false,
  allCaps: false,
  monospace: false,
  theme: THEME_TM,
  themed: false
};

TextBase.displayName = "Text";

export default TextBase;
