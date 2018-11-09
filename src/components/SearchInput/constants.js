export const searchVariants = {
  small: "small",
  large: "large"
};

const searchHeight = {
  small: 36,
  large: 44
};

export const getSearchHeight = (variant, isFocused) => {
  const heightOption = variant === searchVariants.small ? "small" : "large";

  if (isFocused) {
    // We remove 2 px from the height because when search is focused we add 1px border on top and bottom
    return `${searchHeight[heightOption] - 2}px`;
  }

  return `${searchHeight[heightOption]}px`;
};
