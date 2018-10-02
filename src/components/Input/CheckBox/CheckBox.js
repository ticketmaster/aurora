import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Consumer } from "../../SelectionProvider/Context";
import { Consumer as KeyBoardConsumer } from "../../KeyboardNavigation/Context";
import CheckBoxInput from "./CheckBoxInput";
import composeEventHandlers from "../../../utils/composeEventHandlers";
import { blur } from "../../../utils";
import {
  CheckBoxWrapper,
  CheckBoxText,
  CheckDivStyling,
  StyledCheckmark
} from "./CheckBox.styles";

const CheckBoxButton = ({
  name,
  value,
  size,
  disabled,
  children,
  index,
  style,
  ...props
}) => (
  <KeyBoardConsumer>
    {({ focused, focusSelected }) => (
      <Consumer>
        {({ selected, onClick }) => {
          const isChecked = props.isChecked
            ? Boolean(props.isChecked)
            : selected.includes(value);

          return (
            <CheckBoxWrapper
              className={classNames({
                "checkbox--small": size === "small",
                "checkbox--large": size === "large",
                "checkbox--disabled": disabled,
                checkbox__indeterminate: props.isChecked === "indeterminate",
                checkbox__checked: isChecked
              })}
              style={style}
            >
              <CheckBoxInput
                {...props}
                value={value}
                name={name}
                id={name + value}
                disabled={disabled}
                size={size}
                isChecked={isChecked}
                onClick={composeEventHandlers(
                  () => onClick({ value }),
                  () => focusSelected({ index }),
                  props.onClick,
                  blur
                )}
                {...index !== null && { isFocused: focused === index }}
              />
              <CheckDivStyling>
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
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func,
  style: PropTypes.shape(),
  isChecked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["indeterminate"])
  ])
};

CheckBoxButton.defaultProps = {
  size: "small",
  children: null,
  disabled: false,
  onClick: null,
  index: null,
  isChecked: null,
  style: {}
};

export default CheckBoxButton;
