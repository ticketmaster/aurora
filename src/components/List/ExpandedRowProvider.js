import React from "react";
import PropTypes from "prop-types";
import ExpandedRowContext from "./ExpandedRowContext";

const ExpandedRowProvider = ({ value, children }) => (
  <ExpandedRowContext.Provider value={value}>
    {children}
  </ExpandedRowContext.Provider>
);

ExpandedRowProvider.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ExpandedRowProvider;
