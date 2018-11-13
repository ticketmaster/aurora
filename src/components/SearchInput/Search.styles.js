import styled from "styled-components";

import {
  searchVariants,
  getSearchHeight,
  SearchMinWidth,
  SuggestMaxHeight
} from "./constants";
import { SearchIcon } from "../Icons";
import { themes, typography, constants, spacing } from "../../theme";
import { cardBoxShadow } from "../../theme/constants";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${({ variant, isFocused }) => getSearchHeight(variant, isFocused)};
  max-width: 100%;
  min-width: ${({ isFocused }) =>
    isFocused ? `calc(${SearchMinWidth} - 2px)` : SearchMinWidth};
  border: ${({ isFocused }) =>
    isFocused ? `1px solid ${themes.global.gray02}` : "none"};
  border-radius: ${constants.borderRadius.small};
  background-color: ${({ isFocused }) =>
    isFocused ? themes.global.white.base : themes.global.white.muted};

  ${({ isSuggestOpened }) =>
    isSuggestOpened
      ? "border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
      : ""};

  &.hidden {
    visibility: hidden;
    > * {
      visibility: hidden;
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

  .hidden & {
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
  type: "text",
  autoComplete: "off"
})`
  font-size: ${({ variant }) =>
    variant === searchVariants.small
      ? typography.size.hecto
      : typography.size.kilo};
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
  display: flex;
  align-items: center;
  margin-left: ${spacing.cozy};
  color: ${({ isFocused }) =>
    isFocused ? themes.global.primary.base : themes.global.white.base};
  padding: 0 ${spacing.moderate} 0 0;
  height: 100%;

  @media screen and ${constants.breakpoints.mediumAndUp} {
    display: none;
  }
`;

export const Clear = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  height: 100%;
  width: 44px;
  margin-left: ${spacing.cozy};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  visibility: ${({ value }) => (value ? "visible" : "hidden")};
  color: ${({ isFocused }) =>
    !isFocused ? themes.global.white.base : themes.global.gray02};

  @media screen and ${constants.breakpoints.mediumAndUp} {
    width: 40px;
    justify-content: left;
  }
`;

export const SearchSuggest = styled.div`
  max-width: 100%;
  max-height: ${SuggestMaxHeight};
  border: 1px solid ${themes.global.gray02};
  border-top: none;
  border-bottom-left-radius: ${constants.borderRadius.small};
  border-bottom-right-radius: ${constants.borderRadius.small};
  padding: ${spacing.moderate};
  background-color: ${themes.global.white.base};
  box-shadow: ${cardBoxShadow};

  @media screen and ${constants.breakpoints.mediumAndUp} {
    height: 100%;
    max-height: 100%;
  }
`;

SearchSuggest.displayName = "SearchSuggest";
