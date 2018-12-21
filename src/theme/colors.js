import themes from "./colorThemes";

const { tm } = themes;

const colors = {
  // Deprecated colors. Should be removed
  azure: {
    dark: tm.primary.base,
    base: tm.primary.base,
    light: "rgba(2, 108, 223, 0.2)",
    muted: tm.primary.lightBase,
    restrained: "rgba(2, 108, 223, 0.4)",
    hover: tm.primary.medium,
    hoverLight: tm.primary.light,
    pressed: tm.primary.dark,
    pressedLight: tm.primary.muted
  },
  emerald: {
    ...tm.success,
    hover: tm.special.medium,
    pressed: tm.special.dark,
    muted: "rgba(27, 171, 30, 0.4)",
    restrained: "rgba(27, 171, 30, 0.2)"
  },
  outlined: {
    hover: "#ECF4FD",
    pressed: "#D9E8F9"
  },
  transparent: tm.transparent,
  summerSky: "#3AC7FF",
  blackPearl: tm.darkFill,
  slate: tm.gray02,
  moonstone: "#D1D1D1",
  shale: "#E6E6E6",
  quartz: tm.gray05,
  lightGray: "#E0E0E0",
  aquamarine: tm.accent04,
  turquoise: tm.accent03,
  ruby: {
    base: tm.error.base,
    darkRuby: tm.error.dark,
    lightRuby: tm.error.light
  },
  amber: {
    base: tm.caution.base,
    darkAmber: tm.caution.dark,
    lightAmber: tm.caution.light
  },
  moonrock: tm.gray03,
  diatomite: tm.gray04,
  heliotrope: {
    ...tm.accent01,
    muted: "#F3E1FF"
  },
  cruz: {
    ...tm.accent02,
    muted: "#e3cae3"
  },
  alert: {
    base: tm.error.base,
    dark: "#AE393A",
    light: "#EC9C9C",
    muted: "#F5CDCD"
  },
  caution: tm.caution,
  positive: {
    base: tm.success.base,
    dark: "#208E25",
    light: "#8DD58E",
    muted: "#C5E9C6"
  },
  defaultGradient: {
    from: tm.primary.base,
    to: "#3ac7ff"
  },
  // Onyx and white are specific for typography. Should not be removed
  onyx: tm.onyx,
  white: tm.white
};

export default colors;
