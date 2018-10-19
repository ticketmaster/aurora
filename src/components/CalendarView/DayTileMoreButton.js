import React from "react";
import styled from "styled-components";

import Link from "../Text/LinkDeprecated";

import { spacing } from "../../theme";
import { getThemeValue } from "../../utils";

const DayTileMoreButtonContainer = styled.div`
  border-top: 1px solid ${getThemeValue("gray04")};
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
