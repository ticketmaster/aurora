import React from "react";
import PropTypes from "prop-types";
import Spacing, { spacingShape } from "../Spacing";
import DIVIDER_CONFIG, { GENERAL_CONTENT_SPACER } from "./constant";

const Divider = ({ top, bottom, type, children }) => {
  // Added to keep backward compatibility with the current implementation, remove after cleaning the appropriate feature flag.
  if (top || bottom) {
    return (
      <Spacing top={top} bottom={bottom}>
        {children}
      </Spacing>
    );
  }
  return (
    <Spacing
      as={DIVIDER_CONFIG[type].tag}
      bottom={DIVIDER_CONFIG[type].spacing.bottom}
    >
      {children}
    </Spacing>
  );
};

Divider.propTypes = {
  top: spacingShape,
  bottom: spacingShape,
  type: PropTypes.string,
  children: PropTypes.node
};

Divider.defaultProps = {
  top: null,
  bottom: null,
  type: GENERAL_CONTENT_SPACER,
  children: null
};

export default Divider;
