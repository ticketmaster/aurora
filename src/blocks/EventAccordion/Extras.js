import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "../../components/Text";
import { Row as AuroraRow } from "../../components/Grid";

// import spacing from "../../theme/spacing";

const ExtrasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;
`;

const ExtrasTitle = styled(Text)`
  margin: 0;
`;

const Row = styled(AuroraRow)`
  margin: 0 !important;
`;

const TicketOptions = styled(Row)``;

const VenueInfo = styled(Row)``;

const LineUp = styled(Row)``;

const AddOns = styled(Row)``;

const More = styled(Row)``;

const Extras = ({ addOns, lineUp, more, venueInfo }) => (
  <ExtrasWrapper>
    {lineUp && (
      <LineUp>
        <ExtrasTitle primary size="kilo" weight="semiBold" tag="p">
          Line UP
        </ExtrasTitle>
        Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero
        voluptatem eum in asperiores cum voluptas.
      </LineUp>
    )}
    {venueInfo && (
      <VenueInfo>
        <ExtrasTitle primary size="kilo" weight="semiBold" tag="p">
          VenueInfo
        </ExtrasTitle>
        Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero
        voluptatem eum in asperiores cum voluptas.
      </VenueInfo>
    )}
    {addOns && (
      <AddOns>
        <ExtrasTitle primary size="kilo" weight="semiBold" tag="p">
          AddOns
        </ExtrasTitle>
        Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero
        voluptatem eum in asperiores cum voluptas.
      </AddOns>
    )}
    {more && (
      <More>
        <ExtrasTitle primary size="kilo" weight="semiBold" tag="p">
          More
        </ExtrasTitle>
        Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero
        voluptatem eum in asperiores cum voluptas.
      </More>
    )}
  </ExtrasWrapper>
);

export default Extras;
