// this components was created for checkboxes demonstration purpose
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { SIZES_SL } from "../../../src/components/constants";
import { CheckBoxButton } from "../../../src/components/Input";

export default class CheckboxWrapperExample extends Component {
  static propTypes = {
    size: PropTypes.oneOf(SIZES_SL).isRequired
  };

  static data = {
    option: {
      id: 0,
      name: "fruits",
      value: "fruits",
      content: "Fruits"
    },
    subOptions: [
      {
        id: 1,
        name: "apple",
        value: "apple",
        content:
          "Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple Apple"
      },
      {
        id: 2,
        name: "peach",
        value: "peach",
        content: "Peach"
      },
      {
        id: 3,
        name: "banana",
        value: "banana",
        content: "Banana"
      }
    ]
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
    const { data } = CheckboxWrapperExample;
    const { name, checked } = e.target;
    const subOptions = { ...this.state.subOptions };

    if (name === data.option.name) {
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
    const { option, subOptions } = CheckboxWrapperExample.data;
    return (
      <Fragment>
        <CheckBoxButton
          size={this.props.size}
          isChecked={this.isChecked(option.name)}
          name={option.name}
          value={option.value}
          onClick={this.handleChange}
          style={{
            marginBottom: "10px"
          }}
        >
          Fruits
        </CheckBoxButton>
        <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
          <ul style={{ listStyleType: "none", padding: "0 20px", margin: 0 }}>
            {subOptions.map(({ id, name, value, content }) => (
              <li key={id}>
                <CheckBoxButton
                  size={this.props.size}
                  isChecked={this.isChecked(name)}
                  name={name}
                  value={value}
                  onClick={this.handleChange}
                  style={{
                    marginBottom: "10px"
                  }}
                >
                  {content}
                </CheckBoxButton>
              </li>
            ))}
          </ul>
        </fieldset>
      </Fragment>
    );
  }
}
