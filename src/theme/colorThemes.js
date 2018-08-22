import colors from "./colors";

const themes = {
  b2c: {
    buttons: {
      standard: {
        color: colors.white.base,
        disabledColor: colors.white.base,
        default: colors.azure.base,
        hover: colors.azure.hover,
        pressed: colors.azure.pressed,
        disabled: colors.azure.light
      },
      special: {
        color: colors.white.base,
        disabledColor: colors.white.base,
        default: colors.emerald.base,
        hover: colors.emerald.hover,
        pressed: colors.emerald.pressed,
        disabled: colors.emerald.muted
      },
      outline: {
        color: colors.azure.base,
        disabledColor: colors.azure.restrained,
        default: colors.white.base,
        hover: colors.azure.hoverLight,
        pressed: colors.azure.pressedLight,
        disabled: colors.transparent
      },
      transparent: {
        color: colors.azure.base,
        disabledColor: colors.azure.restrained,
        hover: colors.azure.muted,
        pressed: colors.azure.light
      }
    }
  }
};

export default themes;
