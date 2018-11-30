import styled from "styled-components";
import { themes, constants, typography } from "../../../theme";
import getThemeValue from "../../../utils/getThemeValue";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${getThemeValue("primary", "base")};
  color: ${getThemeValue("gray02")};
  background-color: ${getThemeValue("white", "base")};
  outline: none;
  box-sizing: border-box;
  padding: 0;
  font-size: ${typography.size.tera};
  line-height: 0;
  transition: transform 0.1s linear,
    background-color 0.3s ${constants.easing.easeInOutQuad},
    color 0.3s ${constants.easing.easeInOutQuad};

  &:disabled {
    border-color: ${getThemeValue("gray04")};
    color: ${getThemeValue("gray03")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 ${getThemeValue("primary", "base")};
  }

  &:enabled:hover {
    background-color: ${getThemeValue("primary", "light")};
    color: ${getThemeValue("primary", "base")};
    cursor: pointer;
  }

  &:enabled:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
    background-color: ${getThemeValue("primary", "muted")};
  }
`;

export const InputFieldContainer = styled.div`
  overflow-y: hidden;
  display: flex;
  height: 29px;
  flex-direction: column;
  border-bottom: 1px solid ${getThemeValue("gray02")};
  margin: 0px 12px;
  position: relative;
  bottom: 1px;

  &:hover&:not(.InputFieldContainer__disabled) {
    border-color: ${getThemeValue("primary", "base")};
  }

  &.InputFieldContainer__disabled {
    border-bottom: 1px solid ${getThemeValue("gray04")};
  }
`;

export const InputField = styled.input.attrs({
  type: "text"
})`
  top: 0;
  position: relative;
  outline: none;
  width: 31px;
  font-size: ${typography.size.giga};
  height: 28px;
  text-align: center;
  color: #353c42;
  caret-color: #353c42;
  border: none;
  background: transparent;
  transition: top 0.1s ${constants.easing.easeInOutQuad};

  &:disabled {
    border-color: ${themes.global.gray04};
  }
`;
