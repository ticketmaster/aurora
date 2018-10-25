import React from "react";
import styled from "styled-components";

import { Link } from "../Text/";

import { spacing } from "../../theme";

const DayTileMoreButtonContainer = styled.div`
  padding: 0 ${spacing.cozy} ${spacing.cozy};
`;

const DayTileMoreButtonLink = styled(Link).attrs({
  size: "uno"
})`
  display: block;
  width: 100%;
  padding: 3px ${spacing.cozy};
  text-align: center;
`;

const DayTileMoreButton = props => (
  <DayTileMoreButtonContainer>
    <DayTileMoreButtonLink {...props} />
  </DayTileMoreButtonContainer>
);

export default DayTileMoreButton;
