import React from "react";
import styled, {css} from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { EventType } from "../../components/types";
import constants from "../../theme/constants";

import Chevron from "./Chevron";
import Date from "./Date";
import Tile from "../Tile";

const {easing: {easeInOutQuad, easeInQuad}} = constants;

const Wrapper = styled(Tile)`
  display: flex;
  flex-direction: row;
  /* padding: 16px 16px 16px 47px; */
  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }
`;

const Animate = styled.div`
  align-items: left
  ${({isOpen}) =>
    isOpen
    ?
      css`
        align-items: center;
        transition: opacity 0.1s ${easeInQuad},
        height 0.1s ${easeInQuad};
        height: 0;
        opacity: 0;
      `
    :
      css`
        transition: opacity 0.3s ${easeInOutQuad} 0.2s;
        height: auto;
        opacity: 1;
      `
  };
`;


const Container = styled.div`
  flex: 1 1;
  display: flex;
  padding-bottom: 14px;
  padding-top: 14px;

  &&:hover {
    background: lavender;
  }
`;

const TextWrapper = styled.div`
  max-width: none;
  flex: 1 1;

  * {
    margin: 0;
  }

  && *:nth-child(3) {
    margin-top: 4px;
  }
`;

const TextContainer = styled(Animate)`
  display: flex;
  flex-direction: column;
`;

const Event = ({
  handleToggle,
  id,
  isOpen = false,
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
    <Container className="event">
      <Chevron
        id={id}
        isOpen={isOpen}
        onClick={handleToggle}
      /> 
      <Date>
        <Tile.Title>{dateTitle}</Tile.Title>
        <Tile.Text>{dateSubTitle}</Tile.Text>
      </Date>

      <TextWrapper>
        <TextContainer isOpen={isOpen}>
          <Tile.Title>{name}</Tile.Title>
          <Tile.Text>{venue.name}</Tile.Text>  
        </TextContainer>

        <TextContainer isOpen={!isOpen}>
          <Tile.Title>{name}</Tile.Title>
        </TextContainer>
      </TextWrapper>

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
