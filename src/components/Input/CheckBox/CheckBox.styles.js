import styled from "styled-components";
import Checkmark from "../../Icons/Checkmark";
import { constants, typography } from "../../../theme";
import { getThemeValue } from "../../../utils";

export const CheckBoxWrapper = styled.label`
  position: relative;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;

  &.checkbox--disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  &.checkbox--large {
    font-size: ${typography.size.kilo};
    line-height: 1.25;
  }
  &.checkbox--small {
    font-size: ${typography.size.hecto};
    line-height: 1.29;
  }
`;

export const CheckBoxText = styled.span`
  color: ${getThemeValue("gray01")};
  display: flex;
  outline: none;
  align-items: center;
  justify-content: flex-start;
  margin-left: 7px;
  width: 90%;
`;

export const CheckDivStyling = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  position: absolute;
  opacity: 0;
  color: ${getThemeValue("primary", "base")};
  transition: opacity 0.3s ${constants.easing.elastic};

  .checkbox__checked & {
    opacity: 1;
  }
  .checkbox__indeterminate & {
    display: none;
  }
  .checkbox--disabled & {
    color: ${getThemeValue("gray02")};
  }
`;

export const StyledCheckmark = styled(Checkmark)`
  transition: all 0.3s ${constants.easing.elastic};
  margin-top: 3px;
  transform: scale(0.7, 0.7);
  .checkbox__checked & {
    transform: scale(1, 1);
  }
`;
