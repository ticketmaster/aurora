import React from "react";
import PropTypes from "prop-types";
import Provider from "../../SelectionProvider/Provider";
import KeyBoardProvider from "../../KeyboardNavigation/Provider";

const RadioGroup = ({
  onChange,
  children,
  value,
  ariaLabel,
  ariaLabelledBy
}) => (
  <Provider onChange={onChange} isMultiSelect={false} value={value}>
    <KeyBoardProvider
      role="radiogroup"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </KeyBoardProvider>
  </Provider>
);

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.arrayOf(PropTypes.string),
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string
};

RadioGroup.defaultProps = {
  children: null,
  onChange: null,
  value: [],
  ariaLabel: "",
  ariaLabelledBy: ""
};

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
