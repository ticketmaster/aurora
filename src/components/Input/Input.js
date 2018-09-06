import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import sluggify from "../../utils/text";
import INPUT_SIZES from "./constants";
import {
  FieldInputWrapper,
  FieldInputBox,
  ErrorBoxWrapper,
  FieldInputText,
  FieldErrorText
} from "./Input.styles";

const Input = ({
  labelPosition,
  placeholder,
  disabled,
  label,
  name,
  errorMessage,
  size,
  ...rest
}) => (
  <FieldInputWrapper
    className={classNames({
      "text--input-top": labelPosition === "top",
      "text--input-left": labelPosition === "left",
      "text--input-disabled": disabled,
      text__error: errorMessage,
      "text--input-small": size === "small",
      "text--input-regular": size === "regular",
      "text--input-large": size === "large"
    })}
  >
    <FieldInputText id={sluggify(`${name + label}__label`)}>
      {label}
    </FieldInputText>
    <ErrorBoxWrapper>
      <FieldInputBox
        placeholder={disabled ? "" : placeholder}
        name={name}
        id={sluggify(`${name + label}__input`)}
        disabled={disabled}
        {...rest}
        aria-labelledby={sluggify(`${name + label}__label`)}
      />
      <FieldErrorText role="alert" aria-invalid={errorMessage !== null}>
        {errorMessage}
      </FieldErrorText>
    </ErrorBoxWrapper>
  </FieldInputWrapper>
);
Input.propTypes = {
  children: PropTypes.node,
  labelPosition: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(INPUT_SIZES)
};
Input.defaultProps = {
  children: null,
  labelPosition: "top",
  placeholder: "",
  disabled: false,
  label: "",
  errorMessage: null,
  size: INPUT_SIZES[1]
};

export default Input;
