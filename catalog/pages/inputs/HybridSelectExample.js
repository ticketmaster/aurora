// this components was created for hybrid dropdown demonstration purpose
import React, { Component } from "react";
import styled from "styled-components";
import {
  Select,
  DropDownGroup,
  DropDownOption,
  DropDownLabel
} from "../../../src/components/Input";

const HybridSelectWrapper = styled.div`
  position: relative;
`;

export default class HybridSelectExample extends Component {
  state = {
    showNativeSelect: true,
    selectedValue: [],
    isOpen: false,
    mouseOnDropdown: false
  };

  // onChange function called when value of dropdown is changed
  onChange = value => {
    this.setState({ selectedValue: value });
  };

  // update function called when value of native select is changed
  updateValue = e => {
    this.setState({ selectedValue: [e.target.value] }); // saving value in array to match dropdown's format
  };

  // To show native select
  showNativeSelect = () => {
    // Updating value when we know mouse left dropdown
    this.setState({ mouseOnDropdown: false });
    if (!this.state.isOpen) {
      this.setState({ showNativeSelect: true });
    }
  };

  // To hide native select - called when mouse enters native select
  hideNativeSelect = () => {
    this.setState({ showNativeSelect: false, mouseOnDropdown: true });
  };

  // Set isOpen state to true when dropdown menu opens
  dropdownMenuOpen = () => {
    this.setState({ isOpen: true });
  };

  // Set isOpen state to false when dropdown menu closes
  dropdownMenuClose = () => {
    this.setState({ isOpen: false }, () => {
      if (!this.state.mouseOnDropdown) {
        this.showNativeSelect();
      }
    });
  };

  render() {
    const { showNativeSelect, selectedValue } = this.state;
    return (
      <HybridSelectWrapper>
        <DropDownLabel id="selectLabel" htmlFor="selectElement" size="large">
          Hybrid Select
        </DropDownLabel>
        <Select
          id="selectElement"
          size="large"
          hybrid
          fullWidth
          showSelect={showNativeSelect}
          value={selectedValue[0]}
          onChange={this.updateValue}
          onMouseEnter={this.hideNativeSelect}
          aria-label="Select an option"
        >
          <option value="" aria-label="">
            Select an option
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
        <DropDownGroup
          size="large"
          placeholder="Select an option"
          hybrid
          fullWidth
          value={selectedValue}
          valueOverride={selectedValue}
          hideDropdown={showNativeSelect}
          onChange={this.onChange}
          dropdownMenuOpen={this.dropdownMenuOpen}
          dropdownMenuClose={this.dropdownMenuClose}
          onMouseLeave={this.showNativeSelect}
          aria-describedby="selectLabel"
        >
          <DropDownOption value="0" index={0}>
            Option One
          </DropDownOption>
          <DropDownOption value="1" index={1}>
            Option Two
          </DropDownOption>
          <DropDownOption value="2" index={2}>
            Option Three
          </DropDownOption>
          <DropDownOption value="3" index={3}>
            Option Four
          </DropDownOption>
          <DropDownOption value="4" index={4}>
            Option Five
          </DropDownOption>
        </DropDownGroup>
      </HybridSelectWrapper>
    );
  }
}
