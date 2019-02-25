import React from "react";
import styled from 'styled-components';

import Accordion from "../Accordion"
import Item from "./Item"
import EventInfo from "../../blocks/EventListing/old/EventInfo";

const Wrapper = styled.div`
 display: inline;
`;

const EventListing = ({items}) => (
  <Wrapper>
   <Accordion>
      {items.map(({
         hasAddOns,
         items: eventInfo,
         id,
         ...rest
      }) => (
          <Accordion.Item id={id} key={id}>
            {(isOpen, handleToggle) => (
              <React.Fragment>
                <Item
                  isOpen={isOpen}
                  id={id}
                  hasProducts={hasAddOns}
                  item={rest}
                  handleToggle={handleToggle}
                />
                <Accordion.Panel isOpen={isOpen}>
                  <EventInfo
                    isOpen={isOpen}
                    items={eventInfo}
                  />
                </Accordion.Panel>
              </React.Fragment>
            )}
          </Accordion.Item>
        )
      )}
    </Accordion>
  </Wrapper>
);

export default EventListing;
