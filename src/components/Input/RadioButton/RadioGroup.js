import React from "react";
import PropTypes from "prop-types";
import Provider from "../../SelectionProvider/Provider";
import KeyBoardProvider from "../../KeyboardNavigation/Provider";

const RadioGroup = ({ onChange, children, value }) => (
  <Provider onChange={onChange} isMultiSelect={false} value={value}>
    <KeyBoardProvider role="radiogroup">{children}</KeyBoardProvider>
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

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
