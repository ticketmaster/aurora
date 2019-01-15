import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import sluggify from "../../utils/text";
import { SIZES, REGULAR, TOP } from "../constants";
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
  tag,
  ...rest
}) => {
  const sluggified = sluggify(name + label);
  return (
    <FieldInputWrapper
      className={classNames(
        `text--input-${size}`,
        `text--input-${labelPosition}`,
        {
          "text--input-disabled": disabled,
          text__error: errorMessage
        }
      )}
    >
      <FieldInputText id={`${sluggified}__label`}>{label}</FieldInputText>
      <ErrorBoxWrapper>
        <FieldInputBox
          placeholder={disabled ? "" : placeholder}
          name={name}
          id={`${sluggified}__input`}
          disabled={disabled}
          as={tag}
          {...rest}
          aria-labelledby={`${sluggified}__label`}
        />
        <FieldErrorText role="alert" aria-invalid={errorMessage !== null}>
          {errorMessage}
        </FieldErrorText>
      </ErrorBoxWrapper>
    </FieldInputWrapper>
  );
};
Input.propTypes = {
  children: PropTypes.node,
  labelPosition: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  tag: PropTypes.oneOf(["textarea", "input"])
};
Input.defaultProps = {
  children: null,
  labelPosition: TOP,
  placeholder: "",
  disabled: false,
  label: "",
  errorMessage: null,
  size: REGULAR,
  tag: "input"
};

export default Input;
