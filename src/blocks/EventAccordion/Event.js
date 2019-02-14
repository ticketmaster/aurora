import React from "react";
import styled, {css} from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { EventType } from "../../components/types";
import { Button} from "../../components/Button"
import constants from "../../theme/constants";

import { mediumAndUp } from "../../theme/mediaQueries";

import Chevron from "./Chevron";
import Date from "./Date";
import Ellipsis from "./Ellipsis";
import Tile from "../Tile";

const {easing: {easeInOutQuad, easeInQuad}} = constants;

const Wrapper = styled(Tile)`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;
  /* && > div:nth-child(n + 2) {
    margin-left: 16px;
  } */
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


const Hoverable = styled.div`
  flex: 1 1;
  display: flex;
  padding-bottom: 14px;
  padding-top: 14px;
  padding-left: 8px;

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

const ActionArea = styled.div`
 /* background: lavender; */
  margin-left:16px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin-top: 12px;
  width: 16px;
  grid-template-areas:
                        "button button"
                        "text text";
  
  .cta-button {
    display:none;
    grid-area: button;
    max-height: 36px;
    width: 102px;
  }

  .cta-text {
    display: none;
    grid-area: text;
    text-align: right;
    margin-top: 4px;
  }

  ${mediumAndUp`
    margin-right: 16px;
    width: auto;
    .cta-button, .cta-text {
      display: inline;
    }
  `}
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
    <Chevron
      id={id}
      isOpen={isOpen}
      onClick={handleToggle}
    /> 
    <Hoverable className="event">
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
    </Hoverable>
    <ActionArea>
      <Button className="cta-button">cta</Button>
      <Tile.Text
        className="cta-text"
        size="uno"
      >On Partner Site</Tile.Text>
      <Ellipsis width={26} />
    </ActionArea>
  </Wrapper>
);

Event.propTypes = {
  handleToggle: func.isRequired,
  id: string.isRequired,
  isOpen: bool.isRequired,
  item: shape({ ...EventType }).isRequired
};

export default Event;
