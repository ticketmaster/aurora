import React from "react";
import PropTypes from "prop-types";
import Provider from "./Provider";

const RadioGroup = ({ onChange, children, value }) => (
  <Provider onChange={onChange} isMultiSelect={false} value={value}>
    <div role="radiogroup">{children}</div>
  </Provider>
);

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.arrayOf(PropTypes.string)
};

RadioGroup.defaultProps = {
  children: null,
  onChange: null,
  value: []
};

export default RadioGroup;
