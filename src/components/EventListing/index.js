import React from "react";
import styled, { css } from "styled-components";
import SPACING from "../../theme/spacing";

import Accordion from "../Accordion";
import EventListItem from "./EventListItem";
import EventListPanel from "./EventListPanel";
import { mediumAndUp } from "../../theme/mediaQueries";

import {
  borderRadius,
  boxShadow,
  marginBottom,
  maxHeight
} from "../../theme/animations";

const Wrapper = styled.div`
  .accordion-wrapper > div:nth-child(n + 1)::after {
    background: #ebebeb;
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .hover--area {
    padding: 10px 12px 14px;
    margin: 0 ${SPACING.moderate} 0 0;
  }
`;

const AccordionContent = styled.div`
    border: 4px solid white;
    border-left: none;
    background: white;
    max-height: auto;

    .chevron {display: none}

    ${mediumAndUp`
      .chevron { display: inherit; }
      .eventList_panel {
        height: auto;
        max-height: 600px;
      }

      .modal {
        display: none;  
      }

      ${({ isOpen }) =>
        isOpen
          ? css`
              border-radius: 4px;
              box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06),
                0 0 4px 0 rgba(0, 0, 0, 0.12);
              margin-bottom: 10px;
              max-height: 600px;
              transition: ${boxShadow}, ${marginBottom}, ${maxHeight},
                ${borderRadius};

              && ::after {
                visibility: hidden;
              }
            `
          : css`
              border-radius: 0;
              margin-bottom: 0px;
              transition: ${boxShadow}, ${marginBottom}, ${maxHeight},
                ${borderRadius};
          `};
      }
    `} 
`;

const EventListing = ({ items }) => (
  <Wrapper className="event_listing">
    <Accordion>
      {items.map(({ hasAddOns, items: eventInfo, id, ...rest }) => (
        <Accordion.Item id={id} key={id}>
          {(isOpen, handleToggle) => (
              <AccordionContent
                isOpen={isOpen}
                className="event_listing_accordion desktop"
              >
                <EventListItem
                  className="eventList_item"
                  handleToggle={handleToggle}
                  hasProducts={hasAddOns}
                  id={id}
                  isOpen={isOpen}
                  item={rest}
                />
                <Accordion.Panel isOpen={isOpen}>
                  <EventListPanel isOpen={isOpen} items={eventInfo} />
                </Accordion.Panel>
              </AccordionContent>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  </Wrapper>
);

export default EventListing;
