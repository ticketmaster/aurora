import React, { Component } from "react";
import PropTypes from "prop-types";
import { HybridSelect, HybridOption } from "../../../src/components/Input";

export default class HybridSelectExample extends Component {
  static propTypes = {
    label: PropTypes.string,
    selectId: PropTypes.string
  };

  static defaultProps = {
    label: "",
    selectId: ""
  };

  state = {
    value: []
  };

  onChange = value => this.setState({ value });

  render() {
    const { value } = this.state;
    const { label, selectId } = this.props;
    return (
      <>
        <HybridSelect
          size="large"
          placeholder="Select an option"
          fullWidth // for hybrid select use fullWidth true and control width using hybridWrapperProps
          value={value}
          onChange={this.onChange}
          label={label}
          selectProps={{ id: selectId }}
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
          {/* Add prop optionText while children is not plain text */}
          <HybridOption value="2" index={2} optionText=" Option Three">
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
