// this components was created for checkboxes demonstration purpose
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import TOGGLE_SIZES from "../../../src/components/Input/Toggle/constants";
import { CheckBoxButton } from "../../../src/components/Input";

export default class CheckboxWrapperExample extends Component {
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
        <CheckBoxButton
          size={this.props.size}
          isChecked={this.isChecked("fruits")}
          name="fruits"
          value="fruits"
          onClick={this.handleChange}
          style={{
            marginBottom: "10px"
          }}
        >
          Fruits
        </CheckBoxButton>
        <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
          <ul style={{ listStyleType: "none", padding: "0 20px", margin: 0 }}>
            <li>
              <CheckBoxButton
                size={this.props.size}
                isChecked={this.isChecked("apple")}
                name="apple"
                value="apple"
                onClick={this.handleChange}
                style={{
                  marginBottom: "10px"
                }}
              >
                Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple
                Apple Apple
              </CheckBoxButton>
            </li>
            <li>
              <CheckBoxButton
                size={this.props.size}
                isChecked={this.isChecked("peach")}
                name="peach"
                value="peach"
                onClick={this.handleChange}
                style={{
                  marginBottom: "10px"
                }}
              >
                Peach
              </CheckBoxButton>
            </li>
            <li>
              <CheckBoxButton
                size={this.props.size}
                isChecked={this.isChecked("banana")}
                name="banana"
                value="banana"
                onClick={this.handleChange}
                style={{
                  marginBottom: "10px"
                }}
              >
                Banana
              </CheckBoxButton>
            </li>
          </ul>
        </fieldset>
      </Fragment>
    );
  }
}
