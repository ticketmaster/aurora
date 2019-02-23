import React, {PureComponent} from "react";
import styled from 'styled-components';

import {Button} from "../Button";

// import Overlay from "./Overlay";
import Chevron from "./Chevron"
import DefaultEvent from "./Event";
import Flex from "../Flex";
import Grid from "./Grid";

import { expandCollapse, adjustHeight } from "../../theme/animations";
import {shouldAnimate, shouldChangeHeight} from "./utils/animation";

const Event = styled(DefaultEvent)`
  ${expandCollapse}
  ${adjustHeight}

  padding: 4px 16px 4px 0;
`
const Actions = styled(Event.Actions)`
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
          basis={1}
          className={shouldChangeHeight(isOpen,"hover--area")}
          onClick={this.handleClick}
        >
          <Flex grow={1}>
            <Chevron isOpen={isOpen}/>
            <Event.Date column>
              <Event.Title>{dateTitle}</Event.Title>
              <Event.SubTitle>{dateSubTitle}</Event.SubTitle>
            </Event.Date>
              <Event.Body grow={1}>
                <Grid>
                  <Grid.Item>
                    <Event.Body
                      className={shouldAnimate(!isOpen, "header")}
                      column
                      grow={1}
                    >
                      <Event.Title> {name} </Event.Title>
                      <Event.SubTitle> {venue.name} </Event.SubTitle>
                      <Event.Text className="addon"> ADDONS AVAILABLE </Event.Text>
                    </Event.Body>
                  </Grid.Item>
                  <Grid.Item>
                    <Event.Body
                      alignCenter
                      className={shouldAnimate(isOpen, "header")}
                      column
                      grow={1}
                    >
                      <Event.Title> {name} </Event.Title>
                      <Event.SubTitle> {venue.name} </Event.SubTitle>
                    </Event.Body>
                  </Grid.Item>
                </Grid>
              </Event.Body>
            </Flex>
        </Event.Header>
        <Actions column className="right__actions">
          <Button>See Tickets</Button>
        </Actions>
      </Event>
    )
  }
}

export default Item;
