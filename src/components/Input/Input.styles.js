/* stylelint-disable no-descending-specificity */
import styled from "styled-components";
import { constants, typography } from "../../theme";
import getThemeValue from "../../utils/getThemeValue";

export const FieldInputWrapper = styled.div`
  display: flex;
  position: relative;
  &.text--input-top {
    flex-direction: column;
    justify-content: left;
  }
  &.text--input-left {
    flex-direction: row;
  }
  &.text--input-disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export const FieldInputText = styled.label`
  font-size: ${typography.size.uno};
  line-height: 1.25;
  text-align: left;
  color: ${getThemeValue("gray01")};
  position: relative;
  .text--input-small & {
    font-size: ${typography.size.mini};
  }
  .text--input-large & {
    font-size: ${typography.size.hecto};
  }
  .text--input-disabled & {
    opacity: 0.4;
  }
  .text--input-top & {
    margin-bottom: 6px;
  }
  .text--input-left & {
    margin-right: 11px;
    margin-top: 10px;
  }
  .text--input-left.text--input-small & {
    margin-top: 5px;
  }
  .text--input-left.text--input-large & {
    margin-top: 14px;
  }
`;

export const ErrorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const FieldInputBox = styled.input.attrs({
  type: "text"
})`
  height: 36px;
  width: 100%;
  border-radius: ${constants.borderRadius.small};
  background-color: ${getThemeValue("white", "base")};
  border: 1px solid ${getThemeValue("gray02")};
  padding-left: 10px;
  line-height: normal;
  font-size: ${typography.size.hecto};
  color: ${getThemeValue("gray01")};
  &.text--input-left {
    flex-grow: 2;
  }
  &::placeholder {
    /* chrome, firefox */
    color: ${getThemeValue("gray01")};
    opacity: 0.4;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${getThemeValue("gray01")};
    opacity: 0.4;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${getThemeValue("gray01")};
    opacity: 0.4;
  }
  &:focus {
    border: 1px solid ${getThemeValue("primary", "base")};
    padding-left: 10px;
    border-radius: ${constants.borderRadius.small};
    box-shadow: 0 0 4px 0 inset ${getThemeValue("primary", "base")};
    background-color: ${getThemeValue("white", "base")};
    outline: none;
    .text--input-small & {
      padding-left: 8px;
    }
    .text--input-large & {
      padding-left: 12px;
    }
  }
  &:hover {
    border: 2px solid ${getThemeValue("primary", "base")};
    .text__error & {
      border: 1px solid ${getThemeValue("error", "base")};
      padding-left: 10px;
    }
    .text__error.text--input-small & {
      padding-left: 8px;
    }
    .text__error.text--input-large & {
      padding-left: 12px;
    }
    padding-left: 9px;
    .text--input-small & {
      padding-left: 7px;
    }
    .text--input-large & {
      padding-left: 11px;
    }
  }
  .text--input-small & {
    height: 24px;
    font-size: ${typography.size.uno};
    padding-left: 8px;
  }
  .text--input-large & {
    height: 44px;
    font-size: ${typography.size.kilo};
    padding-left: 12px;
  }
  .text__error & {
    border: 1px solid ${getThemeValue("error", "base")};
  }
`;

export const FieldErrorText = styled.label`
  opacity: 0;
  font-size: ${typography.size.uno};
  line-height: 1.25;
  text-align: left;
  color: ${getThemeValue("error", "base")};
  position: relative;
  margin-top: 1px;
  transition: opacity 0.3s ${constants.easing.easeInOutQuad};

  .text--input-disabled & {
    opacity: 0.4;
  }
  .text__error & {
    opacity: 1;
  }
`;
