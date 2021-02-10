import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DropDownGroup from "../DropDown/DropDownGroup";
import Select from "../Select/Select";

const HybridSelectWrapper = styled.div`
  position: relative;
`;

class HybridSelect extends Component {
  state = {
    showNativeSelect: true,
    isOpen: false,
    mouseOnDropdown: false
  };

  // onMouseEnter function called when mouse enters native select
  onMouseEnter = e => {
    const { onMouseEnter } = this.props;
    this.hideNativeSelect();
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  // onMouseLeave function called when mouse leave dropdown
  onMouseLeave = e => {
    const { onMouseLeave } = this.props;
    this.showNativeSelect();
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  // onChange function called when value is changed
  onChange = value => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  // update function called when value of native select is changed
  updateValue = e => {
    this.onChange([e.target.value]); // passing value in array to match dropdown's format
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
    const { dropdownMenuOpen } = this.props;
    this.setState({ isOpen: true });
    if (dropdownMenuOpen) {
      dropdownMenuOpen();
    }
  };

  // Set isOpen state to false when dropdown menu closes
  dropdownMenuClose = () => {
    const { dropdownMenuClose } = this.props;
    this.setState({ isOpen: false }, () => {
      if (!this.state.mouseOnDropdown) {
        this.showNativeSelect();
      }
    });
    if (dropdownMenuClose) {
      dropdownMenuClose();
    }
  };

  // To add optionFor prop to the children
  renderChildren = (extraProps, children) => {
    const childrenWithExtraProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, extraProps);
      }
      return child;
    });
    return childrenWithExtraProps;
  };

  render() {
    const { showNativeSelect } = this.state;
    const {
      placeholder,
      value,
      valueOverride,
      showOptionPlaceholder,
      optionPlaceholderProps,
      hybridWrapperProps,
      selectProps,
      dropdownProps,
      selectRef,
      children,
      ...props
    } = this.props;

    return (
      <HybridSelectWrapper {...hybridWrapperProps}>
        <Select
          {...props}
          {...selectProps}
          hybrid
          showSelect={showNativeSelect}
          value={value[0]}
          selectRef={selectRef}
          onChange={this.updateValue}
          onMouseEnter={this.onMouseEnter}
        >
          {showOptionPlaceholder && (
            <option value="" {...optionPlaceholderProps}>
              {placeholder}
            </option>
          )}
          {this.renderChildren({ optionFor: "select" }, children)}
        </Select>
        <DropDownGroup
          {...props}
          {...dropdownProps}
          hybrid
          hideDropdown={showNativeSelect}
          placeholder={placeholder}
          value={value}
          valueOverride={valueOverride || value}
          onChange={this.onChange}
          dropdownMenuOpen={this.dropdownMenuOpen}
          dropdownMenuClose={this.dropdownMenuClose}
          onMouseLeave={this.onMouseLeave}
        >
          {this.renderChildren({ optionFor: "dropdown" }, children)}
        </DropDownGroup>
      </HybridSelectWrapper>
    );
  }
}

HybridSelect.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  showOptionPlaceholder: PropTypes.bool,
  /* eslint-disable react/forbid-prop-types */
  optionPlaceholderProps: PropTypes.object,
  hybridWrapperProps: PropTypes.object,
  selectProps: PropTypes.object,
  dropdownProps: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
};

HybridSelect.defaultProps = {
  value: [],
  onChange: null,
  placeholder: "",
  showOptionPlaceholder: true,
  optionPlaceholderProps: {},
  hybridWrapperProps: {},
  selectProps: {},
  dropdownProps: {}
};

export default HybridSelect;
