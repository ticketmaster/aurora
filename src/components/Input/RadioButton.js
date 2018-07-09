import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Consumer } from "./Context";
import colors from "../../theme/colors";
import composeEventHandlers from "../../utils/composeEventHandlers";

const RadioInput = styled.input.attrs({
  type: "radio"
})`
  margin: 0;
  appearance: none;
  position: relative;
  outline: none;
  .radio-button--large & {
    width: 24px;
    height: 24px;
  }
  .radio-button--small & {
    width: 16px;
    height: 16px;
  }
  &:before {
    content: "";
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${colors.onyx.light};

    .radio-button--large & {
      width: 24px;
      height: 24px;
    }
    .radio-button--small & {
      width: 16px;
      height: 16px;
    }
    &.radio-button--disabled {
      color: grey;
    }
  }
  &:after {
    content: "";
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${colors.azure.base};

    .radio-button--large & {
      width: 12px;
      height: 12px;
    }
    .radio-button--small & {
      width: 8px;
      height: 8px;
    }
  }
  &:hover:before {
    border-width: 2px;
    border-color: ${colors.azure.base};
  }
  &:focus:before {
    border-width: 2px;
    border-color: ${colors.azure.base};
  }
  &:checked:after {
    opacity: 1;
    position: absolute;
  }
`;

const RadioWrapper = styled.label`
  position: relative;
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  text-align: left;
  color: ${colors.onyx.base};
  &.radio-button--disabled {
    color: grey;
    cursor: default;
    pointer-events: none;
  }
  &.radio-button--large {
    font-size: 16px;
    line-height: 1.5;
  }
  &.radio-button--small {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const RadioText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
`;

const RadioButton = ({
  name,
  value,
  size,
  isActive,
  children,
  onChange,
  ...props
}) => (
  <Consumer>
    {({ selected, onClick }) => {
      const isChecked = selected.includes(value);
      return (
        <RadioWrapper
          className={classNames({
            "radio-button--small": size === "small",
            "radio-button--large": size === "large",
            "radio-button--disabled": !isActive
          })}
          id={`${name + value}label`}
        >
          <RadioInput
            {...props}
            value={value}
            name={name}
            id={`${name + value}input`}
            checked={isChecked}
            disabled={!isActive}
            onChange={composeEventHandlers(
              () => onClick({ value }),
              props.onChange
            )}
            aria-labelledby={`${name + value}label`}
            aria-checked={isChecked}
            role="radio"
          />
          <RadioText>{children}</RadioText>
        </RadioWrapper>
      );
    }}
  </Consumer>
);

RadioButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  children: PropTypes.node,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

RadioButton.defaultProps = {
  size: "small",
  children: null,
  isActive: true,
  onChange: null
};

export default RadioButton;
