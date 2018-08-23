import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import StyledTextBase from "./Base.styles";

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
  const Text =
    tag === "div" ? StyledTextBase : StyledTextBase.withComponent(tag);

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
  tag: PropTypes.oneOf(["div", "span", "p", "h3", "h4", "h5", "h6"]),
  variant: PropTypes.oneOf(["accent", "dark", "light"]),
  accent: PropTypes.oneOf([
    "",
    "aquamarine",
    "azure",
    "alert",
    "caution",
    "cruz",
    "heliotrope",
    "positive",
    "summerSky",
    "turquoise"
  ]),
  size: PropTypes.oneOf(["mini", "uno", "hecto", "kilo", "giga", "tera"]),
  responsiveSize: PropTypes.shape({
    small: PropTypes.oneOf(["mini", "uno", "hecto", "kilo", "giga", "tera"]),
    medium: PropTypes.oneOf(["mini", "uno", "hecto", "kilo", "giga", "tera"]),
    large: PropTypes.oneOf(["mini", "uno", "hecto", "kilo", "giga", "tera"])
  }),
  weight: PropTypes.oneOf(["regular", "semiBold"]),
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
