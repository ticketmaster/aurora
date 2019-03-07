import styled from "styled-components";
import { DownIcon } from "../../Icons";
import KeyBoardProvider from "../../KeyboardNavigation/Provider";
import { constants, zIndex, typography } from "../../../theme";
import getThemeValue from "../../../utils/getThemeValue";

const { small } = constants.borderRadius;
const DROP_DOWN_SHADOW = "0 2px 4px 0 rgba(0, 0, 0, 0.12)";

export const StyledGroup = styled.label`
  width: 100%;
  height: 44px;
  background-color: ${getThemeValue("white", "base")};
  border-radius: ${small};
  position: relative;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border-color 0.3s ${constants.easing.easeInOutQuad},
    z-index 0s ease 0.3s;

  z-index: ${zIndex.default};

  &.dropdown--small {
    height: 36px;
  }

  &.dropdown--border {
    border: solid 1px ${getThemeValue("gray02")};
    text-align: left;
  }

  &.dropdown--no-border {
    border: solid 2px ${getThemeValue("white", "base")};
    text-align: right;
    justify-content: flex-end;
  }

  &.dropdown--active {
    margin: 0;
    border: solid 1px ${getThemeValue("gray02")};
    border-radius: ${small} ${small} 0 0;
    /* for the purpose of the correct box-shadow */
    z-index: ${zIndex.layout.overlay + 1};
    transition: border-color 0.3s ${constants.easing.easeInOutQuad},
      z-index 0s ease;
  }

  .dropdown--disabled & {
    cursor: default;
    color: ${getThemeValue("onyx", "muted")};
    transition: none;
  }

  .dropdown--open-upward & {
    border-radius: 0 0 ${small} ${small};
    box-shadow: ${DROP_DOWN_SHADOW};
  }

  &:hover:not(.dropdown__label--disabled) {
    border: solid 2px ${getThemeValue("primary", "base")};
  }
`;

export const StyledChildWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: ${getThemeValue("white", "base")};
  border-radius: 0 0 ${small} ${small};
  white-space: nowrap;
  margin-top: -1px;
  box-shadow: ${DROP_DOWN_SHADOW};
  min-width: 100%;
  box-sizing: border-box;

  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow: hidden;
  z-index: ${zIndex.layout.overlay};
  border-color: ${getThemeValue("gray02")};
  border-style: solid;
  border-width: 0;
  max-height: 0;

  transition: max-height 0.3s ${constants.easing.easeInOutQuad},
    border-width 0s ease 0.3s, padding-top 0s ease 0.3s,
    padding-bottom 0s ease 0.3s;

  &.dropdown--clicked {
    padding-top: 4px;
    padding-bottom: 8px;
    border-width: 1px;
    max-height: 606px;

    transition: max-height 0.3s ${constants.easing.easeInOutQuad},
      border-width 0s, padding-top 0s, padding-bottom 0s;
  }

  &.dropdown--overflow {
    overflow-y: auto;
  }

  .dropdown--open-upward & {
    bottom: 43px;
    border-radius: ${small} ${small} 0 0;
    box-shadow: ${DROP_DOWN_SHADOW};

    &.dropdown__items--small {
      bottom: 35px;
    }
  }
`;

export const HiddenLabel = styled.span`
  display: none;
`;

export const StyledGroupWrapper = styled.div`
  position: relative;
  color: ${getThemeValue("gray01")};
  width: 100%;
  outline: none;
  border-radius: ${small};

  &:focus {
    box-shadow: 0 0 5px 0 ${getThemeValue("primary", "base")};
  }
`;

export const StyledChevron = styled(DownIcon).attrs({
  size: "small"
})`
  margin-right: 12px;
  color: ${getThemeValue("gray02")};
  transition: opacity 0.1s ${constants.easing.easeInOutQuad};

  .dropdown--border:hover & {
    &:not(.dropdown__chevron--disabled) {
      margin-right: 11px;
    }
  }

  &.dropdown__icon--hide {
    opacity: 0;
  }
`;

export const StyledSelectedText = styled.div`
  font-size: ${typography.size.kilo};
  white-space: nowrap;
  width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;

  .dropdown--small & {
    font-size: ${typography.size.hecto};
  }

  .dropdown--border & {
    margin-left: 16px;
  }

  .dropdown--no-border & {
    margin-right: 10px;
  }

  .dropdown--active.dropdown--no-border & {
    margin-right: 11px;
  }

  .dropdown--border:hover & {
    &:not(.dropdown__text--disabled) {
      margin-left: 15px;
    }
  }

  .dropdown--active.dropdown--no-border:hover & {
    &:not(.dropdown__text--disabled) {
      margin-right: 10px;
    }
  }
`;

export const StyledKeyboardProvider = styled(KeyBoardProvider)`
  min-height: min-content;
  flex-direction: column;
  display: flex;
  opacity: 0;
  transition: opacity 0.3s ${constants.easing.easeInOutQuad};

  .dropdown--clicked & {
    transition-delay: 0.1s;
    opacity: 1;
  }
`;
