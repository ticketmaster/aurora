import React, { Component } from "react";
import PropTypes from "prop-types";
import HybridSelectWrapper from "./HybridDropDown.styles";
import DropDownGroup from "../DropDown/DropDownGroup";
import Select from "../Select/Select";

class HybridSelect extends Component {
  // onChange function called when value is changed
  onChange = (value, eventFrom) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value, eventFrom || "dropdown");
    }
  };

  // called when dropdown wrapper get focus
  onFocus = e => {
    const { onFocus } = this.props;
    this.selectRef.current.tabIndex = -1;
    if (onFocus) {
      onFocus(e);
    }
  };

  // called when dropdown wrapper losses focus
  onBlur = e => {
    const { onBlur } = this.props;
    this.selectRef.current.tabIndex = 0;
    if (onBlur) {
      onBlur(e);
    }
  };

  // ref to access Select component
  selectRef = React.createRef();

  // update function called when value of native select is changed
  updateValue = e => this.onChange([e.target.value], "select"); // passing value in array to match dropdown's format

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
    const {
      placeholder,
      value,
      valueOverride,
      showOptionPlaceholder,
      label,
      optionPlaceholderProps,
      hybridWrapperProps,
      selectProps,
      dropdownProps,
      children,
      ...props
    } = this.props;

    return (
      <HybridSelectWrapper {...hybridWrapperProps}>
        <Select
          {...props}
          {...selectProps}
          hybrid
          value={value[0]}
          selectRef={this.selectRef}
          onChange={this.updateValue}
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
          placeholder={placeholder}
          label={label}
          value={value}
          valueOverride={valueOverride || value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
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
