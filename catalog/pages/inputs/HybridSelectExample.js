import React, { Component } from "react";
import {
  DropDownLabel,
  HybridSelect,
  HybridOption
} from "../../../src/components/Input";

export default class HybridSelectExample extends Component {
  state = {
    value: []
  };

  onChange = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <DropDownLabel id="selectLabel" htmlFor="demoSelect" size="large">
          Hybrid Select
        </DropDownLabel>
        <HybridSelect
          size="large"
          placeholder="Select an option"
          fullWidth // for hybrid select use fullWidth true and control width using hybridWrapperProps
          value={value}
          onChange={this.onChange}
          selectProps={{ id: "demoSelect" }}
        >
          <HybridOption
            value="0"
            index={0}
            optionText="Option One"
            optionProps={{ className: "classOnSelectOption" }}
          >
            Option One
          </HybridOption>
          <HybridOption
            value="1"
            index={1}
            dropdownOptionProps={{ className: "classOnDropdownOption" }}
          >
            Option Two
          </HybridOption>
          <HybridOption value="2" index={2} optionText="Option Three">
            {/* Add prop optionText while children is not plain text */}
            <div>Option Three</div>
          </HybridOption>
          <HybridOption value="3" index={3}>
            Option Four
          </HybridOption>
          <HybridOption value="4" index={4}>
            Option Five
          </HybridOption>
        </HybridSelect>
      </>
    );
  }
}
