import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import DropDownOption from "../DropDown/DropDownOption";

class HybridOption extends PureComponent {
  renderNativeOption = (optionText, children, props) => (
    <option {...props}> {optionText || children} </option>
  );

  renderDropDownOption = (children, props) => (
    <DropDownOption {...props}> {children} </DropDownOption>
  );

  render() {
    const {
      optionFor,
      optionText,
      optionProps,
      dropdownOptionProps,
      children,
      ...props
    } = this.props;
    if (optionFor === "select") {
      return this.renderNativeOption(optionText, children, {
        ...props,
        ...optionProps
      });
    }
    return this.renderDropDownOption(children, {
      ...props,
      ...dropdownOptionProps
    });
  }
}
HybridOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optionText: PropTypes.string,
  optionFor: PropTypes.string,
  /* eslint-disable react/forbid-prop-types */
  optionProps: PropTypes.object,
  dropdownOptionProps: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
};
HybridOption.defaultProps = {
  optionText: "",
  optionFor: "select",
  optionProps: {},
  dropdownOptionProps: {}
};

export default HybridOption;
