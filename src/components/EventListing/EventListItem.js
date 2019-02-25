import React, {PureComponent} from "react";
import styled from 'styled-components';

import {StatusBadge} from "../StatusBadge";
import {Button} from "../Button";
import Chevron from "./Chevron"
import DefaultEvent from "./Event";
import Ellipsis from "./Event/Ellipsis";
import Flex from "../Flex";
import Grid from "./Grid";

import { expandCollapse, adjustHeight } from "../../theme/animations";
import {shouldAnimate, shouldChangeHeight} from "./utils/animation";
import {mediumAndUp} from "../../theme/mediaQueries";

const Event = styled(DefaultEvent)`
  ${expandCollapse}
  ${adjustHeight}

  div:empty {
    display: none;
  }

  .badge_active, .label_active {margin-top: -15px;}

  .badge_desktop, .label_desktop {display: none}
  
  .button_cta {display: none}
  
  .right__actions {width: 14px; padding-right: 16px;}

  ${mediumAndUp`
    .badge_desktop, .label_desktop { display: inherit }
    
    .badge_mobile, .label_mobile { display: none }
    
    .button_cta {
      align-items: center;
      display: inherit
      justify-content: center;
      text-align: center;
    }
    
    .ellipsis_cta { display: none }
    
    .right__actions { width: auto; }
  `}

  .collapse {text-align: center;}
`;

class EventListItem extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const {id, handleToggle} = this.props;
    handleToggle(id)
  }

  renderBadge = (breakPoint, state) =>  {
    const {item: {badge: {isVisible, status, type}} } = this.props;

    if(status && type && isVisible){
      return (
        <Flex
          alignCenter={breakPoint === "desktop" && state === "inactive"}
          className={`badge_${breakPoint} badge_${state} `}
        >
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
    const [onSaleText, time] = label && label.text && label.text.split(": ");
    console.log('time: ', time);
    console.log('onSaleText: ', onSaleText);
    const isDesktop = breakPoint !== "mobile";
    if(label && label.isVisible && label.text ){
      return(
          <Event.Text
            accent="positive"
            className={`label_${breakPoint}`}
            variant="accent"
            primary
          >
            {isDesktop &&
              <Flex alignEnd column>
                <Event.Text>{onSaleText}: <br/> </Event.Text>
                <Event.Text>{time}</Event.Text>
              </Flex>
            }
            {!isDesktop && label.text}
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
      <Event className="eventList_item">
        <Event.Header
          basis={1}
          className={shouldChangeHeight(isOpen,"hover--area")}
          onClick={this.handleClick}
        >
          <Flex grow={1} alignCenter>
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

                      {label && this.renderLabel("mobile", "inactive")}
                      {badge && this.renderBadge("mobile", "inactive") }

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
                      {label && this.renderLabel("desktop", "active")}
                      {badge && this.renderBadge("desktop", "active") }

                      <Event.Title> {title} </Event.Title>
                    </Event.Body>
                  </Grid.Item>
                </Grid>
              </Event.Body>

              <div className={shouldAnimate(!isOpen, "header")}>
                {badge && this.renderBadge("desktop", "inactive")}
                {label && this.renderLabel("desktop", "inactive")}
              </div>
              
          </Flex>
        </Event.Header>
        <Event.Actions column className="right__actions">
          <Button
            className="button_cta"
            variant={button.variant}
            href={button.url}
          >
            {button.text}
          </Button>
          <Ellipsis className="ellipsis_cta" />
        </Event.Actions>
      </Event>
    )
  }
}

export default EventListItem;
