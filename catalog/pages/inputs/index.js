/* eslint-disable react/no-multi-comp */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import {
  Search,
  RadioButton,
  CheckBox,
  RadioGroup,
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

// this components was created for checkboxes demonstration purpose
class CheckboxExample extends Component {
  static propTypes = {
    size: PropTypes.oneOf(TOGGLE_SIZES).isRequired
  };

  state = {
    fruits: false,
    subOptions: {
      apple: false,
      peach: false,
      banana: false
    }
  };

  handleChange = e => {
    let fruits = false;
    const { subOptions } = this.state;
    const { name, checked } = e.target;

    if (name === "fruits") {
      fruits = checked;
      Object.keys(this.state.subOptions).forEach(el => {
        subOptions[el] = fruits;
      });
    } else {
      subOptions[name] = checked;
      const subOptionValues = Object.values(subOptions);
      if (subOptionValues.every(el => el)) {
        fruits = true;
      } else if (subOptionValues.some(el => el)) {
        fruits = "indeterminate";
      }
    }

    this.setState({
      subOptions: {
        ...this.state.subOptions,
        ...subOptions
      },
      fruits
    });
  };

  isChecked = name =>
    typeof this.state[name] === "undefined"
      ? this.state.subOptions[name]
      : this.state[name];

  render() {
    return (
      <Fragment>
        <CheckBox
          size={this.props.size}
          checked={this.isChecked("fruits")}
          name="fruits"
          value="fruits"
          onChange={this.handleChange}
          style={{
            marginBottom: "10px"
          }}
        >
          Fruits
        </CheckBox>
        <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
          <ul style={{ listStyleType: "none", padding: "0 20px", margin: 0 }}>
            <li>
              <CheckBox
                size={this.props.size}
                checked={this.isChecked("apple")}
                name="apple"
                value="apple"
                onChange={this.handleChange}
                style={{
                  marginBottom: "10px"
                }}
              >
                Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple
                Apple Apple
              </CheckBox>
            </li>
            <li>
              <CheckBox
                size={this.props.size}
                checked={this.isChecked("peach")}
                name="peach"
                value="peach"
                onChange={this.handleChange}
                style={{
                  marginBottom: "10px"
                }}
              >
                Peach
              </CheckBox>
            </li>
            <li>
              <CheckBox
                size={this.props.size}
                checked={this.isChecked("banana")}
                name="banana"
                value="banana"
                onChange={this.handleChange}
                style={{
                  marginBottom: "10px"
                }}
              >
                Banana
              </CheckBox>
            </li>
          </ul>
        </fieldset>
      </Fragment>
    );
  }
}

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
    CheckBox,
    RadioGroup,
    Input,
    Spacing,
    DropDownGroup,
    DropDownOption,
    Toggle,
    DemoToggleWrapper,
    CheckboxExample,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
