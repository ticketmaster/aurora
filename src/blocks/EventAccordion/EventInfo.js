import React from "react";
import { shape } from "prop-types";
import styled from "styled-components";

import COLORS from "../../theme/colors";
import Icon from "./Icon";
import InfoItem from "./InfoItem";
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
              <InfoItem key={`attraction-${name}`}>
                <Tile.Link className="section lineup" href={url}>
                  {name}
                </Tile.Link>
                <Icon
                  name={__typename}
                  src="https://placekitten.com/g/512/288"
                />
              </InfoItem>
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
          <InfoItem key={`venue-${venueName}`}>
            <div className="section">
              <Tile.Link href={venueUrl}> {venueName} </Tile.Link>
              <Tile.Text>
                {city.name}, {state.stateCode}
              </Tile.Text>
            </div>
            <Icon name="VENUE INFO" src="https://placekitten.com/g/512/288" />
          </InfoItem>
        </Category>
      )}

      {products && (
        <Category>
          <Tile.Label>ADD-ONS</Tile.Label>
          {products.map(({ name, url }) => (
            <InfoItem key={`attraction-${name}`}>
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
            </InfoItem>
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
