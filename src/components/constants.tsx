// DIRECTIONS
export const TOP = "top";
export const BOTTOM = "bottom";
export const LEFT = "left";
export const RIGHT = "right";
export const AUTO = "auto";
export const DIRECTIONS = [TOP, BOTTOM, LEFT, RIGHT, AUTO];

// VARIANTS
export const LIGHT = "light";
export const DARK = "dark";
export const VARIANTS = [LIGHT, DARK];

// BUTTON_VARIANTS
export const STANDARD = "standard";
export const SPECIAL = "special";
export const OUTLINE = "outline";
export const OUTLINE_GRAY = "outlineGray";
export const TRANSPARENT = "transparent";
export const BUTTON_VARIANTS: readonly ButtonVariant[] = [
  STANDARD,
  SPECIAL,
  OUTLINE,
  OUTLINE_GRAY,
  TRANSPARENT
];
export type ButtonVariant = typeof STANDARD | typeof SPECIAL | typeof OUTLINE | typeof OUTLINE_GRAY | typeof TRANSPARENT;

// SIZES
export const SMALL = "small";
export const REGULAR = "regular";
export const LARGE = "large";
export const SIZES: readonly Size[] = [SMALL, REGULAR, LARGE];
export const SIZES_SL: readonly Size[] = [SMALL, LARGE];
export const SIZES_SR: readonly Size[] = [SMALL, REGULAR];
export type Size = typeof SMALL | typeof REGULAR | typeof LARGE;

export const ARROW_WIDTH = 12;

// WEIGHTS
export const EXTRA_BOLD = "extraBold";

// THEME COLORS
export const ONYX = "onyx";
export const BASE = "base";
