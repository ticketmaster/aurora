/* stylelint-disable no-descending-specificity */
import styled from "styled-components";
import { constants, themes } from "../../theme";

const errorColor = ({ theme: { themeName } }) => themes[themeName].error.base;
const white = ({ theme: { themeName } }) => themes[themeName].white.base;
const primaryColor = ({ theme: { themeName } }) =>
  themes[themeName].primary.base;
const gray01 = ({ theme: { themeName } }) => themes[themeName].gray01;
const gray02 = ({ theme: { themeName } }) => themes[themeName].gray02;

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
  font-size: 12px;
  height: 13px;
  line-height: 1.25;
  text-align: left;
  color: ${gray01};
  position: relative;
  .text--input-small & {
    font-size: 10px;
    line-height: 1.3;
  }
  .text--input-large & {
    font-size: 14px;
    line-height: 1.29;
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
  background-color: ${white};
  border: solid 1px ${gray02};
  padding-left: 10px;
  line-height: 2.57;
  font-size: 14px;
  color: ${gray01};
  &.text--input-left {
    flex-grow: 2;
  }
  &::placeholder {
    /* chrome, firefox */
    color: ${gray01};
    opacity: 0.4;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${gray01};
    opacity: 0.4;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${gray01};
    opacity: 0.4;
  }
  &:focus {
    border: 1px ${primaryColor} solid;
    padding-left: 10px;
    border-radius: ${constants.borderRadius.small};
    box-shadow: inset 0 0 4px 0 ${primaryColor};
    background-color: ${white};
    outline: none;
    .text--input-small & {
      padding-left: 8px;
    }
    .text--input-large & {
      padding-left: 12px;
    }
  }
  &:hover {
    border: 2px ${primaryColor} solid;
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
    font-size: 12px;
    padding-left: 8px;
  }
  .text--input-large & {
    height: 44px;
    font-size: 16px;
    padding-left: 12px;
  }
  .text__error & {
    border-color: ${errorColor};
  }
`;

export const FieldErrorText = styled.label`
  opacity: 0;
  font-size: 12px;
  height: 13px;
  line-height: 1.25;
  text-align: left;
  color: ${errorColor};
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
