import React, { Component } from "react";
import PropTypes from "prop-types";
import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import {
  Search,
  RadioButton,
  CheckBoxButton,
  RadioGroup,
  CheckBoxGroup,
  Input,
  DropDownGroup,
  DropDownOption,
  Toggle
} from "../../../src/components/Input";
import TOGGLE_SIZES from "../../../src/components/Input/Toggle/constants";
import Header from "../../../src/components/Header";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import Row from "../../../src/components/Grid/Row";
import Spacing from "../../../src/components/Spacing";

class DemoToggleWrapper extends Component {
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

DemoToggleWrapper.propTypes = {
  size: PropTypes.oneOf(TOGGLE_SIZES),
  disabled: PropTypes.bool,
  value: PropTypes.bool
};

DemoToggleWrapper.defaultProps = {
  disabled: false,
  value: true,
  size: TOGGLE_SIZES[1]
};

export default {
  path: "/inputs",
  title: "Inputs",
  imports: {
    Search,
    Header,
    Column,
    Container,
    Row,
    RadioButton,
    CheckBoxButton,
    RadioGroup,
    CheckBoxGroup,
    Input,
    Spacing,
    DropDownGroup,
    DropDownOption,
    Toggle,
    DemoToggleWrapper,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
