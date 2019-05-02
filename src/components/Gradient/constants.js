import { themes, colors } from "../../theme";

export const DEFAULT_DEG = {
  small: "76deg",
  medium: "80deg",
  large: "81deg"
};

export const DEFAULT_STOPS = [
  themes.global.primary.base,
  colors.defaultGradient.to
];

export const OVERLAY_DEG_NOT_SPOTLIGHT = {
  small: "77deg",
  medium: "82deg",
  large: "86deg"
};

export const OVERLAY_STOPS_NOT_SPOTLIGHT = ["rgba(0, 0, 0, 0)", "#000000"];

export const SPOTLIGHT_DEG = {
  small: "256deg",
  medium: "260deg",
  large: "262deg"
};

export const SPOTLIGHT_STOPS = [
  "rgb(0, 45, 161)",
  `${themes.global.primary.base} 55%`,
  "rgb(0, 45, 161)"
];

export const OVERLAY_SHADOW_DEG = {
  small: "185deg",
  medium: "185deg",
  large: "185deg"
};
export const OVERLAY_SHADOW_STOPS = [
  "rgba(1, 2, 2, 0) 17%",
  "rgba(0, 0, 90, 0) 55%",
  "rgba(00, 0, 0, 1)"
];

export const OVERLAY_SHADOW_TOP_DEG = "to bottom";
export const OVERLAY_SHADOW_TOP_HEIGHT = "26%";
export const OVERLAY_SHADOW_TOP_STOPS = [
  "rgba(0, 0, 0, 0.6)",
  "rgba(0, 0, 0, 0)"
];
