import React, {PureComponent} from "react";
import styled, {css} from 'styled-components';
import {Button} from "../Button";
import Event from "./Event";
import Chevron from "./Chevron"

import shouldAnimate from "./utils/animation";

const Extras = styled(Event.Text)`
  text-align: left;
    padding: 0;
    p {
      color: #026cdf
    }
    :hover {
      background: white;
    }
  ${(hasImage) =>
    hasImage
    ? 
      css`margin-left: 148px;`
    :
      css`margin-left: 118px;`
   }
`

const MainArea = styled.button`display:inline;`;

class Item extends PureComponent {
  handleClick = () => {
    const {id, handleToggle} = this.props;
    handleToggle(id)
  }
  render(){
    const {
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
    } = this.props;
    return(
      <Event>
        <Event.Header>
          <MainArea className="main" onClick={this.handleClick}>
            <Chevron isOpen={isOpen}/>
            
            <Event.Date>
              <Event.Title>{dateTitle}</Event.Title>
              <Event.Text>{dateSubTitle}</Event.Text>
            </Event.Date>

            <Event.Body
              className={shouldAnimate(!isOpen, "section")}
              direction="column"
              isOpen={isOpen}
            >
              <Event.Title>{name}</Event.Title>
              <Event.Text>{venue.name}</Event.Text>
            </Event.Body>

            <Event.Body
              className={shouldAnimate(isOpen, "section")}
              direction="column"
              isOpen={isOpen}
            >
              <Event.Title>{name}</Event.Title>
              <Event.Text>{venue.name}</Event.Text>
            </Event.Body>
          </MainArea>
          <Event.Actions direction="column" align="flex-end">
            <Button>See Tickets</Button>
            <Event.Text>On Partner Site</Event.Text>
          </Event.Actions>
        </Event.Header>
        <Extras
            className="extras"
            onClick={this.handleClick}
            hasImage={image}
          >
          EXTRAS AVAILABLE
        </Extras>
      </Event>
    )
  }
}

// const Item = ({
//   handleToggle,
//   id,
//   isOnSale = false,
//   isSoldOut = false,
//   isOpen = false,
//   image,
//   item: {
//     dates: {
//       status: { code }
//     },
//     datesFormatted: { dateSubTitle, dateTitle },
//     name,
//     venue
//   },
//   hasProducts = false
// }) => (
  // <Event>
  //   <Event.Header>
  //     <MainArea
  //       role="button"
  //       className="main"
  //       onClick={handleClick}
  //     >
  //       <Chevron />
        
  //       <Event.Date>
  //         <Event.Title>{dateTitle}</Event.Title>
  //         <Event.Text>{dateSubTitle}</Event.Text>
  //       </Event.Date>

  //       <Event.Body direction="column">
  //         <Event.Title>Title</Event.Title>
  //         <Event.Text>subTitle</Event.Text>
  //       </Event.Body>

  //     </MainArea>
  //     <Event.Actions>
  //       button
  //     </Event.Actions>
  //   </Event.Header>

//   </Event>
// );

export default Item;