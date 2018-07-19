import React from "react";
import PropTypes from "prop-types";
import Provider from "../../SelectionProvider/Provider";
import KeyBoardProvider from "../../KeyboardNavigation/Provider";

const CheckBoxGroup = ({ onChange, children, value }) => (
  <Provider onChange={onChange} value={value} isMultiSelect>
    <KeyBoardProvider role="checkbox">{children}</KeyBoardProvider>
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
