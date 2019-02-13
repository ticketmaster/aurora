import React from "react";
import { shape } from "prop-types";
import styled from "styled-components";

import COLORS from "../../theme/colors";
import Icon from "./Icon";
// import InfoItem from "./InfoItem";
import Tile from "../Tile";
import CategoryItem from "./CategoryItem";

import {
  AttractionsType,
  ProductsType,
  VenueType
} from "../../components/types";

const Category = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }
`;

const EventInfo = ({
  items: {
    attractions = null,
    products = [],
    venue: { city, name: venueName, state, venueUrl, __typename: venueTypeName }
  }
}) => {
  const lineup = attractions ? attractions.slice(0, 3) : null;

  return (
    <Wrapper>
      {lineup &&
        lineup[0].name && (
          <Category>
            <Tile.Label>LINEUP</Tile.Label>

            {lineup.map(({ name, url, __typename }) => (
              <CategoryItem
                key={`product-${name}`}
                icon={{ type: __typename }}
                label="LINEUP"
                link={{ href: url, text: name }}
              />
            ))}

            {lineup &&
              attractions.length > 3 && (
                <Tile.Link className="section" href="#">
                  {+attractions.length - 3}
                </Tile.Link>
              )}
          </Category>
        )}

      {venueName && (
        <Category>
          <Tile.Label>VENUE</Tile.Label>
          <CategoryItem
            icon={{ type: venueTypeName }}
            label="VENUE"
            link={{ href: venueUrl, text: venueName }}
            text={`${city.name}, ${state.stateCode}`}
          />
        </Category>
      )}

      {products && (
        <Category>
          <Tile.Label>ADD-ONS</Tile.Label>
          {products.map(({ name, url, type }) => (
            <CategoryItem
              key={`product-${name}`}
              icon={{ type }}
              label="VENUE"
              link={{ href: url, text: name }}
            />
          ))}
        </Category>
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
