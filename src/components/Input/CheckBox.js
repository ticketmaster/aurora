import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import Checkmark from "../Icons/Checkmark";
import { Consumer } from "./Context";
import constants from "../../theme/constants";
import colors from "../../theme/colors";
import composeEventHandlers from "../../utils/composeEventHandlers";

const CheckBoxInput = styled.input.attrs({
  type: "checkbox"
})`
  outline: none;

  margin: 0;
  appearance: none;
  position: relative;
  .checkbox--large & {
    width: 24px;
    height: 24px;
  }
  .checkbox--small & {
    width: 16px;
    height: 16px;
  }

  &:before {
    content: "";
    background-color: transparent;
    border-radius: ${constants.borderRadius.small};
    border: 1px solid ${colors.onyx.light};
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
    border-color: ${colors.azure.base};
  }
  &:focus:before {
    .checkbox--small & {
      width: 16px;
      height: 16px;
      border-radius: ${constants.borderRadius.small};
      border: solid 1px ${colors.azure.base};
      background-color: ${colors.white.base};
    }
    .checkbox--large & {
      width: 24px;
      height: 24px;
      border-radius: ${constants.borderRadius.small};
      border: solid 1px ${colors.azure.base};
      background-color: ${colors.white.base};
    }
  }
  &:checked:after {
    content: "";
    position: absolute;
    .checkbox__multi--large & {
      content: "";
      width: 12px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 3px;
      border-radius: ${constants.borderRadius.small};
      background-color: ${colors.azure.base};
    }
    .checkbox__multi--small & {
      content: "";
      width: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
      border-radius: ${constants.borderRadius.small};
      background-color: ${colors.azure.base};
    }
  }
`;

const CheckBoxWrapper = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: left;
  color: ${colors.onyx.base};
  &.checkbox--disabled {
    color: grey;
    cursor: default;
    pointer-events: none;
  }
  &.checkbox--large {
    font-size: 16px;
    line-height: 1.5;
  }
  &.checkbox--small {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const CheckBoxText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
`;

const CheckDivStyling = styled.div`
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
  .checkbox__multi--small & {
    display: none;
  }

  .checkbox__multi--large & {
    display: none;
  }
`;

const StyledCheckmark = styled(Checkmark)`
  margin-top: 4px;
`;

const CheckBoxButton = ({
  name,
  value,
  size,
  isActive,
  children,
  ...props
}) => (
  <Consumer>
    {({ selected, onClick }) => {
      const isChecked = selected.includes(value);
      return (
        <CheckBoxWrapper
          className={classNames({
            "checkbox--small": size === "small",
            "checkbox--large": size === "large",
            "checkbox--disabled": !isActive,
            "checkbox__multi--large": selected.length > 1 && size === "large",
            "checkbox__multi--small": selected.length > 1 && size === "small",
            checkbox__checked: isChecked
          })}
        >
          <CheckBoxInput
            {...props}
            value={value}
            name={name}
            id={name + value}
            disabled={!isActive}
            size={size}
            defaultChecked={isChecked}
            onClick={composeEventHandlers(
              () => onClick({ value }),
              props.onClick
            )}
          />
          <CheckDivStyling
            className={classNames({
              checkbox__checked: isChecked
            })}
          >
            <StyledCheckmark size={size === "small" ? 16 : 24} />
          </CheckDivStyling>
          <CheckBoxText
            role="checkbox"
            aria-labelledby={name + value}
            aria-checked={isChecked}
          >
            {children}
          </CheckBoxText>
        </CheckBoxWrapper>
      );
    }}
  </Consumer>
);

CheckBoxButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  children: PropTypes.node,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  multiSelect: PropTypes.bool,
  onClick: PropTypes.func
};

CheckBoxButton.defaultProps = {
  size: "small",
  children: null,
  isActive: true,
  multiSelect: false,
  onClick: () => {}
};

export default CheckBoxButton;
