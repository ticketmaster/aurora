import React from "react";
import styled, {css} from "styled-components";
import { mergeAll, reduce, keys } from "ramda";
import {shouldChangeHeight} from "./utils/animation";
// import { shape } from "prop-types";
// import {
//   AttractionsType,
//   ProductsType,
//   VenueType
// } from "../../components/types";

import CategoryItem from "./CategoryItem";
import Flex from "../../components/Flex";
import Tile from "../../components/Tile";
import COLORS from "../../theme/colors";

import { expandCollapse, expand, collapse } from "../../theme/animations";

const Wrapper = styled(Flex)`
   background: white;
  border-top: 1px solid ${COLORS.diatomite};
  margin: 0 16px;
  padding: 16px 27px;

  /* ${({ isOpen }) =>
    isOpen &&
    css`
      border-top: ${COLORS.diatomite};
    `} */

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }

  .label {
    margin-bottom: 16px;
  }
`;

const Foo = styled.div`
   ${expandCollapse}
 
`;

const EventListPanel = ({
  isOpen,
  items
}) => {
  const {lineup, venueinfo, addOns, more} = reduce((acc,value) => { 
    const key = value.id;
    acc[key] = {...value};
    return acc;
  },{},items);

  return (
    <Wrapper  className={shouldChangeHeight(isOpen,"eventList_panel")} isOpen={isOpen}>
      
        event list panel
      
      {/* {lineup && (
          <Flex column grow={1} shrink={1}>
            <Tile.Label className="label">LINEUP</Tile.Label>
            {lineup.items.map(({ title, url, id }) => (
              <CategoryItem
                key={`lineup-${title}-${id}`}
                icon={{ type: "avatar" }}
                label="LINEUP"
                link={{ href: url, text: title }}
              />
            ))}

            {lineup &&
              lineup.items.length > 2 && (
                <Tile.Link className="section" href="#" size="uno">
                  + {lineup.items.length - lineup.length}
                </Tile.Link>
              )}
          </Flex>
        )} */}

      {/* {venueName && (
        <Flex column grow={1} shrink={1}>
          <Tile.Label className="label">VENUE</Tile.Label>
          <CategoryItem
            icon={{ type: venueTypeName }}
            label="VENUE"
            link={{ href: venueUrl, text: venueName }}
            text={`${city.name}, ${state.stateCode}`}
          />
        </Flex>
      )} */}

      {/* {products && (
        <Flex column grow={1} shrink={1}>
          <Tile.Label className="label">ADD-ONS</Tile.Label>
          {products.map(({ name, url, type }) => (
            <CategoryItem
              key={`product-${name}`}
              icon={{ type }}
              label="VENUE"
              link={{ href: url, text: name }}
            />
          ))}
        </Flex>
      )} */}
    </Wrapper>
  );
};

// EventInfo.propTypes = {
//   items: ;

export default EventListPanel;
