import React from "react";
import styled from "styled-components";
import { StatusBadge } from "../../components/StatusBadge";
import { typography, themes } from "../../theme";
import {Text} from "../../components/Text"

const LabelText = styled(Text)`
  color: ${themes.global.error.base};
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.semiBold};
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Badge = ({label, size, className}) => {
  switch (label) {
    case "error":
      return (
        <StatusBadge
          label={label}
          color={themes.global.error.base}
          className={className}
        />
      );
    default:
      return (
        <LabelText primary size={size} className={className}>
          {label}
        </LabelText>
      );
  }
};

export default Badge;