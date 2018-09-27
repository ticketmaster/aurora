import React from "react";
import styled from "styled-components";

import { IconButton } from "../Button";
import { OverflowIcon } from "../Icons";

import { spacing, colors } from "../../theme";

const DayTileOverflowButtonContainer = styled.div`
  margin-left: auto;
`;

const DayTileOverflowIconButton = styled(IconButton)`
  display: block;
  padding: ${spacing.cozy} ${spacing.cozy} 0;
  border: 0;
`;

const DayTileOverflowIcon = styled(OverflowIcon)`
  ${DayTileOverflowIconButton}:hover & {
    color: ${colors.azure.base};
    fill: currentColor;
  }
`;

const DayTileOverflowButton = props => (
  <DayTileOverflowButtonContainer>
    <DayTileOverflowIconButton
      size={30}
      aria-label="More Info"
      role="button"
      {...props}
    >
      <DayTileOverflowIcon size={21} color={colors.onyx.light} />
    </DayTileOverflowIconButton>
  </DayTileOverflowButtonContainer>
);

export default DayTileOverflowButton;
