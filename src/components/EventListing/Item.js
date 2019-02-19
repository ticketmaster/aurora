import React, {PureComponent} from "react";
import styled, {css} from 'styled-components';
import {Button} from "../Button";
import Event from "./Event";
import Chevron from "./Chevron"

import shouldAnimate from "./utils/animation";

const Extras = styled(Event.Actions)`
  display: flex;
  text-align: left;
  padding: 0;
  font-size: 12px;
  color: #026cdf;
  margin-top: 0;

  p {
    height: 14px;
    font-size: 12px;
    line-height: 12px;
  }

  & > *:first-child {
    display: flex;
    flex: 1 1;
    text-align: left;
    padding: 0;
  }

  text-align: left
  > *:hover {
    background: white!important;
  }
  ${(hasImage) =>
    hasImage
    ? 
      css`margin-left: 159px;`
    :
      css`margin-left: 118px;`
   }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 16px 4px 0;

  .right__actions {
    margin: 13px 0 0;
    width: 124px;
    padding: 0;
  }
  .main button:active {
    outline: none;
  }
`;

const MainArea = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1;
  border: none;
  background: transparent;
`;

class Item extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
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
      <Wrapper>
        <Event>
          <Event.Header
            className="main"
            variant="transparent"
            onClick={this.handleClick}
          >
            <MainArea>
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
          </Event.Header>
          <Event.Actions
            direction="column"
            align="flex-end"
            className="right__actions"
          >
            <Button>See Tickets</Button>
          </Event.Actions>
        </Event>
        <Extras className="extras">
          <Event.Link
            role="button"
            href="#"
            variant="transparent"
            onClick={this.handleClick}
            size="small"
          >
            Extras Available
          </Event.Link>
          {/* <Event.Text onClick={this.handleClick}>Extras Available</Event.Text> */}
          <Event.Text>On Partner Site</Event.Text>
        </Extras>
      </Wrapper>
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