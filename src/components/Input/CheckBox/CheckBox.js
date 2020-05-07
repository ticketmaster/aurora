import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Consumer } from "../../SelectionProvider/Context";
import { Consumer as KeyBoardConsumer } from "../../KeyboardNavigation/Context";
import CheckBoxInput from "./CheckBoxInput";
import composeEventHandlers from "../../../utils/composeEventHandlers";
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
  isTopAligned,
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
              isTopAligned={isTopAligned}
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
                isTopAligned={isTopAligned}
                onClick={composeEventHandlers(
                  () => onClick({ value }),
                  () => focusSelected({ index }),
                  props.onClick
                )}
                {...index !== null && { isFocused: focused === index }}
              />
              <CheckDivStyling isTopAligned={isTopAligned}>
                <StyledCheckmark size={size === "small" ? 16 : 24} />
              </CheckDivStyling>
              <CheckBoxText isTopAligned={isTopAligned}>
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
  isTopAligned: PropTypes.bool,
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
  isTopAligned: false,
  style: {}
};

export default CheckBoxButton;
