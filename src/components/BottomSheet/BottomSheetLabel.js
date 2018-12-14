import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { labelsColorMap } from "../List/helper";

import { Text } from "../Text";
import { StatusBadge } from "../StatusBadge";

const LabelText = styled(Text)`
  text-transform: uppercase;
`;

const BottomSheetLabel = ({ variant, children, ...restProps }) => {
  if (!children) {
    return null;
  }

  if (labelsColorMap[variant]) {
    return (
      <StatusBadge
        {...restProps}
        label={children}
        color={labelsColorMap[variant]}
      />
    );
  }

  return (
    <LabelText {...restProps} primary>
      {" "}
      {children}
    </LabelText>
  );
};

BottomSheetLabel.defaultProps = {
  variant: "default",
  children: ""
};

BottomSheetLabel.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "positive",
    "alert",
    "accent",
    "caution",
    "neutral"
  ]),
  children: PropTypes.string
};

export default BottomSheetLabel;
