import React from "react";
import PropTypes from "prop-types";
import BottomSheetContext from "./BottomSheetContext";

const BottomSheetProvider = ({ value, children }) => (
  <BottomSheetContext.Provider value={value}>
    {children}
  </BottomSheetContext.Provider>
);

BottomSheetProvider.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default BottomSheetProvider;
