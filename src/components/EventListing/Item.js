import React, {PureComponent} from "react";
import styled from 'styled-components';

import {Button} from "../Button";

import Animation from "./Animation";
import Chevron from "./Chevron"
import DefaultEvent from "./Event";
import Flex from "../Flex"

import { expandCollapse, accordionSectionText } from "../../theme/animations";
import shouldAnimate from "./utils/animation";

const Event = styled(DefaultEvent)`
  ${accordionSectionText}
  padding: 4px 16px 4px 0;
`
const Actions = styled(Event.Actions)`
  margin: 13px 0 0;
  width: 124px;
  padding: 0;
`

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
        <Event>
          <Event.Header
            className="main"
            variant="transparent"
            onClick={this.handleClick}
          >
            <Flex grow={1}>
              <Chevron isOpen={isOpen}/>
              <Event.Date>
                <Event.Title>{dateTitle}</Event.Title>
                <Event.Text>{dateSubTitle}</Event.Text>
              </Event.Date>
                <Event.Body grow={1} column>
                  <Animation>
                    <Animation.Item column  className={shouldAnimate(!isOpen, "section")}>
                      <Event.Title>
                        {name}
                      </Event.Title>
                      <Event.Text>
                        {venue.name}
                      </Event.Text>
                    </Animation.Item>
                    <Animation.Item
                      column
                      alignCenter
                       className={shouldAnimate(isOpen, "section")}
                    >
                      <Event.Title>
                        {name}
                      </Event.Title>
                      <Event.Text>
                        {venue.name}
                      </Event.Text>
                    </Animation.Item>
                  </Animation>
                </Event.Body>

                 {/* <Event.Body
                  className={shouldAnimate(isOpen, "section")}
                  grow={1}
                  alignCenter
                  column
                >
                  <Event.Title>{name}</Event.Title>
                  <Event.Text>{venue.name}</Event.Text>
                  
                </Event.Body> */}
              </Flex>
          </Event.Header>
          <Actions
            direction="column"
            align="flex-end"
            className="right__actions"
          >
            <Button>See Tickets</Button>
          </Actions>
        </Event>
    )
  }
}

export default Item;
