import React from "react";
import styled from "styled-components";

import { colors, typography, spacing } from "../../theme";
import constants from "../../theme/constants";

const TicketOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and ${constants.device.mobile} {
    margin-left: ${spacing.giant};
  }
`;

const TicketOptionsTitle = styled.a`
  color: ${colors.pacific.dark};
  font-size: ${typography.size.hecto};
`;

const TicketOptionsSubTitle = styled.div`
  font-size: ${typography.size.centi};
  color: ${colors.sierra.light};
`;

const TicketOptions = () => (
  <TicketOptionsContainer>
    <TicketOptionsTitle>Ticket Options Available</TicketOptionsTitle>
    <TicketOptionsSubTitle>on Partner Site</TicketOptionsSubTitle>
  </TicketOptionsContainer>
);

export default TicketOptions;
