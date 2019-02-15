import React from "react";
import styled, {css} from "styled-components";
import { string, func, bool, shape } from "prop-types";
import { EventType } from "../../components/types";
import { Button} from "../../components/Button"
import {StatusBadge} from "../../components/StatusBadge"


import { mediumAndUp } from "../../theme/mediaQueries";
import { themes } from "../../theme";
import constants from "../../theme/constants";

import Badge from "./Badge"
import BottomSheet from "./BottomSheet";
import Chevron from "./Chevron";
import Date from "./Date";
import Ellipsis from "./Ellipsis";
import Tile from "../Tile";

const {easing: {easeInOutQuad, easeInQuad}} = constants;

const Wrapper = styled(Tile)`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;

  .text-grid {
    width: 100%;
    border: 1px dashed;
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: auto;
/*     grid-template-rows: repeat(1fr); */
    grid-template-areas:
        "header header header header "
        "nav nav-l nav-r featured "
        "footer footer footer footer "
}

.main {
    grid-area: header-start / header-start / footer-start / footer-end;
    opacity: 0.5;
    justify-content: flex-start;
    flex-direction: column;
}

.grid-title {
    grid-row: featured-start / featured-end;
    grid-column: nav-l-end / featured;
    opacity: 0.5
}

.grid-badge {
    grid-area: header-start / nav-l / header-start / nav-r;
    z-index: 2;
    outline: 1px solid;
    text-align: center;
}

.grid-text {
    grid-area: nav-start / header-start / footer-start / featured-end;
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

  .expand {
    max-height: 600px !imporant;
    -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    opacity: 1;
  }

  .collapse {
      transition: max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s, opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      opacity: 0;
      height: 0;
  }

  .expandWide {
    max-width: 600px !imporant;
    -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.1s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    opacity: 1;
  }

  .collapseWide{
      transition: max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s, opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      opacity: 0;
      width: 0;
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
        max-height: 600px !imporant;
        -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
        transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
        opacity: 1;
      `
    :
      css`
        max-height: 0;
        transition: max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s, opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
        opacity: 0;
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
      <div className="text-grid">
          <Tile.Title className={isOpen ? "expand grid-title" : "collapse grid-title"}>{name}</Tile.Title>
          <Tile.Text className={isOpen ? "expand grid-text" : "collapse grid-text"}>{venue.name}</Tile.Text> 

          
          <div className={isOpen ? "expand grid-badge" : "collapse grid-badge"}>badge</div>
          <div className={!isOpen ? "expand grid-main" : "collapse grid-main"}>
              <Tile.Title >{name}</Tile.Title>
              <Tile.Text>{venue.name}</Tile.Text> 
              <Badge
                className="badge"
                label="On Sale: Mon • Jan 1 • 10 AM"
                size="uno"
              />
              
          </div>
      </div>

     
      
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



const TextWrapper = styled.div`
  max-width: none;
  flex: 1 1;

  max-height: 36px;

  * {
    margin: 0;
  }

  .addons {
    font-size: 12px;
    line-height: 15px;
    margin-top: 4px;

  }
`;


// const TextGrid = styled.div`
//   border: 1px dashed;
//   /* width: 100%; */
//     display: grid;
//     grid-template-columns: repeat(1fr);
//     grid-template-rows: repeat(1fr);
//     grid-template-areas:
//         "header header header header "
//         "nav nav nav featured "
//         "footer footer footer footer "

    
//     .main {
//         grid-area: header-start / header-start / footer-start / footer-end;
//         opacity: 0.5;
//         justify-content: flex-start;
//         flex-direction: column;
//     }

//     .title {
//         grid-row: featured-start / featured-end;
//         grid-column: nav-l-end / featured;
//         background: yellow;
//         opacity: 0.5
//     }

//     .badge {
//         grid-area: header-start / nav-l / header-start / nav-r;
//         z-index: 2;
//         outline: 1px solid;
//         text-align: center;
//     }

//     .text {
//         grid-area: nav-start / header-start / footer-start / featured-end;
//         background: green;
//         color: white;
//     }


// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   ${mediumAndUp`
//     .badge {
//       display: none;
//     }
//   `};
// `;

// const GridWhileOpen = styled.div`
 
//  text-align: center;
//  grid-template-area: "label label"
//                      "title title";

//   }

//  grid-template-rows: 15px 1fr;
//  grid-template-columns: 150px 1fr;
//  align-items: center;

//  .active-label {
//      grid-area: label;
//      grid-row: span 2;
//      line-height: 15px;
//  }

//  .active-title {
//      grid-area: title;
//      text-align: center;
//      grid-row: span 2;
//      line-height: 24px;
//  }
// `;


//  <div className={isOpen ? "expand desktop-badge" : "collapse desktop-badge"}>
//           <Badge
//             className="badge"
//             label="On Sale: Mon • Jan 1 • 10 AM"
//             size="uno"
//           />
//         </div>

 {/* <TextWrapper>
        <TextContainer isOpen={isOpen} className={isOpen ? "expandWide" : "collapseWide"} > 
          <Tile.Title >{name}</Tile.Title>
          <Tile.Text >{venue.name}</Tile.Text> 
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

        <GridWhileOpen className={isOpen ? "expand" : "collapse"}>
           <Badge
            className="active-label"
            label="On Sale: Mon • Jan 1 • 10 AM"
            size="uno"
          />
          <Tile.Title className="active-title">{name}</Tile.Title>
        </GridWhileOpen>

      </TextWrapper> */}


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