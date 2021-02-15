import React from "react";
import PropTypes from "prop-types";

const Option = ({
  value,
  selectedValue,
  label,
  optionText,
  children,
  ...props
}) => (
  <option value={value} {...props}>
    {value === selectedValue && label}
    {optionText || children}
  </option>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  selectedValue: PropTypes.string,
  label: PropTypes.string,
  optionText: PropTypes.string
};
Option.defaultProps = {
  selectedValue: "",
  label: "",
  optionText: ""
};

export default Option;
