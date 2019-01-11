const SEARCH_HEIGHT = {
  small: "36px",
  large: "44px"
};

export const getSearchHeight = variant =>
  SEARCH_HEIGHT[variant] || SEARCH_HEIGHT.large;

export const SearchMinWidth = "320px";

export const SuggestMaxHeight = "700px";
