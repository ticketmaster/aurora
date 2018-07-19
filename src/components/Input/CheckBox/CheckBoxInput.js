import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../../theme/colors";
import constants from "../../../theme/constants";

const CheckBoxInput = styled.input.attrs({
  type: "checkbox"
})`
  outline: none;
  margin: 0;
  appearance: none;
  position: relative;
  .checkbox--large & {
    width: 24px;
    height: 24px;
  }
  .checkbox--small & {
    width: 16px;
    height: 16px;
  }

  &:before {
    content: "";
    background-color: transparent;
    border-radius: ${constants.borderRadius.small};
    border: 1px solid ${colors.onyx.light};
    position: absolute;
    .checkbox--large & {
      width: 24px;
      height: 24px;
    }
    .checkbox--small & {
      width: 16px;
      height: 16px;
    }
    &.checkbox--disabled {
      color: grey;
    }
  }
  &:hover:before {
    border-width: 2px;
    border-color: ${colors.azure.base};
  }
  &:focus:before {
    outline: none;
    .checkbox--small & {
      width: 16px;
      height: 16px;
      border-radius: ${constants.borderRadius.small};
      border: solid 1px ${colors.azure.base};
      background-color: ${colors.white.base};
    }
    .checkbox--large & {
      width: 24px;
      height: 24px;
      border-radius: ${constants.borderRadius.small};
      border: solid 1px ${colors.azure.base};
      background-color: ${colors.white.base};
    }
  }
  &:checked:after {
    content: "";
    position: absolute;
    .checkbox__multi--large & {
      content: "";
      width: 12px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 3px;
      border-radius: ${constants.borderRadius.small};
      background-color: ${colors.azure.base};
    }
    .checkbox__multi--small & {
      content: "";
      width: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
      border-radius: ${constants.borderRadius.small};
      background-color: ${colors.azure.base};
    }
  }
`;

class CheckBoxInputComponent extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(["large", "small"]),
    isActive: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    isFocused: PropTypes.bool.isRequired
  };

  static defaultProps = {
    size: "small",
    isActive: true
  };

  constructor(props) {
    super(props);
    this.SelectedElement = React.createRef();
  }

  componentDidUpdate() {
    this.props.isFocused && this.SelectedElement.current.focus(); // eslint-disable-line
  }

  render() {
    const { name, value, size, isActive, isChecked, ...props } = this.props;

    return (
      <CheckBoxInput
        {...props}
        value={value}
        name={name}
        id={`${name + value}input`}
        disabled={!isActive}
        defaultChecked={isChecked}
        innerRef={this.SelectedElement}
      />
    );
  }
}
export default CheckBoxInputComponent;
