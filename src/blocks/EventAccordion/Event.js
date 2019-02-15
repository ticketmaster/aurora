import React from "react";
import styled from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { Button} from "../../components/Button"
import { EventType } from "../../components/types";
import { mediumAndUp } from "../../theme/mediaQueries";

import ActionArea from "./ActionArea";
import Badge from "./Badge"
import BottomSheet from "./BottomSheet";
import Chevron from "./Chevron";
import Date from "./Date";
import Ellipsis from "./Ellipsis";
import Layout from "./Layout"
import RevealAnimation from "./RevealAnimation";
import Tile from "../Tile";

import formatOnSaleText from "./utils/text";
import shouldAnimate from "./utils/animation";

const Wrapper = styled(Tile)`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;

  .chevron { display: none}
  .active-event-text { display: none;}
  ${mediumAndUp` .chevron{ display: inline; }`}

`;

const Hoverable = styled(RevealAnimation)`
  flex: 1 1;
  display: flex;
  padding-bottom: 14px;
  padding-top: 14px;
  padding-left: 8px;

  &&:hover {
    background: lavender;
  }

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
        <Layout.Collapsed  className={shouldAnimate(!isOpen)}>
          <Tile.Title className="title">{name}</Tile.Title>
          <Tile.Text className="subTitle">{venue.name}</Tile.Text> 

          {hasProducts &&
            <Tile.Link className="extras">Extras Available</Tile.Link>
          }
          <div className="badge">
            <Badge label={formatOnSaleText("On Sale: Mon • Jan 1 • 10 AM")} />
          </div> 
          { hasProducts && 
            <Tile.Link
              className="extras"
              href="#"
              id={id}
              onClick={handleToggle}
            >
              Extras Available
            </Tile.Link>
          } 
        </Layout.Collapsed>

        <Layout.Open className={shouldAnimate(isOpen)}>
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
      <Ellipsis className="cta-ellipsis" id={id} onClick={handleToggle} />
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
