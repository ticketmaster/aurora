import React from "react";
import styled from "styled-components";

import { Button } from "../Button";

import { spacing } from "../../theme";

const DayTileButtonGroup = styled.div`
  padding: 0 ${spacing.cozy} ${spacing.cozy};
`;

const DayTileButtonContainer = styled.div`
  ${DayTileButtonGroup} > & + & {
    margin-top: ${spacing.cozy};
  }
`;

const DayTileButton = props => (
  <DayTileButtonContainer>
    <Button noTransform size="small" {...props} />
  </DayTileButtonContainer>
);
DayTileButton.Group = DayTileButtonGroup;

export default DayTileButton;
