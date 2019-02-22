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
          id,
          products,
          eventUrlLink: venueUrl,
          venues: [venue],
          attractions,
          ...rest
      }) => (
          <Accordion.Item id={id} key={id}>
            {(isOpen, handleToggle) => (
              <React.Fragment>
                <Item
                  isOpen={isOpen}
                  id={id}
                  hasProducts={!!products}
                  item={{...rest, venue}}
                  handleToggle={handleToggle}
                />
                <Accordion.Panel isOpen={isOpen}>
                  <EventInfo
                    isOpen={isOpen}
                    items={{
                      products,
                      venue: {...venue, venueUrl},
                      attractions
                    }}
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
