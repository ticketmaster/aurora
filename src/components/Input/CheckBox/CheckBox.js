import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withTheme } from "styled-components";

import composeEventHandlers from "../../../utils/composeEventHandlers";
import {
  CheckBoxWrapper,
  CheckBoxText,
  CheckBoxInput,
  CheckDivStyling,
  StyledCheckmark
} from "./CheckBox.styles";
import { themes } from "../../../theme";

export const blur = e => {
  e.target.blur();
}; // to avoid focus after click

const CheckBoxButton = ({
  name,
  value,
  size,
  disabled,
  children,
  checked,
  style,
  onClick,
  theme: { themeName },
  ...props
}) => {
  const id = (name + value).replace(/ /g, "_");
  const isSmall = size === "small";
  const inputProps = {
    ...props,
    value,
    name,
    disabled,
    ...(checked !== null && { checked })
  };

  return (
    <CheckBoxWrapper
      className={classNames({
        "checkbox--small": isSmall,
        "checkbox--large": !isSmall,
        "checkbox--disabled": disabled,
        checkbox__checked: checked,
        checkbox__indeterminate: checked === "indeterminate"
      })}
      style={style}
    >
      <CheckBoxInput
        aria-labelledby={id}
        {...inputProps}
        onClick={composeEventHandlers(blur, onClick)}
      />
      <CheckDivStyling
        className={classNames({
          checkbox__checked: checked
        })}
      >
        <StyledCheckmark
          size={isSmall ? 16 : 24}
          stroke={
            disabled
              ? themes[themeName].onyx.muted
              : themes[themeName].primary.base
          }
        />
      </CheckDivStyling>
      <CheckBoxText id={id}>{children}</CheckBoxText>
    </CheckBoxWrapper>
  );
};

CheckBoxButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    themeName: PropTypes.string
  }).isRequired,
  checked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["indeterminate"])
  ]),
  size: PropTypes.oneOf(["large", "small"]),
  style: PropTypes.shape(),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

CheckBoxButton.defaultProps = {
  size: "small",
  children: null,
  disabled: false,
  checked: null,
  onClick: null,
  style: {}
};

export default withTheme(CheckBoxButton);
