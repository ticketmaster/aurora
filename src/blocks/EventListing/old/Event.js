import React from "react";
import styled, { css } from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { Button } from "../../components/Button";
import { EventType } from "../../components/types";
import {ResponsiveImage} from "../../components/Image"
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

const Wrapper = styled(RevealAnimation)`
  display: flex;
  flex-direction: column;

   .innerWrapper {
     display: flex;
     padding: 4px 0;
     /* flex-direction: column; */
     width: 100%;
   }


  .main {
    display: flex;
    padding: 12px 0;
    width: 100%;
    flex: 1 1;
    border: none;
    background: white;
  }

  .main:hover {
    background-color: rgba(2, 108, 223, 0.1);
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
  }

  .badge{
    text-align: right;
    span {
      display: block
    }
  }

  .section {
    /* grid-area: section;
    text-align: left; */
  }
  .cta {
    /* grid-area: cta; */
    padding: 13px 16px;
    text-align:right;
    p {
      margin-top: 4px;
    }
  }
  .chevron {
    width: 46px;
    /* grid-area: chevron; */
  }
  
  .extra {
    p {
      color: #026cdf
    }
  }

  ${({hasImage}) =>
    hasImage
    ?
      css`
        .date {
          margin: 0px 8px 0 16px;
        }      
      `
    :
      css`
        .date {
          margin: 0px 8px 0px 0px;
        }      
      `
  }

`;

const Extras = styled(Tile.Text)`
  text-align: left;
  padding: 0;
  p {
    color: #026cdf
  }
  :hover {
    background: white;
  }
  
`

const Section = styled.div`
  flex: 1 1;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  text-align: left;

  ${({ isOpen }) =>
    isOpen &&
    css`
    flex-direction: column-reverse;
    align-items: center;
    flex: 1 1;
    display: flex;
    justify-content: center;
    > p {
      position: initial;
      display: flex;
      flex: 2 2;
      width: 100%;
      justify-content: center;
      height: 20px;
    }

      .badge {
          display: flex;
          flex: 1 1;
          justify-content: center;
        .bagde {
          position: relative;
        }
        span  {display: inline;}
      }
      
    `};
`;

const Image = styled.img`
 height: 46px;
 width: 82px;
 margin: -4px 16px -4px 0px;
`

const Event = ({
  animate = true,
  handleToggle,
  id,
  isOnSale = false,
  isSoldOut = false,
  isOpen = false,
  image,
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
    <div className="innerWrapper">
      <button className="main" id={id} onClick={handleToggle}>
        <Chevron
          id={id}
          isOpen={isOpen}
          className="chevron"
          name={name}
          onClick={handleToggle}
        />
        <Image src="https://placekitten.com/g/826/465" alt="Test Kitten" />
        <Date className="date">
          <Tile.Title>{dateTitle}</Tile.Title>
          <Tile.Text>{dateSubTitle}</Tile.Text>
        </Date>
        
        <Section className={shouldAnimate(isOpen, "section")} isOpen={isOpen}>
          <Tile.Title>{name}</Tile.Title>
          <div className='badge'>
            <Badge label="Mon • Jan 1 • 10 AM"/>
          </div>
        </Section>
        <Section  className={shouldAnimate(!isOpen, "section")}>
          <Tile.Title>{name}</Tile.Title>
          <Tile.Text>{venue.name}</Tile.Text>
          {hasProducts &&
            <div className={shouldAnimate(!isOpen, 'extra')}>
              <Extras
                size="uno"
                id={id}
                onClick={handleToggle}
              >Extras Available</Extras>
            </div> 
          }
        </Section>

        <div className={shouldAnimate(!isOpen, 'badge')}>
          <Badge label="Mon • Jan 1 • 10 AM"/>
        </div>
      </button>
      <div className="cta">
        <Button className="cta-button">See Tickets</Button>
      </div>
    </div>
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
    // <div className="badge">
    //   <Badge label="Mon • Jan 1 • 10 AM"/>
    // </div>

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
