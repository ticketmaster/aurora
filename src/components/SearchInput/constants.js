export const searchVariants = {
  small: "small",
  large: "large"
};

const searchHeight = {
  small: "36px",
  large: "44px"
};

export const getSearchHeight = variant =>
  searchHeight[variant] || searchHeight.large;

export const SearchMinWidth = "320px";

export const SuggestMaxHeight = "700px";
