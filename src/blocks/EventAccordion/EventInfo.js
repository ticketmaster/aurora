import React from "react";
import { shape } from "prop-types";
import styled from "styled-components";

import COLORS from "../../theme/colors";
import Icon from "./Icon";
import Tile from "../Tile";

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

const ExtraItem = styled.div`
  align-items: self-start;
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 6px 6px;
  grid-template-areas:
    "icon section section section section"
    "  .  section section section section";
  grid-template-columns: auto 1fr;
  padding: 6px 0 0;

  .section {
    align-items: left;
    display: flex;
    flex-direction: column;
    grid-area: section;
    justify-content: center;
    margin: 0;
    align-self: normal;
    grid-row: section / span 1;

    p {
      margin: 0;
    }
  }

  .lineup {
    align-self: center;
    grid-row: section / span 1;
  }
  .icon {
    grid-area: icon;
  }
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
    venue: { city, name: venueName, state, venueUrl }
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
              <ExtraItem key={`attraction-${name}`}>
                <Tile.Link className="section lineup" href={url}>
                  {name}
                </Tile.Link>
                <Icon
                  className="icon"
                  color={COLORS.blackPearl}
                  name={__typename}
                  size={40}
                  src="https://placekitten.com/g/512/288"
                />
              </ExtraItem>
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

          <ExtraItem key={`venue-${venueName}`}>
            <div className="section">
              <Tile.Link href={venueUrl}> {venueName} </Tile.Link>
              <Tile.Text>
                {" "}
                {city.name}, {state.stateCode}{" "}
              </Tile.Text>
            </div>

            <Icon
              className="icon"
              color={COLORS.blackPearl}
              name="VENUE INFO"
              size={24}
              src="https://placekitten.com/g/512/288"
            />
          </ExtraItem>
        </Category>
      )}

      {products && (
        <Category>
          <Tile.Label>ADD-ONS</Tile.Label>
          {products.map(({ name, url }) => (
            <ExtraItem key={`attraction-${name}`}>
              <div className="section">
                <Tile.Link className="section" href={url}>
                  {name}
                </Tile.Link>
              </div>
              <Icon
                className="icon"
                color={COLORS.blackPearl}
                name={name}
                size={24}
                src="https://placekitten.com/g/512/288"
              />
            </ExtraItem>
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
