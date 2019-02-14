import React from "react";
import styled, {css} from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { EventType } from "../../components/types";
import { Button} from "../../components/Button"
import constants from "../../theme/constants";

import { themes } from "../../theme";

import { mediumAndUp } from "../../theme/mediaQueries";
import {StatusBadge} from "../../components/StatusBadge"

import Badge from "./Badge"
import Chevron from "./Chevron";
import Date from "./Date";
import Ellipsis from "./Ellipsis";
import Tile from "../Tile";

const {easing: {easeInOutQuad, easeInQuad}} = constants;

const Wrapper = styled(Tile)`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;

  .chevron {
    display: none
  }

  .desktop-badge {
    display: none;
  }
  .active-event-text {
    display: none;
  }

  .open {
    transition: opacity 0.3s ${easeInOutQuad} 0.2s;
    height: auto;
    width: auto;
    opacity: 1;
  }

  .closed {
    transition: opacity 0.1s ${easeInQuad},
    height 0.1s ${easeInQuad};
    height: 0;
    width: 0;
    opacity: 0;

  }

  ${mediumAndUp`
      .chevron{
        display: inline;
      }

      .desktop-badge {
        display: flex;
        max-height: 36px;
        align-items: center;
      }

  `}

  ${({isOpen}) => 
   isOpen &&
    css`
      .desktop-badge {
        display:none;
      }
      .active-event-text {
        display: inline;
      }

      .
    `
  }

`;

const Animate = styled.div`
  align-items: left;
  height: ${({isOpen}) => isOpen  ? "auto": "0" };
  ${({isOpen}) =>
    isOpen
    ?
      css`
        align-items: center;
        transition: opacity 0.1s ${easeInQuad},
        height 0.1s ${easeInQuad};
        height: 0;
        width: 0;
        opacity: 0;
      `
    :
      css`
        transition: opacity 0.3s ${easeInOutQuad} 0.2s;
        height: auto;
        width: auto;
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

  .addons {
    font-size: 12px;
    line-height: 15px;
    margin-top: 4px;

  }
`;

const TextContainer = styled(Animate)`
  display: flex;
  flex-direction: column;

  ${mediumAndUp`
    .badge {
      display: none;
    }
  `};
`;

const GridWhileOpen = styled.div`
 max-height: 300px;
 visibility: visible;
 height: 36px;
 text-align: center;
 grid-template-area: "label label"
                     "title title";

  ${(isOpen) =>
    isOpen &&
    css`
      /* temp for testing*/
      /* background: blue; */
    `
  }

 grid-template-rows: 15px 1fr;
 grid-template-columns: 150px 1fr;
 align-items: center;

 .active-label {
     grid-area: label;
     grid-row: span 2;
     line-height: 15px;
 }

 .active-title {
     grid-area: title;
     text-align: center;
     grid-row: span 2;
     line-height: 24px;
 }
`;

const ActionArea = styled.div`
  margin-left:16px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin-top: 12px;
  width: 16px;
  grid-template-areas: "button button"
                       "text text";
  
  .cta-button {
    display:none;
    grid-area: button;
    max-height: 36px;
    width: 102px;
  }

  .cta-ellipsis {
    display: inline;
  }

  .chevron {
    display: hidden;
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

    .cta-button, .cta-text, .chevron {
      display: inline;
    }
    .cta-ellipsis {
      display: none;
    }
  `}
`;

const Event = ({
  handleToggle,
  id,
  isOnSale = false,
  isOpen = false,
  item: {
    dates: {
      status: { code }
    },
    datesFormatted: { dateSubTitle, dateTitle },
    name,
    venue
  },
  hasProducts = false
}) => (
  <Wrapper isOpen={isOpen}>
    <Chevron
      id={id}
      isOpen={isOpen}
      className="chevron"
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
          <Badge
            className="badge"
            label="On Sale: Mon • Jan 1 • 10 AM"
            size="uno"
          />

          {hasProducts &&
            <Tile.Link
              className="addons"
              href="#"
              id={id}
              onClick={handleToggle}
            >
              EXTRAS AVAILABLE
            </Tile.Link>
          }
        </TextContainer>

        <GridWhileOpen className={isOpen ? "open" : "closed"}>
           <Badge
            className="active-label"
            label="On Sale: Mon • Jan 1 • 10 AM"
            size="uno"
          />
          <Tile.Title className="active-title">{name}</Tile.Title>
        </GridWhileOpen>

      </TextWrapper>
       <div className={isOpen ? "closed desktop-badge" : "open desktop-badge"}>
          <Badge
            className="badge"
            label="On Sale: Mon • Jan 1 • 10 AM"
            size="uno"
          />
        </div>

    </Hoverable>
    <ActionArea>
      <Button className="cta-button">See Tickets</Button>
      <Tile.Text
        className="cta-text"
        size="uno"
      >On Partner Site</Tile.Text>
      <Ellipsis size={15} color="#000" direction="right"className="cta-ellipsis" />
    </ActionArea>
  </Wrapper>
);

Event.propTypes = {
  handleToggle: func.isRequired,
  hasProducts: bool,
  id: string.isRequired,
  isOpen: bool.isRequired,
  item: shape({ ...EventType }).isRequired
};

export default Event;


// max-height: 300px;
// visibility: visible;
// display: grid;
// height: 36px;
// text-align: center;
// /*   grid-template-areas: "label label" */
// /*                        "text text"; */
// grid-template-areas: "text text";
// grid-template-rows: 15px 1fr;
// grid-template-columns: 150px 1fr;
// align-items: center;

// .label {
//     grid-area: label;
//     background: grey;
//     line-height: 18px;
// }

// .title {
//     grid-area: text;
//     grid-row: span 2;
//     line-height: 20px;
//     background: lightgrey;
// }