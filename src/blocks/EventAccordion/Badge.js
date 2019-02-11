import React from "react";
import styled from "styled-components";

import {Text} from "../../components/Text"
import { constants, spacing, typography, themes } from "../../theme";
import { getLabelTextColor } from "../../utils";
import { StatusBadge } from "../../components/StatusBadge";

export const LabelText = styled(Text)`
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.semiBold};
  color: ${({ sentiment }) => getLabelTextColor({ variant: sentiment })};
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Badge = (label, variant) => {
  switch (variant) {
    case "alert":
      return <StatusBadge label={label} color={themes.global.error.base} />;
    case "positive":
      return (
        <LabelText primary sentiment="positive" variant="accent">
          {label}
        </LabelText>
      );
    case "accent":
      return (
        <LabelText primary sentiment="accent" variant="accent">
          {label}
        </LabelText>
      );
    case "caution":
      return <StatusBadge label={label} color={themes.global.caution.dark} />;
    case "neutral":
      return <StatusBadge label={label} color={themes.global.onyx.light} />;
    default:
      return <LabelText primary>{label}</LabelText>;
  }
};

export default Badge;