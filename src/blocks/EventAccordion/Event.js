import React from "react";
import styled from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { EventType } from "../../components/types";

import Chevron from "./Chevron";
import Tile from "../Tile";

import {
  EventDate,
  Container,
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
  handleToggle,
  id,
  isOpen,
  item: {
    dates: {
      status: { code }
    },
    datesFormatted: { dateSubTitle, dateTitle },
    name,
    venue
  }
}) => (
  <Wrapper isOpen={isOpen}>
    <Container className="Container">
      <Chevron id={id} isOpen={isOpen} onClick={handleToggle} />
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
    </Container>
  </Wrapper>
);

Event.propTypes = {
  handleToggle: func.isRequired,
  id: string.isRequired,
  isOpen: bool.isRequired,
  item: shape({ ...EventType }).isRequired
};

export default Event;
