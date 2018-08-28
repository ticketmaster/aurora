import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import StyledTextBase from "./Base.styles";
import * as PT from "./PropTypes";

const AVAILABLE_TAGS = ["div", "span", "p", "h3", "h4", "h5", "h6"];

const textTags = AVAILABLE_TAGS.reduce((acc, tag) => {
  acc[tag] = StyledTextBase.withComponent(tag);

  return acc;
}, {});

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
  ...props
}) => {
  const Text = textTags[tag];

  const classes = classnames({
    text: true,
    [`text--${variant}`]: !!variant,
    [`text--${accent}`]: variant === "accent",
    "text--primary": !!primary || (!secondary && !disabled && !accent),
    "text--secondary": !!secondary,
    "text--disabled": !!disabled,
    [className]: !!className
  });

  return (
    <Text
      className={classes}
      size={{
        small: responsiveSize.small || size,
        medium: responsiveSize.medium || responsiveSize.small || size,
        large:
          responsiveSize.large ||
          responsiveSize.medium ||
          responsiveSize.small ||
          size
      }}
      weight={weight}
      variant={variant}
      accent={accent}
      primary={primary}
      secondary={secondary}
      disabled={disabled}
      allCaps={allCaps}
      {...props}
    >
      {children}
    </Text>
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
  monospace: PropTypes.bool
};

TextBase.defaultProps = {
  tag: "div",
  variant: "dark",
  accent: "",
  size: "hecto",
  responsiveSize: {
    small: null,
    medium: null,
    large: null
  },
  weight: "regular",
  className: "",
  primary: false,
  secondary: false,
  disabled: false,
  allCaps: false,
  monospace: false
};

TextBase.displayName = "Text";

export default TextBase;
