import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import Checkmark from "../../Icons/Checkmark";
import { Consumer } from "../../SelectionProvider/Context";
import colors from "../../../theme/colors";
import { Consumer as KeyBoardConsumer } from "../../KeyboardNavigation/Context";
import CheckBoxInput from "./CheckBoxInput";
import composeEventHandlers from "../../../utils/composeEventHandlers";

const CheckBoxWrapper = styled.label`
  position: relative;
  outline: none;
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
  outline: none;
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
  index,
  ...props
}) => (
  <KeyBoardConsumer>
    {({ focused, focusSelected }) => (
      <Consumer>
        {({ selected, onClick }) => {
          const isChecked = selected.includes(value);
          return (
            <CheckBoxWrapper
              className={classNames({
                "checkbox--small": size === "small",
                "checkbox--large": size === "large",
                "checkbox--disabled": !isActive,
                "checkbox__multi--large":
                  selected.length > 1 && size === "large",
                "checkbox__multi--small":
                  selected.length > 1 && size === "small",
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
                isChecked={isChecked}
                onClick={composeEventHandlers(
                  () => onClick({ value }),
                  () => focusSelected({ index }),
                  props.onClick
                )}
                isFocused={focused === index}
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
    )}
  </KeyBoardConsumer>
);

CheckBoxButton.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  children: PropTypes.node,
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  multiSelect: PropTypes.bool,
  onClick: PropTypes.func
};

CheckBoxButton.defaultProps = {
  size: "small",
  children: null,
  isActive: true,
  multiSelect: false,
  onClick: null
};

export default CheckBoxButton;
