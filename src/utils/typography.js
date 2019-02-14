import getThemeValue from "./getThemeValue";
import { colors, themes } from "../theme";

export const getFontHue = ({
  fontColor,
  primary,
  secondary,
  disabled,
  variant,
  themed
}) => {
  if (typeof fontColor === "string") return themed ? "" : fontColor;

  const fontHues = themed
    ? {
        primary: variant === "accent" ? "dark" : "base",
        secondary: variant === "accent" ? "base" : "light",
        disabled: variant === "accent" ? "light" : "muted"
      }
    : {
        primary: variant === "accent" ? fontColor.dark : fontColor.base,
        secondary: fontColor.light,
        disabled: fontColor.muted
      };

  switch (true) {
    case primary:
      return fontHues.primary;
    case secondary:
      return fontHues.secondary;
    case disabled:
      return fontHues.disabled;
    default:
      return fontHues.primary;
  }
};

export const getFontColor = ({
  variant,
  accent,
  primary,
  secondary,
  disabled
}) => {
  const fontColors = {
    dark: themes.global.onyx,
    light: themes.global.white,
    accent: colors[accent]
  };
  const fontColor = fontColors[variant] || fontColors.dark;

  return getFontHue({
    fontColor,
    primary,
    secondary,
    disabled,
    variant,
    themed: false
  });
};

export const getThemedFontColor = ({
  theme,
  variant,
  accent,
  primary,
  secondary,
  disabled
}) => {
  if (!theme.themeName) {
    return getFontColor({
      variant,
      accent,
      primary,
      secondary,
      disabled
    });
  }

  const fontColors = {
    dark: "onyx",
    light: "white",
    accent
  };

  const fontColor = getThemeValue(fontColors[variant] || "onyx")({ theme });
  const fontHue = getFontHue({
    fontColor,
    primary,
    secondary,
    disabled,
    variant,
    themed: true
  });

  return fontColor[fontHue] || fontColor;
};

const labelsColorMap = {
  alert: themes.global.error.base,
  positive: themes.global.success.base,
  positiveDark: themes.global.success.dark,
  accent: themes.global.accent01.dark,
  caution: themes.global.caution.dark,
  neutral: themes.global.onyx.light
};
export const getLabelTextColor = ({ variant }) =>
  labelsColorMap[variant] || "inherit";
