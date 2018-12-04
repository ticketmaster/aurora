export const MODAL_SIZE_SMALL = "small";
export const MODAL_SIZE_MEDIUM = "medium";
export const MODAL_SIZE_LARGE = "large";
export const MODAL_SIZE_XLARGE = "xLarge";

const MODAL_XSMALL_SIZE = {
  small: 12,
  medium: 12,
  large: 12
};

const MODAL_SMALL_SIZE = {
  small: 8,
  medium: 8,
  large: 10
};

const MODAL_MEDIUM_SIZE = {
  small: 8,
  medium: 8,
  large: 10
};

const MODAL_LARGE_SIZE = {
  small: 4,
  medium: 6,
  large: 10
};

const MODAL_XLARGE_SIZE = {
  small: 4,
  medium: 6,
  large: 10
};

const DEVICE_MODAL_SIZE = {
  isXSmall: MODAL_XSMALL_SIZE,
  isSmall: MODAL_SMALL_SIZE,
  isMedium: MODAL_MEDIUM_SIZE,
  isLarge: MODAL_LARGE_SIZE,
  isXLarge: MODAL_XLARGE_SIZE
};

const SUPPORTED_SIZES = Object.keys(DEVICE_MODAL_SIZE);

export const getDeviceSize = ({ deviceSize }) =>
  SUPPORTED_SIZES.find(size => deviceSize[size]) || SUPPORTED_SIZES[0];

export const getModalSize = ({ deviceSize, preferredSize }) =>
  DEVICE_MODAL_SIZE[getDeviceSize({ deviceSize })][preferredSize];
