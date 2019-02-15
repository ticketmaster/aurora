import React from "react";
import styled, {css} from "styled-components";
import { shape } from "prop-types";

import Category from "./Category";
import CategoryItem from "./CategoryItem";
import Tile from "../Tile";

import {
  AttractionsType,
  ProductsType,
  VenueType
} from "../../components/types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }

  .expand {
    background-color: rgba(255,255,255,1);
    max-height: 600px !imporant;
    -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    opacity: 1;
  }

  .collapse {
      transition: max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s, opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      opacity: 0;
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
  const lineup = attractions ? attractions.slice(0, 3) : null;

  return (
    <Wrapper className={isOpen ? "expand" : "collapse"}>
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
