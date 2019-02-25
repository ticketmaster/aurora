import React, {PureComponent} from "react";
import styled from 'styled-components';

import {StatusBadge} from "../StatusBadge";
import {Button} from "../Button";
import Chevron from "./Chevron"
import DefaultEvent from "./Event";
import Flex from "../Flex";
import Grid from "./Grid";
import DisplayFor from "../DeviceSize";

import { expandCollapse, adjustHeight } from "../../theme/animations";
import {shouldAnimate, shouldChangeHeight} from "./utils/animation";
import {mediumAndUp} from "../../theme/mediaQueries";

const Event = styled(DefaultEvent)`
  ${expandCollapse}
  ${adjustHeight}

  .badge_active, .label_active {margin-top: -15px;}
  .badge_desktop, .label_desktop {display: none}
  ${mediumAndUp`
    .badge_desktop, .label_desktop {display: inherit}
    .badge_mobile, .label_mobile {display: none}
  `}

  .collapse {text-align: center;}

  padding: 4px 16px 4px 0;
`;

class Item extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const {id, handleToggle} = this.props;
    handleToggle(id)
  }



  renderBadge = (breakPoint, state) =>  {
    const {item: {badge: {isVisible, status, type}}} = this.props;

    if(status && type && isVisible){
      return (
        <Flex className={`badge_${breakPoint} badge_${state}`}>
            <div>
              <StatusBadge label={status} type={type} />
            </div>
        </Flex>
      )
    }
    return null;
  }

  renderLabel = (breakPoint, status) => {
    const { item: { label } } = this.props;
    if(label && label.isVisible && label.text ){
      return(
          <Event.Text
            accent="positive"
            className={`label_${breakPoint}`}
            variant="accent"
            primary
          >
            {label.text}
          </Event.Text>
      )
    }
    return null;
  }
  
  render(){
    const {
      handleToggle,
      isOpen,
      hasProducts,
      item: {
        badge,
        button,
        date,
        label,
        title,
        subTitle
      }
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
              <Event.Title>{date.title}</Event.Title>
              <Event.SubTitle>{date.subTitle}</Event.SubTitle>
            </Event.Date>
              <Event.Body grow={1}>
                <Grid>
                  <Grid.Item>
                    <Event.Body
                      className={shouldAnimate(!isOpen, "header")}
                      column
                      grow={1}
                    >
                      <Event.Title> {title} </Event.Title>
                      <Event.SubTitle> {subTitle} </Event.SubTitle>                      

                      {this.renderLabel("mobile", "inactive")}
                      {this.renderBadge("mobile", "inactive") }
                      {hasProducts && <Event.Text className="addon"> ADDONS AVAILABLE </Event.Text>}

                    </Event.Body>
                  </Grid.Item>
                  <Grid.Item>
                    <Event.Body
                      alignCenter
                      column
                      isOpen
                      justifyCenter
                      className={shouldAnimate(isOpen, "header")}
                      grow={1}
                    >
                      {this.renderLabel("mobile", "active")}
                      {this.renderBadge("mobile", "active") }

                      <Event.Title> {title} </Event.Title>
                    </Event.Body>
                  </Grid.Item>
                </Grid>
              </Event.Body>

              {!isOpen && this.renderBadge("desktop") }
              {!isOpen && this.renderLabel("desktop") }
              
            </Flex>
        </Event.Header>
        <Event.Actions column className="right__actions">
          <Button
            variant={button.variant}
            href={button.url}
          >
            {button.text}
          </Button>
        </Event.Actions>
      </Event>
    )
  }
}

export default Item;
