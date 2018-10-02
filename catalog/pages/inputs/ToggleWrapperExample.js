import React, { Component } from "react";
import PropTypes from "prop-types";
import TOGGLE_SIZES from "../../../src/components/Input/Toggle/constants";
import { Toggle } from "../../../src/components/Input";

export default class ToggleWrapperExample extends Component {
  static propTypes = {
    size: PropTypes.oneOf(TOGGLE_SIZES),
    disabled: PropTypes.bool,
    value: PropTypes.bool
  };

  static defaultProps = {
    disabled: false,
    value: true,
    size: TOGGLE_SIZES[1]
  };

  state = {
    isOn: this.props.value
  };

  handleToggle = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  };

  render() {
    const { isOn } = this.state;
    const { size, disabled } = this.props;
    return (
      <Toggle
        value={isOn}
        onToggle={this.handleToggle}
        size={size}
        disabled={disabled}
      />
    );
  }
}
