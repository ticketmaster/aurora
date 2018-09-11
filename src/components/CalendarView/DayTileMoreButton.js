import React from "react";
import styled from "styled-components";

import { Button } from "../Button";

import { colors } from "../../theme";

const DayTileMoreButtonContainer = styled.div`
  border-top: 1px solid ${colors.onyx.muted};
`;

const DayTileMoreButton = props => (
  <DayTileMoreButtonContainer>
    <Button size="small" variant="transparent" {...props} />
  </DayTileMoreButtonContainer>
);

export default DayTileMoreButton;
