import { colors, themes } from "../theme";

export const getFontHue = ({
  fontColor,
  primary,
  secondary,
  disabled,
  variant
}) => {
  if (typeof fontColor !== "object") return fontColor;

  const fontHues = {
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
    dark: colors.onyx,
    light: colors.white,
    accent: colors[accent]
  };

  const fontColor = fontColors[variant] || fontColors.dark;
  return getFontHue({ fontColor, primary, secondary, disabled, variant });
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
