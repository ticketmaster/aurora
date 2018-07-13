import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import sluggify from "../../utils/text";
import colors from "../../theme/colors";
import constants from "../../theme/constants";

const FieldInputBox = styled.input`
  height: 36px;
  width: 100%;
  border-radius: ${constants.borderRadius.small};
  background-color: ${colors.white.base};
  border: solid 1px ${colors.onyx.light};
  padding-left: 18px;
  line-height: 2.57;
  .text__error-top & {
    border-color: ${colors.alert.base};
  }
  .text__error-left & {
    border-color: ${colors.alert.base};
  }
  &.text--input-left {
    flex-grow: 2;
  }
  &:hover {
    border: 2px ${colors.azure.base} solid;
    padding-left: 17px;
  }
  &:-webkit-input-placeholder {
    color: ${colors.onyx.light};
  }
  &:-moz-placeholder {
    color: ${colors.onyx.light};
  }
  &:focus {
    border: 1px ${colors.azure.base} solid;
    padding-left: 18px;
    border-radius: ${constants.borderRadius.small};
    box-shadow: 0 0 5px 0 ${colors.azure.base};
    background-color: ${colors.white.base};
    outline: none;
  }
`;
const ErrorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;
const FieldInputWrapper = styled.div`
  display: flex;
  position: relative;
  &.text--input-top {
    flex-direction: column;
    justify-content: left;
  }
  &.text--input-left {
    flex-direction: row;
  }
  &.text--input-disabled {
    pointer-events: none;
    opacity: 0.35;
  }
`;

const FieldInputText = styled.label`
  font-size: 12px;
  height: 13px;
  line-height: 1.25;
  text-align: left;
  color: ${colors.onyx.muted};
  position: relative;
  .text--input-disabled & {
    opacity: 0.35;
  }
  .text--input-top & {
    margin-bottom: 6px;
  }
  .text--input-left & {
    margin-right: 11px;
    margin-top: 10px;
  }
  &.text__error-top {
    color: ${colors.alert.base};
    margin-top: 1px;
    font-size: 12px;
    line-height: 1.25;
  }
  &.text__error-left {
    color: ${colors.alert.base};
    margin-top: 1px;
  }
`;

const FieldErrorText = styled.label`
  font-size: 12px;
  height: 13px;
  line-height: 1.25;
  text-align: left;
  color: ${colors.onyx.muted};
  position: relative;
  .text--input-disabled & {
    opacity: 0.35;
  }
  .text--input-left & {
    margin-right: 11px;
    margin-top: 10px;
  }
  &.text__error-top {
    color: ${colors.alert.base};
    margin-top: 1px;
    font-size: 12px;
    line-height: 1.25;
  }
  &.text__error-left {
    color: ${colors.alert.base};
    margin-top: 1px;
  }
`;

const Input = ({
  labelPosition,
  placeholder,
  disabled,
  width,
  label,
  name,
  errorMessage,
  ...rest
}) => (
  <FieldInputWrapper
    className={classNames({
      "text--input-top": labelPosition === "top",
      "text--input-left": labelPosition === "left",
      "text--input-disabled": disabled,
      "text__error-top": labelPosition === "top" && errorMessage,
      "text__error-left": labelPosition === "left" && errorMessage
    })}
  >
    <FieldInputText id={sluggify(`${name + label}label`)}>
      {label}
    </FieldInputText>
    <ErrorBoxWrapper>
      <FieldInputBox
        placeholder={disabled ? "" : placeholder}
        name={name}
        id={sluggify(`${name + label}input`)}
        disabled={disabled}
        {...rest}
        aria-labelledby={sluggify(`${name + label}label`)}
      />
      {errorMessage ? (
        <FieldErrorText
          className={classNames({
            "text__error-top": labelPosition === "top",
            "text__error-left": labelPosition === "left"
          })}
          role="alert"
          aria-invalid={errorMessage !== null}
        >
          {errorMessage}
        </FieldErrorText>
      ) : null}
    </ErrorBoxWrapper>
  </FieldInputWrapper>
);
Input.propTypes = {
  children: PropTypes.node,
  labelPosition: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  type: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string
};
Input.defaultProps = {
  children: null,
  labelPosition: "top",
  placeholder: "",
  disabled: false,
  width: 100,
  type: "text",
  label: "",
  errorMessage: null
};

export default Input;
