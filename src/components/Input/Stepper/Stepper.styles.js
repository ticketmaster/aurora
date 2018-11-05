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
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  font-size: ${typography.size.tera};
  line-height: 0;
  transition: transform 0.1s linear,
    background-color 0.3s ${constants.easing.easeInOutQuad},
    color 0.3s ${constants.easing.easeInOutQuad};

  &:hover {
    background-color: ${getThemeValue("primary", "light")};
    color: ${getThemeValue("primary", "base")};
  }

  &:disabled {
    border-color: ${getThemeValue("gray04")};
    background-color: ${getThemeValue("white", "base")};
    color: ${getThemeValue("gray02")};
  }

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
    background-color: ${getThemeValue("primary", "muted")};
    &:disabled {
      transform: none;
    }
  }
`;

export const InputFieldContainer = styled.div`
  overflow-y: hidden;
  display: flex;
  height: 28px;
  flex-direction: column;
  border-bottom: 1px solid ${getThemeValue("gray02")};

  &:hover&:not(.disabled) {
    border-color: ${getThemeValue("primary", "base")};
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
  line-height: 1.25;
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
