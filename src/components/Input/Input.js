import React, { forwardRef } from "react";
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

const Input = forwardRef(
  (
    {
      labelPosition,
      placeholder,
      disabled,
      label,
      name,
      errorMessage,
      size,
      tag,
      labelStyle,
      ...rest
    },
    ref
  ) => {
    const sluggified = sluggify(name + label);
    const labelId = sluggified ? `${sluggified}__label` : null;
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
        {label && (
          <FieldInputText id={labelId} style={labelStyle}>
            {label}
          </FieldInputText>
        )}
        <ErrorBoxWrapper>
          <FieldInputBox
            placeholder={disabled ? "" : placeholder}
            name={name || null}
            id={sluggified ? `${sluggified}__input` : null}
            disabled={disabled}
            as={tag}
            {...rest}
            aria-labelledby={label ? labelId : null}
            ref={ref}
          />
          {errorMessage !== null && (
            <FieldErrorText role="alert" aria-invalid="true">
              {errorMessage}
            </FieldErrorText>
          )}
        </ErrorBoxWrapper>
      </FieldInputWrapper>
    );
  }
);

Input.propTypes = {
  children: PropTypes.node,
  labelPosition: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.shape(),
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  tag: PropTypes.oneOf(["textarea", "input"])
};
Input.defaultProps = {
  children: null,
  labelPosition: TOP,
  placeholder: "",
  disabled: false,
  name: "",
  label: "",
  errorMessage: null,
  size: REGULAR,
  tag: "input",
  labelStyle: {}
};

export default Input;
