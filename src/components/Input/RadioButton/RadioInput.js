import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themes, constants } from "../../../theme";

const RadioInput = styled.input.attrs({
  type: "radio"
})`
  cursor: pointer;
  margin: 0;
  appearance: none;
  position: relative;
  outline: none;
  transition: transform 0.1s ${constants.easing.easeInOutQuad};

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
  }

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
    transition: border-color 0.3s ${constants.easing.easeInOutQuad},
      border-width 0.3s ${constants.easing.easeInOutQuad},
      box-shadow 0.3s ${constants.easing.easeInOutQuad};
    position: absolute;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: ${({ theme: { themeName } }) =>
      `1px solid ${themes[themeName].gray02}`};

    .radio-button--large & {
      width: 24px;
      height: 24px;
    }
    .radio-button--small & {
      width: 16px;
      height: 16px;
    }
    .radio-button--disabled & {
      border: ${({ theme: { themeName } }) =>
        `1px solid ${themes[themeName].gray01}`};
    }
  }
  &:after {
    content: "";
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};

    .radio-button--large & {
      width: 12px;
      height: 12px;
    }
    .radio-button--small & {
      width: 8px;
      height: 8px;
    }

    .radio-button--disabled & {
      background-color: ${({ theme: { themeName } }) =>
        themes[themeName].gray01};
    }
  }
  &:focus:before {
    outline: none;
    border-width: 1px;
    border-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};
    box-shadow: ${({ theme: { themeName } }) =>
      `0 0 5px 0 ${themes[themeName].primary.base}`};
  }
  &:hover:before {
    border-width: 2px;
    border-color: ${({ theme: { themeName } }) =>
      themes[themeName].primary.base};
  }
  &:checked:after {
    opacity: 1;
    position: absolute;
  }
`;

class RadioInputComponent extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(["large", "small"]),
    isActive: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    isFocused: PropTypes.bool.isRequired
  };

  static defaultProps = {
    size: "small",
    isActive: true,
    onClick: null
  };

  constructor(props) {
    super(props);
    this.SelectedElement = React.createRef();
  }

  componentDidUpdate() {
    this.props.isFocused && this.SelectedElement.current.focus(); // eslint-disable-line
  }

  render() {
    const { name, value, size, isActive, checked, ...props } = this.props;

    return (
      <RadioInput
        value={value}
        name={name}
        size={size}
        id={`${name + value}input`}
        disabled={!isActive}
        checked={checked}
        aria-labelledby={`${name + value}label`}
        aria-checked={checked}
        role="radio"
        {...props}
        innerRef={this.SelectedElement}
      />
    );
  }
}
export default RadioInputComponent;
