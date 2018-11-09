import styled from "styled-components";

import { searchVariants, getSearchHeight } from "./constants";
import { SearchIcon } from "../Icons";
import { themes, typography, constants } from "../../theme";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${({ variant, isFocused }) => getSearchHeight(variant, isFocused)};
  width: fit-content;
  border: ${({ isFocused }) =>
    isFocused ? `1px solid ${themes.global.gray02}` : "none"};
  border-radius: ${constants.borderRadius.small};
  background-color: ${({ isFocused }) =>
    isFocused ? themes.global.white.base : themes.global.white.muted};

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
  margin: 0 16px;
`;

export const XButton = styled.button`
  background: transparent;
  outline: none;
  border: ${({ isFocused }) =>
    !isFocused
      ? `1px solid ${themes.global.white.base}`
      : `1px solid ${themes.global.gray02}`};
  color: ${({ isFocused }) =>
    !isFocused ? themes.global.white.base : themes.global.gray02};
  padding: 0;
  border-radius: 14px;
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  @media screen and ${constants.breakpoints.mediumAndUp} {
    margin-left: 8px;
  }
`;

export const Cancel = styled.button`
  border: none;
  background: transparent;
  outline: none;
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: ${({ isFocused }) =>
    isFocused ? themes.global.primary.base : themes.global.white.base};
  padding: 0 16px 0 0;
  height: 100%;

  @media screen and ${constants.breakpoints.mediumAndUp} {
    display: none;
  }
`;

export const Clear = styled.div`
  height: 100%;
  width: 44px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: default;
  visibility: ${({ value }) => (value ? "visible" : "hidden")};

  @media screen and ${constants.breakpoints.mediumAndUp} {
    width: 40px;
    justify-content: left;
  }
`;
