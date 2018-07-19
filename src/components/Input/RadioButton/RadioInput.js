import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../../theme/colors";

const RadioInput = styled.input.attrs({
  type: "radio"
})`
  margin: 0;
  appearance: none;
  position: relative;
  outline: none;
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
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${colors.onyx.light};

    .radio-button--large & {
      width: 24px;
      height: 24px;
    }
    .radio-button--small & {
      width: 16px;
      height: 16px;
    }
    &.radio-button--disabled {
      color: grey;
    }
  }
  &:after {
    content: "";
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${colors.azure.base};

    .radio-button--large & {
      width: 12px;
      height: 12px;
    }
    .radio-button--small & {
      width: 8px;
      height: 8px;
    }
  }
  &:hover:before {
    border-width: 2px;
    border-color: ${colors.azure.base};
  }
  &:focus:before {
    border-width: 2px;
    border-color: ${colors.azure.base};
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
