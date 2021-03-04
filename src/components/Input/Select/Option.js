import React from "react";
import PropTypes from "prop-types";

const Option = ({ value, optionText, children, ...props }) => (
  <option value={value} {...props}>
    {optionText || children}
  </option>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optionText: PropTypes.string
};
Option.defaultProps = {
  optionText: ""
};

export default Option;
