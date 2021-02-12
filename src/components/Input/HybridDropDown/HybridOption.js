import React from "react";
import PropTypes from "prop-types";
import DropDownOption from "../DropDown/DropDownOption";
import Option from "../Select/Option";

const HybridOption = ({
  optionFor,
  optionText,
  optionProps,
  dropdownOptionProps,
  children,
  ...props
}) => {
  if (optionFor === "select") {
    return (
      <Option optionText={optionText} {...props} {...optionProps}>
        {children}
      </Option>
    );
  }
  return (
    <DropDownOption {...props} {...dropdownOptionProps}>
      {children}
    </DropDownOption>
  );
};
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
