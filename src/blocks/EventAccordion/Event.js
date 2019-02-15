import React from "react";
import styled, {css} from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { EventType } from "../../components/types";
import { Button} from "../../components/Button"

import {StatusBadge} from "../../components/StatusBadge"


import { mediumAndUp } from "../../theme/mediaQueries";

import Badge from "./Badge"
import BottomSheet from "./BottomSheet";
import Chevron from "./Chevron";
import Date from "./Date";
import Ellipsis from "./Ellipsis";

import Tile from "../Tile";
import Layout from "./Layout"


const Wrapper = styled(Tile)`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;

  ${mediumAndUp`
    .grid-badge {
      display: inline;
    }
  `};

  .addons {  
    font-size: 12px;
    line-height: 15px;
    margin-top: 4px;

  }

  .chevron {
    display: none
  }

  .desktop-badge {
    display: none;
  }
  .active-event-text {
    display: none;
  }

  ${mediumAndUp`
      .chevron{
        display: inline;
      }

      .desktop-badge {
        display: flex;
        flex: 1 1;
        align-items: center;
        justify-content: flex-end;
      }

  `}

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

  .expand {
    max-width: 600px;
    max-height: 600px !imporant;
    -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    opacity: 1;
  }

  .collapse {
      max-height: 0;
      transition: max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s, opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      opacity: 0;
  }
`;

const ActionArea = styled.div`
  margin-left:16px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin-top: 12px;
  grid-template-areas: "gutter button"
                       "gutter text";
  
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
      
      <Layout>
        <Layout.Collapsed  className={!isOpen ? "expand open" : "collapse open"}>
          <Tile.Title className="title">{name}</Tile.Title>
          <Tile.Text className="subTitle">{venue.name}</Tile.Text> 

          {hasProducts &&
            <Tile.Link className="extras">Extras Available</Tile.Link>
          }
          
          <div className="badge">
            <Badge
              className="badge"
              label="On Sale: Mon • Jan 1 • 10 AM"
              size="uno"
            />
          </div> 
          
          { hasProducts && 
            <Tile.Link className="extras" href="#" id={id} onClick={handleToggle}>Extras Available</Tile.Link>
          } 

        </Layout.Collapsed>

        <Layout.Open className={isOpen ? "expand closed" : "collapse closed"}>
          <Tile.Title className="title">{name}</Tile.Title>
          <div className="badge">
            <Badge className="badge" label="On Sale: \n Mon • Jan 1 • 10 AM" size="uno" />
          </div> 
        </Layout.Open>

      </Layout>
    </Hoverable>
    
    <ActionArea>
      <Button className="cta-button"> See Tickets </Button>
      <Tile.Text className="cta-text" size="uno"> On Partner Site </Tile.Text>
      <Ellipsis
        className="cta-ellipsis"
        color="#000"
        direction="right"
        size={15}
        id={id}
        onClick={handleToggle}
      />
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

{/* <div className="badgeIcon">
        <Badge
          className="badge"
          label="On Sale: Mon • Jan 1 • 10 AM"
          size="uno"
        />
      </div> */}
{/* <div className={isOpen ? "expandWide" : "collapseWide"}>
            <Badge
              className="grid-badge"
              label="On Sale: Mon • Jan 1 • 10 AM"
              size="uno"
            />
          </div> */}

