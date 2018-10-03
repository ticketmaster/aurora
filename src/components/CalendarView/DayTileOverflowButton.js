import React from "react";
import styled from "styled-components";

import { IconButton } from "../Button";
import { OverflowIcon } from "../Icons";

import { spacing } from "../../theme";
import { getThemeValue } from "../../utils";

const DayTileOverflowButtonContainer = styled.div`
  margin-left: auto;
`;

const DayTileOverflowIconButton = styled(IconButton)`
  display: block;
  padding: ${spacing.cozy} ${spacing.cozy} 0;
  border: 0;
  color: ${getThemeValue("gray02")};
`;

const DayTileOverflowIcon = styled(OverflowIcon)`
  ${DayTileOverflowIconButton}:hover & {
    color: ${getThemeValue("primary", "base")};
    fill: currentColor;
  }
`;

const DayTileOverflowButton = props => (
  <DayTileOverflowButtonContainer>
    <DayTileOverflowIconButton size={30} role="button" {...props}>
      <DayTileOverflowIcon size={21} />
    </DayTileOverflowIconButton>
  </DayTileOverflowButtonContainer>
);

export default DayTileOverflowButton;
