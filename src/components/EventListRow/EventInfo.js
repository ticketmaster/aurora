import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, typography, constants } from "../../theme";

const EventInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and ${constants.device.mobile} {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledVenueName = styled.div`
  color: ${colors.cascade.dark};
  font-size: ${typography.size.hecto};
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media only screen and ${constants.device.mobile} {
    font-size: ${typography.size.kilo};
  }
`;

const StyledEventName = StyledVenueName.extend`
  color: ${colors.cascade.base};
  } 
  
  @media only screen and ${constants.device.mobile} {
    color: ${colors.cascade.dark};
    font-size: ${typography.size.hecto};
    display: none;
  }

  @media only screen and ${constants.device.tablet} {
    display: flex;
  }
`;

const EventInfo = ({ eventName = "", venueName = "" }) => (
  <EventInfoContainer>
    <StyledVenueName>{venueName}</StyledVenueName>
    <StyledEventName>{eventName}</StyledEventName>
  </EventInfoContainer>
);

EventInfo.propTypes = {
  eventName: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired
};

export default EventInfo;
