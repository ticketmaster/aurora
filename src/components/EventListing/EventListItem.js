import React, { PureComponent } from "react";
import styled, {css} from "styled-components";

import { Button } from "../Button";
import { StatusBadge } from "../StatusBadge";

import Chevron from "./Chevron";
import DefaultEvent from "./Event";
import Ellipsis from "./Event/Ellipsis";
import Flex from "../Flex";
import Grid from "./Grid";
import Modal from "./Modal"
import ModalWithPanelInfo from "./ModalWithPanelInfo";

import { expandCollapse, adjustHeight, ex } from "../../theme/animations";
import { mediumAndUp } from "../../theme/mediaQueries";
import { shouldAnimate, shouldChangeHeight, collapse, expand } from "./utils/animation";

class EventListItem extends PureComponent {
  handleClick = e => {
    e.preventDefault();
    const { id, handleToggle } = this.props;
    handleToggle(id);
  };

  renderBadge = ({displayFor, currStatus}) => {
    const {
      item: {
        badge: { isVisible, status, type }
      }
    } = this.props;

    if (status && type && isVisible) {
      return (
        <Flex
          alignCenter={displayFor === "desktop" && currStatus === "inactive"}
          className={`badge_${displayFor} badge_${currStatus} `}
        >
          <div>
            <StatusBadge label={status} type={type} />
          </div>
        </Flex>
      );
    }
    return null;
  };

  renderLabel = ({displayFor, currStatus}) => {
    const { item: { label } } = this.props;
    const [onSaleText, time] = label && label.text && label.text.split(": ");

    const isDesktop = displayFor !== "mobile";
    if (label && label.isVisible && label.text) {
      return (
        <Event.Text
          accent="positive"
          className={`label_${displayFor}`}
          variant="accent"
          primary
        >
          {!isDesktop && label.text}
          {isDesktop && (
            <React.Fragment>
              <span>
                {onSaleText}: <br />
              </span>
              <span>{time}</span>
            </React.Fragment>
          )}
        </Event.Text>
      );
    }
    return null;
  };

  render() {
    const {
      handleToggle,
      hasProducts,
      isOpen,
      items,
      item: {
        badge,
        button,
        date,
        label,
        subTitle,
        title
      }
    } = this.props;

    const forDesktop = {displayFor: "desktop", currStatus: "inactive"};
    const forMobile = {displayFor: "mobile", currStatus: "inactive"}
    
    return (
      <Event className="eventList_item">
        <Event.Header
          basis={1}
          className={shouldChangeHeight(isOpen, "hover--area")}
          onClick={this.handleClick}
        >
          <Flex grow={1} alignCenter>
            <Chevron isOpen={isOpen}/>
            <Event.Date column>
              <Event.Title>{date.title}</Event.Title>
              <Event.SubTitle>{date.subTitle}</Event.SubTitle>
            </Event.Date>
            <Event.Body grow={1} className="event_title_desktop">
              <Grid>
                <Grid.Item>
                  <Event.Body
                    className={shouldAnimate(!isOpen, "header")}
                    column
                    grow={1}
                  >
                    <Event.Title> {title} </Event.Title>
                    <Event.SubTitle> {subTitle} </Event.SubTitle>

                    {label && this.renderLabel(forMobile)}
                    {badge && this.renderBadge(forMobile)}

                    {hasProducts && (
                      <Event.Text className="addon">
                        ADDONS AVAILABLE
                      </Event.Text>
                    )}
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
                    {badge && badge.isVisible && this.renderBadge("desktop")}

                    <Event.Title> {title} </Event.Title>
                  </Event.Body>
                </Grid.Item>
              </Grid>
            </Event.Body>
            <Event.Body grow={1} className="event_title_mobile">
              <Grid>
                <Grid.Item>
                  <Event.Body
                    className="header"
                    column
                    grow={1}
                  >
                    <Event.Title> {title} </Event.Title>
                    <Event.SubTitle> {subTitle} </Event.SubTitle>

                    {label && this.renderLabel("mobile", "inactive")}
                    {badge && this.renderBadge("mobile", "inactive")}

                    {hasProducts && (
                      <Event.Text className="addon">
                        ADDONS AVAILABLE
                      </Event.Text>
                    )}
                  </Event.Body>
                </Grid.Item>
              </Grid>
            </Event.Body>

            <ActiveBadge className={shouldAnimate(!isOpen, "header")} isOpen={isOpen}>
              {badge && this.renderBadge(forDesktop)}
              {label && this.renderLabel(forDesktop)}
            </ActiveBadge>

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

          <Modal isOpen={isOpen}>
            <Modal.Trigger>
              {(onOpen, triggerRef) => (
                <Ellipsis
                  className="ellipsis_cta"
                  ref={triggerRef}
                  onClick={onOpen}
                />
              )}
            </Modal.Trigger>
            <Modal.BottomSheet isOpen={isOpen}>
              <ModalWithPanelInfo items={items} />
            </Modal.BottomSheet>
          </Modal>

        </Event.Actions>
      </Event>
    );
  }
}

export default EventListItem;


const ActiveBadge = styled.div`
  ${({isOpen}) =>
    isOpen &&
    css`margin-top: -14px;`
  }
`;

const Event = styled(DefaultEvent)`
  ${expandCollapse} ${adjustHeight}

  .badge_active,
  .label_active {
    margin-top: -15px;
  }

  .badge_desktop,
  .label_desktop {
    display: none;
  }

  .button_cta {
    display: none;
  }

  .right__actions {
    width: 14px;
    padding-right: 16px;
  }

  .event_title_desktop {display: none}

  ${mediumAndUp`
    .event_title_desktop {display: inherit}
    .event_title_mobile {display: none}
    

    .badge_desktop, .label_desktop { display: inherit }
    .badge_mobile, .label_mobile { display: none }
    
    .button_cta {
      align-items: center;
      display: inherit
      justify-content: center;
      text-align: center;
    }
    .ellipsis_cta { display: none }

    .label_desktop {
      display: block;
      text-align: right;
    }
    
    .right__actions { width: auto; }
  `}
  .collapse {
    text-align: center;
  }
`;
