import styled from "styled-components";
import { themes, constants, typography } from "../../../theme";
import getThemeValue from "../../../utils/getThemeValue";
import { Button as AuroraButton } from "../../Button";

export const INPUT_HEIGHT = 34;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(AuroraButton)`
  min-width: 36px;
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
    border: 1px solid ${getThemeValue("gray04")};
    color: ${getThemeValue("gray03")};
    background: transparent;
    opacity: 1;
    cursor: default;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 ${getThemeValue("primary", "base")};
  }

  &:enabled:hover {
    background-color: ${getThemeValue("primary", "lightest")};
    color: ${getThemeValue("primary", "base")};
    cursor: pointer;
  }

  &:enabled:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
    background-color: ${getThemeValue("primary", "light")};
  }
`;

export const InputFieldContainer = styled.div`
  box-sizing: border-box;
  overflow-y: hidden;
  display: flex;
  height: 36px;
  flex-direction: column;
  border: 1px solid ${getThemeValue("gray02")};
  border-radius: ${constants.borderRadius.small};
  margin: 0px 12px;

  &:hover&:not(.InputFieldContainer__disabled) {
    border-color: ${getThemeValue("primary", "base")};
  }

  &.InputFieldContainer__disabled {
    border: 1px solid ${getThemeValue("gray04")};
  }
`;

export const InputField = styled.input.attrs({
  type: "text"
})`
  top: 0;
  position: relative;
  line-height: ${INPUT_HEIGHT}px;
  padding: 0;
  outline: none;
  width: 30px;
  font-size: ${typography.size.giga};
  text-align: center;
  color: #353c42;
  caret-color: #353c42;
  border: none;
  background: transparent;
  transition: top 0.1s ${constants.easing.easeInOutQuad};

  &:disabled {
    border-color: ${themes.global.gray04};
    color: ${themes.global.onyx.muted};
  }
`;
