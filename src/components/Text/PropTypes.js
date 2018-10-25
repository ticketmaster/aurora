import PropTypes from "prop-types";

const ALLOWED_SIZES = ["mini", "uno", "hecto", "kilo", "giga", "tera", "zetta"];

export const variant = PropTypes.oneOf(["accent", "dark", "light"]);

export const accent = PropTypes.oneOf([
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
]);

export const size = PropTypes.oneOf(ALLOWED_SIZES);

export const responsiveSize = PropTypes.shape({
  small: size,
  medium: size,
  large: size
});

export const weight = PropTypes.oneOf(["regular", "semiBold"]);

export const LINK_SIZES = {
  small: "small",
  large: "large"
};
