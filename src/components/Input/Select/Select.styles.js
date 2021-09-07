import styled from "styled-components";
import { constants, typography } from "../../../theme";
import getThemeValue from "../../../utils/getThemeValue";

const { small } = constants.borderRadius;

const StyledSelect = styled.select`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  color: ${getThemeValue("gray01")};
  background-color: ${getThemeValue("white", "base")};
  border-radius: ${small};
  height: 44px;
  padding: 0 44px 0 14px;
  font-size: ${typography.size.kilo};
  transition: border-color 0.3s ${constants.easing.easeInOutQuad},
    z-index 0s ease 0.3s;
  appearance: none;
  /* stylelint-disable */
  -webkit-appearance: none;
  -moz-appearance: none;
  /* stylelint-enable */
  background-image: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M16 0H0v16h16z" /><path fill="%23262626" fill-opacity=".65" fill-rule="nonzero" d="M3.278 5.459A.75.75 0 0 0 2.221 6.52l5.263 5.24a.75.75 0 0 0 1.059 0L13.78 6.52a.75.75 0 0 0-1.06-1.06l-4.71 4.711L3.278 5.46z"/></g></svg>');
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: calc(100% - 15px);

  &.select--small {
    height: 36px;
    padding: 0 42px 0 13px;
    font-size: ${typography.size.hecto};
  }

  &.select--disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 5px 0 ${getThemeValue("primary", "base")};
  }

  &.select--border {
    border: solid 1px ${getThemeValue("gray02")};
    padding: 1px 45px 1px 15px;

    &.select--small {
      padding: 1px 42px 1px 13px;
    }

    &.select--disabled {
      opacity: 0.4;
    }
  }

  &.select--no-border {
    border: solid 2px ${getThemeValue("white", "base")};
    background-position-x: calc(100% - 14px);
  }

  &.select--chevron--disabled {
    background-image: none;
    padding: 0 15px 0 15px;

    &.select--small {
      padding: 0 12px 0 13px;
    }

    &.select--no-border {
      padding: 0 14px 0 14px;

      &.select--small {
        padding: 0 13px 0 12px;
      }
    }
  }

  &.select--full--width {
    width: 100%;
  }

  &.hybrid {
    opacity: 0;

    &:focus {
      opacity: 1;
    }
  }

  &:hover:not(.select--disabled) {
    border: solid 2px ${getThemeValue("primary", "base")};
    background-position-x: calc(100% - 14px);
    padding: 0 44px 0 14px;

    &.select--small {
      background-position-x: calc(100% - 12px);
      padding: 0 39px 0 12px;
    }

    &.select--no-border {
      &.select--small {
        background-position-x: calc(100% - 14px);
        padding: 0 42px 0 13px;
      }
    }

    &.select--chevron--disabled {
      padding: 0 14px 0 14px;

      &.select--small {
        padding: 0 11px 0 12px;
      }

      &.select--no-border {
        &.select--small {
          padding: 0 13px 0 12px;
        }
      }
    }

    &.select--full--width {
      background-position-x: calc(100% - 14px);
    }
  }
`;

export default StyledSelect;
