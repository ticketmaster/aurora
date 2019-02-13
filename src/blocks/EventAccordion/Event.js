import React from "react";
import { string, func, bool, shape } from "prop-types";
import styled from "styled-components";
import { EventType } from "../../components/types";
import Chevron from "./Chevron";
import Tile from "../Tile";

import {
  ChevronWrapper,
  EventDate,
  EventInfoWrapper,
  NameAndTitleWrapper,
  EventTextWrapper
} from "./styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 16px 16px 16px 47px; */

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }
`;

const Event = ({
  handleToggle = () => {},
  id = null,
  isOpen = false,
  item: {
    dates: {
      status: { code = null }
    },
    datesFormatted: { dateSubTitle = null, dateTitle = null },
    name = null,
    venue = null
  }
}) => (
  <Wrapper className="Wrapper" isOpen={isOpen}>
    <EventInfoWrapper className="eventInfoWrapper">
      <ChevronWrapper
        className="chevronWrapper"
        isOpen={isOpen}
        id={id}
        variant="transparent"
        onClick={handleToggle}
      >
        <Chevron
          className="chevron"
          onClick={handleToggle}
          id={id}
          color="000"
          isopen={String(isOpen)}
          size={15}
        />
      </ChevronWrapper>

      <EventDate>
        <Tile.Title>{dateTitle}</Tile.Title>
        <Tile.Text>{dateSubTitle}</Tile.Text>
      </EventDate>

      <EventTextWrapper>
        <NameAndTitleWrapper className="nameEventWrapper" isOpen={isOpen}>
          <Tile.Title>{name}</Tile.Title>
          <Tile.Text>{venue.name}</Tile.Text>
        </NameAndTitleWrapper>
      </EventTextWrapper>
    </EventInfoWrapper>
  </Wrapper>
);

Event.propTypes = {
  handleToggle: func.isRequired,
  id: string.isRequired,
  isOpen: bool.isRequired,
  item: shape({ ...EventType }).isRequired
};

export default Event;
