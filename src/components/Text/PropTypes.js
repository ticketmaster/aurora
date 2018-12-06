import PropTypes from "prop-types";

const ALLOWED_SIZES = ["mini", "uno", "hecto", "kilo", "giga", "tera", "zetta"];

export const variant = PropTypes.oneOf(["accent", "dark", "light"]);

export const accent = PropTypes.oneOf([
  "",
  // traditional
  "aquamarine",
  "azure",
  "alert",
  "caution",
  "cruz",
  "heliotrope",
  "positive",
  "summerSky",
  "turquoise",
  // themed
  "brand",
  "primary",
  "special",
  "accent01",
  "accent02",
  "accent03",
  "accent04",
  "gray01",
  "gray02",
  "gray03",
  "gray04",
  "gray05",
  "error",
  "caution",
  "success",
  "transparent"
]);

export const size = PropTypes.oneOf(ALLOWED_SIZES);

export const responsiveSize = PropTypes.shape({
  xSmall: size,
  small: size,
  medium: size,
  large: size,
  xLarge: size
});

export const defaultResponsiveSize = null;

export const weight = PropTypes.oneOf(["regular", "semiBold"]);
