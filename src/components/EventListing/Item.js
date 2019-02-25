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

const Event = styled(DefaultEvent)`
  ${expandCollapse}
  ${adjustHeight}

  .badge_active, .label_active {margin-top: -15px;}
  .collapse {text-align: center;}

  padding: 4px 16px 4px 0;
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
                      
                      {label && label.isVisible &&
                        <DisplayFor small>
                          <Event.Text
                            variant="accent"
                            accent="positive"
                            primary
                          >
                            {label.text}
                          </Event.Text>
                        </DisplayFor>
                      }

                      {badge && badge.isVisible &&
                        <DisplayFor small>
                         <Flex>
                            <StatusBadge
                              label={badge.status}
                              type={badge.type}
                            />
                         </Flex>
                        </DisplayFor>
                      }
                      
                      {hasProducts &&
                        <Event.Text className="addon"> ADDONS AVAILABLE </Event.Text>
                      }

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
                      {label && label.isVisible &&
                         <Event.Text
                          variant="accent"
                          accent="positive"
                          className="label_active">
                          {label.text}
                        </Event.Text>
                      }
                       {badge && badge.isVisible &&
                        <DisplayFor small>
                         <Flex class="badge_active">
                            <StatusBadge
                              label={badge.status}
                              type={badge.type}
                            />
                         </Flex>
                        </DisplayFor>
                      }
                      <Event.Title> {title} </Event.Title>
                    </Event.Body>
                  </Grid.Item>
                </Grid>
              </Event.Body>
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
