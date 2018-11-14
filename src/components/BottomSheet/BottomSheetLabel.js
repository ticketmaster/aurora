import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

import { Text } from "../Text";
import { StatusBadge } from "../StatusBadge";

const LabelText = styled(Text)`
  text-transform: uppercase;
`;

const BottomSheetLabel = ({ variant, children, ...restProps }) => {
  if (!children) {
    return null;
  }

  switch (variant) {
    case "alert":
      return (
        <StatusBadge
          {...restProps}
          label={children}
          color={colors.alert.base}
        />
      );
    case "positive":
      return (
        <StatusBadge
          {...restProps}
          label={children}
          color={colors.positive.base}
        />
      );
    default:
      return (
        <LabelText {...restProps} primary>
          {children}
        </LabelText>
      );
  }
};

BottomSheetLabel.defaultProps = {
  variant: "default",
  children: ""
};

BottomSheetLabel.propTypes = {
  variant: PropTypes.oneOf(["default", "positive", "alert"]),
  children: PropTypes.string
};

export default BottomSheetLabel;
