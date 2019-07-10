// DIRECTIONS
export const TOP = "top";
export const BOTTOM = "bottom";
export const LEFT = "left";
export const RIGHT = "right";
export const AUTO = "auto";
export const DIRECTIONS: ReadonlyArray<Direction> = [TOP, BOTTOM, LEFT, RIGHT, AUTO];
export type Direction = typeof TOP | typeof BOTTOM | typeof LEFT | typeof RIGHT | typeof AUTO;

// VARIANTS
export const LIGHT = "light";
export const DARK = "dark";
export const VARIANTS: ReadonlyArray<Variant> = [LIGHT, DARK];
export type Variant = typeof LIGHT | typeof DARK;

// BUTTON_VARIANTS
export const STANDARD = "standard";
export const SPECIAL = "special";
export const OUTLINE = "outline";
export const OUTLINE_GRAY = "outlineGray";
export const TRANSPARENT = "transparent";
export const BUTTON_VARIANTS: ReadonlyArray<ButtonVariant> = [
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
export const SIZES: ReadonlyArray<Size> = [SMALL, REGULAR, LARGE];
export const SIZES_SL: ReadonlyArray<Size> = [SMALL, LARGE];
export const SIZES_SR: ReadonlyArray<Size> = [SMALL, REGULAR];
export type Size = typeof SMALL | typeof REGULAR | typeof LARGE;

export const ARROW_WIDTH = 12;

// WEIGHTS
export const EXTRA_BOLD = "extraBold";
export type Weight = typeof EXTRA_BOLD;

// THEME COLORS
export const ONYX = "onyx";
export const BASE = "base";
export type ThemeColor = typeof ONYX | typeof BASE;