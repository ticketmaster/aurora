import React from "react";
import PropTypes from "prop-types";

const Option = ({ value, optionText, label, children, ...props }) => (
  <option value={value} {...props}>
    {optionText || label || children}
  </option>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  optionText: PropTypes.string
};
Option.defaultProps = {
  label: "",
  optionText: ""
};

export default Option;
