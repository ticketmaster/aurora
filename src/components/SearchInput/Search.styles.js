import styled from "styled-components";

import { getSearchHeight, SearchMinWidth, SuggestMaxHeight } from "./constants";
import { SearchIcon } from "../Icons";
import { themes, typography, constants, spacing, zIndex } from "../../theme";
import { cardBoxShadow } from "../../theme/constants";
import { mediumAndUp } from "../../theme/mediaQueries";
import { SMALL } from "../constants";

export const SearchContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: ${({ variant }) => getSearchHeight(variant)};
  max-width: 100%;
  min-width: ${SearchMinWidth};
  border: ${({ isFocused }) =>
    isFocused ? `1px solid ${themes.global.gray02}` : "none"};
  border-radius: ${constants.borderRadius.small};
  background-color: ${({ isFocused }) =>
    isFocused ? themes.global.white.base : themes.global.white.muted};

  ${({ isSuggestOpened }) =>
    isSuggestOpened
      ? "border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
      : ""};

  visibility: visible;
  > * {
    visibility: visible;
  }

  &.search--container-icon-only {
    visibility: hidden;
    > * {
      visibility: hidden;
    }

    &.search--container-focused,
    &.search--container-has-value {
      visibility: visible;
      > * {
        visibility: visible;
      }
    }
  }
`;

export const StyledSearchIcon = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ isFocused }) =>
    !isFocused ? themes.global.white.base : themes.global.gray02};
  padding: 0;
  border: none;
  background: transparent;
  outline: none;

  .search--container & {
    visibility: visible;
  }
`;

export const OpenSearch = styled(StyledSearchIcon)`
  position: absolute;
  left: 0;
  width: 56px;
`;

export const SearchIconContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input.attrs({
  type: "search",
  autoComplete: "off"
})`
  font-size: ${({ variant }) =>
    variant === SMALL ? typography.size.hecto : typography.size.kilo};
  height: 100%;
  color: ${({ isFocused }) =>
    !isFocused ? themes.global.white.base : themes.global.gray01};
  padding: 0;
  border: none;
  background: none;
  flex-grow: 1;

  &::placeholder {
    /* chrome, firefox */
    color: ${({ isFocused }) =>
      !isFocused ? themes.global.white.base : themes.global.onyx.muted};
  }

  &::-ms-clear {
    display: none;
  }

  :focus {
    outline: none;
  }
`;

export const Icon = styled(SearchIcon)`
  margin: 0 ${spacing.moderate};
`;

export const Cancel = styled.button`
  border: none;
  background: transparent;
  outline: none;
  display: ${({ showElement }) => (showElement ? "flex" : "none")};
  align-items: center;
  margin-left: ${spacing.cozy};
  color: ${({ isFocused }) =>
    isFocused ? themes.global.primary.base : themes.global.white.base};
  padding: 0 ${spacing.moderate} 0 0;
  height: 100%;

  ${mediumAndUp`
    display: none;
  `};
`;

export const Clear = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  height: 100%;
  width: 44px;
  margin-left: ${spacing.cozy};
  display: ${({ value }) => (value ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ isFocused }) =>
    !isFocused ? themes.global.white.base : themes.global.gray02};

  svg {
    margin-left: ${({ variant }) => (variant === SMALL ? spacing.cozy : 0)};
  }

  ${mediumAndUp`
    width: 40px;
    justify-content: left;
  `};
`;

export const SearchSuggest = styled.div`
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  padding: ${spacing.moderate};
  background-color: ${themes.global.white.base};
  box-shadow: ${cardBoxShadow};
  overflow-y: auto;
  box-sizing: border-box;

  ${mediumAndUp`
    max-height: ${SuggestMaxHeight};
    border: 1px solid ${themes.global.gray02};
    border-top: none;
    border-bottom-left-radius: ${constants.borderRadius.small};
    border-bottom-right-radius: ${constants.borderRadius.small};
  `};
`;

export const MobileActiveSearch = styled.div`
  position: fixed;
  z-index: ${zIndex.searchsuggest.base};
  top: 0;
  width: 100%;
  left: 0;

  .search--container {
    padding-left: ${spacing.moderate};
    border-radius: 0;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
  }

  .search--search-icon {
    display: none;
  }
`;

SearchSuggest.displayName = "SearchSuggest";
