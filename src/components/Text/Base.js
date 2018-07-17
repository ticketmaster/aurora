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
  weight,
  className,
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
      size={size}
      weight={weight}
      variant={variant}
      accent={accent}
      primary={primary}
      secondary={secondary}
      disabled={disabled}
      {...props}
    >
      {children}
    </Text>
  );
};

TextBase.propTypes = {
  tag: PropTypes.oneOf(["div", "span", "p"]),
  variant: PropTypes.oneOf(["accent", "dark", "light"]),
  accent: PropTypes.oneOf([
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
  size: PropTypes.oneOf(["uno", "hecto", "kilo", "giga", "tera"]),
  weight: PropTypes.oneOf(["regular", "semiBold"]),
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

TextBase.defaultProps = {
  tag: "div",
  variant: "dark",
  accent: "",
  size: "hecto",
  weight: "regular",
  className: "",
  primary: false,
  secondary: false,
  disabled: false
};

export default TextBase;
