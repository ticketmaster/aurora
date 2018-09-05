import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Consumer } from "../../SelectionProvider/Context";
import { Consumer as KeyBoardConsumer } from "../../KeyboardNavigation/Context";
import { themes } from "../../../theme";
import RadioInput from "./RadioInput";
import composeEventHandlers from "../../../utils/composeEventHandlers";

const RadioWrapper = styled.label`
  position: relative;
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  text-align: left;
  color: ${({ theme: { themeName } }) => themes[themeName].gray01};
  outline: none;
  min-height: 44px;

  &.radio-button--disabled {
    opacity: 0.4;
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
  outline: none;
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
  index,
  ...props
}) => (
  <KeyBoardConsumer>
    {({ focused, focusSelected }) => (
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
              theme={props.theme}
            >
              <RadioInput
                value={value}
                name={name}
                isActive={isActive}
                size={size}
                checked={isChecked}
                onChange={composeEventHandlers(
                  () => onClick({ value }),
                  () => focusSelected({ index }),
                  props.onClick
                )}
                {...props}
                isFocused={focused === index}
              />
              <RadioText>{children}</RadioText>
            </RadioWrapper>
          );
        }}
      </Consumer>
    )}
  </KeyBoardConsumer>
);

RadioButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  children: PropTypes.node,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    themeName: PropTypes.string
  })
};

RadioButton.defaultProps = {
  size: "small",
  children: null,
  isActive: true,
  onClick: null,
  theme: {
    themeName: "tm"
  }
};

RadioButton.displayName = "RadioButton";

export default RadioButton;
