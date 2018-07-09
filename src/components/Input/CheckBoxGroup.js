import React from "react";
import PropTypes from "prop-types";
import Provider from "./Provider";

const CheckBoxGroup = ({ onChange, children, value }) => (
  <Provider onChange={onChange} value={value} isMultiSelect>
    <div>{children}</div>
  </Provider>
);

CheckBoxGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.arrayOf(PropTypes.string)
};

CheckBoxGroup.defaultProps = {
  children: null,
  onChange: null,
  value: []
};

export default CheckBoxGroup;
