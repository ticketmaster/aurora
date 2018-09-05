import styled from "styled-components";
import Checkmark from "../../Icons/Checkmark";
import { constants, themes } from "../../../theme";

export const CheckBoxWrapper = styled.label`
  position: relative;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 1.5;
  color: ${({ theme: { themeName } }) => themes[themeName].gray01};

  &.checkbox--disabled {
    cursor: default;
    pointer-events: none;
  }

  &.checkbox--large {
    font-size: 16px;
  }

  &.checkbox--small {
    font-size: 14px;
  }
`;

export const CheckBoxText = styled.span`
  width: 90%;
  display: flex;
  outline: none;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
  .checkbox--disabled & {
    color: ${({ theme: { themeName } }) => themes[themeName].gray01};
    opacity: 0.5;
  }
`;

export const CheckDivStyling = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  position: absolute;
  opacity: 0;

  .checkbox__checked & {
    opacity: 1;
  }
  .checkbox__checked.checkbox__indeterminate & {
    opacity: 0;
  }
`;

export const StyledCheckmark = styled(Checkmark)`
  margin-top: 4px;
`;

export const CheckBoxInput = styled.input.attrs({
  type: "checkbox"
})`
  outline: none;
  margin: 0;
  appearance: none;
  position: relative;
  background-color: ${({ theme: { themeName } }) =>
    themes[themeName].white.base};
  border-color: ${({ theme: { themeName } }) => themes[themeName].gray02};

  .checkbox--large & {
    width: 24px;
    height: 24px;
  }

  .checkbox--small & {
    width: 16px;
    height: 16px;
  }

  &:disabled {
    border-color: ${({ theme: { themeName } }) => themes[themeName].gray01};
    opacity: 0.5;
  }

  &:before {
    content: "";
    background-color: transparent;
    border-radius: ${constants.borderRadius.small};
    border: 1px solid ${({ theme: { themeName } }) => themes[themeName].gray01};
    opacity: 0.7;
    position: absolute;

    .checkbox--large & {
      width: 24px;
      height: 24px;
    }
    .checkbox--small & {
      width: 16px;
      height: 16px;
    }
    &.checkbox--disabled {
      color: grey;
    }
  }

  &:hover:before {
    border-width: 2px;
    border-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};
  }

  &:focus:before {
    outline: none;
    box-shadow: ${({ theme: { themeName } }) =>
      `0 0 5px 0 ${themes[themeName].primary.base}`};

    .checkbox--small & {
      width: 16px;
      height: 16px;
    }
    .checkbox--large & {
      width: 24px;
      height: 24px;
    }
  }

  &:checked:after {
    content: "";
    position: absolute;
    .checkbox--small.checkbox__indeterminate & {
      width: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
      border-radius: ${constants.borderRadius.small};
      background-color: ${({ theme: { themeName } }) =>
        themes[themeName].primary.base};
    }
    .checkbox--large.checkbox__indeterminate & {
      content: "";
      width: 12px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 3px;
      border-radius: ${constants.borderRadius.small};
      background-color: ${({ theme: { themeName } }) =>
        themes[themeName].primary.base};
    }
  }
`;
