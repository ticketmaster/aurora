import React from "react";
import styled, { css } from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { Button } from "../../components/Button";
import { EventType } from "../../components/types";
// import { mediumAndUp } from "../../theme/mediaQueries";

import ActionArea from "./ActionArea";
import Badge from "./Badge";
import BottomSheet from "./BottomSheet";
import Chevron from "./Chevron";
import Date from "./Date";
import Ellipsis from "./Ellipsis";
import Layout from "./Layout";
import RevealAnimation from "./RevealAnimation";
import Tile from "../Tile";
import CollapsedLayout from "./Layout/Collapsed";

import shouldAnimate from "./utils/animation";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main main  cta"
    ".    extra cta";
  grid-template-columns: 162px minmax(min-content, 1fr);
  grid-gap: 4px;
  /* background-color: #2196F3; */
  padding: 4px 0;

  .main {
    border: none;
    background: white;
    grid-area: main;
    display: grid;
    grid-template-areas: "chevron date section badge cta";
    grid-template-columns: 46px 116px minmax(min-content, 1fr) auto;
    /* background-color: lightgrey; */
    padding: 12px 0;
  }

  .main:hover {
    background-color: rgba(2, 108, 223, 0.1);
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
  }

  .section {
    grid-area: section;
    text-align: left;
  }
  .cta {
    grid-area: cta;
    padding: 13px 16px;
  }
  .chevron {
    grid-area: chevron;
  }
  .extra {
    grid-area: extra;
  }
`;

const Section = styled(RevealAnimation)`
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-direction: column-reverse;
    `};
`;

const Event = ({
  animate = true,
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
    <button className="main" id={id} onClick={handleToggle}>
      <Chevron
        id={id}
        isOpen={isOpen}
        className="chevron"
        name={name}
        onClick={handleToggle}
      />
      <Date className="date">
        <Tile.Title>{dateTitle}</Tile.Title>
        <Tile.Text>{dateSubTitle}</Tile.Text>
      </Date>
      <Section className={shouldAnimate(isOpen, "section")} isOpen={isOpen}>
        <Tile.Title className="title" id={`${id}-event`}>
          {name}
        </Tile.Title>
        <Tile.Text className="subTitle">{venue.name}</Tile.Text>
      </Section>
    </button>
    <div className="cta">
      <Button className="cta-button">See Tickets</Button>
    </div>
    {/* <div className="extra">
      <p>badge</p>
  </div> */}
  </Wrapper>
);

Event.propTypes = {
  animate: bool,
  handleToggle: func.isRequired,
  hasProducts: bool,
  id: string.isRequired,
  isOpen: bool.isRequired,
  item: shape({ ...EventType }).isRequired
};

export default Event;
// <CollapsedLayout  className={shouldAnimate(!isOpen)}>
//   <Hoverable className="event" href="#">
// <Chevron
//   id={id}
//   isOpen={isOpen}
//   className="chevron"
//   name={name}
//   onClick={handleToggle}
// />

// <Tile.Title className="title" id={`${id}-event`} >{name}</Tile.Title>
// <Tile.Text className="subTitle">{venue.name}</Tile.Text>
//   </Hoverable>

//   {hasProducts &&
//     <Tile.Link className="extras">Extras Available</Tile.Link>
//   }
//     <div className="badge">
//       <Badge label="Mon • Jan 1 • 10 AM"/>
//     </div>

//   { hasProducts &&
//     <Tile.Link
//       className="extras"
//       href="#"
//       id={id}
//       onClick={handleToggle}
//     >
//       Extras Available
//     </Tile.Link>
//   }
//   <ActionArea>

//     <Tile.Text className="cta-text" size="uno"> On Partner Site </Tile.Text>
//     <Ellipsis className="cta-ellipsis" id={id} onClick={handleToggle} />
//   </ActionArea>
// </CollapsedLayout>

{
  /* <Chevron
            id={id}
            isOpen={isOpen}
            className="chevron"
            name={name}
            onClick={handleToggle}
          /> 
          <Date>
            <Tile.Title>{dateTitle}</Tile.Title>
            <Tile.Text>{dateSubTitle}</Tile.Text>
          </Date> */
}

{
  /* <Layout.Open className={shouldAnimate(isOpen)}>
          <Tile.Title className="title">{name}</Tile.Title>
          <Badge className="badge" label="Mon • Jan 1 • 10 AM" size="uno" />
        </Layout.Open> */
}
