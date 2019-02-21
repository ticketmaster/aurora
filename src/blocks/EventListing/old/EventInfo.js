import React from "react";
import styled from "styled-components";
import { shape } from "prop-types";
import { AttractionsType, ProductsType, VenueType } from "../../../components/types";

import CategoryItem from "./CategoryItem";
import Flex from "../../../components/Flex"
import Tile from "../../../components/Tile";

import {expandCollapse} from "../../../theme/animations"

const Wrapper = styled(Flex)`
  ${expandCollapse}
  padding: 16px 16px 16px 47px;
  && > div:nth-child(n + 2) { margin-left: 16px; }

  .label {
    margin-bottom: 16px;
  }
`

const EventInfo = ({
  isOpen, 
  items: {
    attractions = null,
    products = [],
    venue: {
      city,
      name: venueName,
      state,
      venueUrl,
      __typename: venueTypeName
    }
  }
}) => {
  const lineup = attractions ? attractions.slice(0, 2) : null;
  const getClassName = isOpen ? "expand" : "collapse";

  return (
    <Wrapper className={getClassName}>
      {lineup &&
        lineup[0].name && (
          <Flex column grow={1} shrink={1}>
            <Tile.Label className="label">LINEUP</Tile.Label>

            {lineup.map(({ name, url, __typename }) => (
              <CategoryItem
                key={`product-${name}`}
                icon={{ type: __typename }}
                label="LINEUP"
                link={{ href: url, text: name }}
              />
            ))}

            {lineup &&
              attractions.length > 2 && (
                <Tile.Link className="section" href="#" size="uno">
                  + {attractions.length - lineup.length}
                </Tile.Link>
              )}
          </Flex>
        )}

      {venueName && (
        <Flex column grow={1} shrink={1}>
          <Tile.Label className="label">VENUE</Tile.Label>
          <CategoryItem
            icon={{ type: venueTypeName }}
            label="VENUE"
            link={{ href: venueUrl, text: venueName }}
            text={`${city.name}, ${state.stateCode}`}
          />
        </Flex>
      )}

      {products && (
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
      )}
    </Wrapper>
  );
};

EventInfo.propTypes = {
  items: shape({
    attractions: AttractionsType,
    products: ProductsType,
    venue: shape(VenueType)
  }).isRequired
};

export default EventInfo;
