import React from "react";
import styled from "styled-components";
import { exact, shape } from "prop-types";

import { Text, LinkCta } from "../../components/Text";
import { Row as AuroraRow, Column as AuroraCol } from "../../components/Grid";
import COLORS from "../../theme/colors";
import Icon from "./Icon";

import {
  AttractionType,
  AttractionsType,
  ProductsType,
  VenueType
} from "../../components/types";

// import spacing from "../../theme/spacing";

const ExtrasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }
`;

const ExtraTitle = styled(Text)`
  margin: 0;
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const ExtraItemWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const ExtrasText = styled(Text)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  line-height: 1.5;
  margin: 0;
`;


const CityText = styled(Text)`
  color: ${COLORS.onyx.light};
`;

const ExtraItem = styled.div`
  display: grid;
  grid-template-areas: 'icon section section section section';
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  grid-gap: 6px 6px ;
  padding: 6px 0 0;

  .section {
    align-items: left;
    display: flex;
    flex-direction: column;
    grid-area: section;
    grid-column: span 4;
    justify-content: center;
    margin: 0;
     
     p {
       margin: 0;
     }
  }
  .icon { grid-area: icon;}
`;


const Extras = ({
  items: {
    attractions = null,
    products = [],
    venue: {
      city,
      name: venueName,
      state,
      venueUrl
    } }
}) => {
  const lineup = attractions ? attractions.slice(0,3) : null;
return (
  <ExtrasWrapper>
    {lineup && lineup[0].name && 
      <Extra>
        <ExtraTitle size="uno" weight="semiBold" tag="p">LINEUP</ExtraTitle>
          {lineup.map(({name, url, __typename}) => (
            <ExtraItem key={`attraction-${name}`}>
              <LinkCta className="section" size="uno" href={url}>{name}</LinkCta>
              <Icon
                className="icon" 
                color={COLORS.blackPearl}
                name={__typename}
                size={26}
                src="https://placekitten.com/g/512/288"
              />
            </ExtraItem> 
          ))}
          {lineup && attractions.length > 3 && 
            <Text size="hecto" weight="semiBold" tag="p">+ {attractions.length - 3}</Text>
          }
      </Extra>
    }
    
    {venueName &&
      <Extra>
        <ExtraTitle size="uno" weight="semiBold" tag="p">
          VENUE
        </ExtraTitle>
        <ExtraItem key={`venue-${venueName}`}>
          <div className="section">
            <LinkCta size="hecto" weight="semiBold" href={venueUrl} tag="p">{venueName}</LinkCta>
            <CityText size="hecto" weight="semiBold" tag="p">
            {city.name},
            {state.stateCode}
            </CityText>
          </div>
          <Icon
            className="icon" 
            color={COLORS.blackPearl}
            name="VENUE INFO"
            size={26}
            src="https://placekitten.com/g/512/288"
          />
        </ExtraItem> 
      </Extra>
    }

    {products && 
      <Extra>
        <ExtraTitle size="uno" weight="semiBold" tag="p">ADD-ONS</ExtraTitle>
        {products.map(({name}) => (
          <ExtraItem key={`attraction-${name}`}>
              <p className="section">{name}</p>
              <Icon
                className="icon" 
                color={COLORS.blackPearl}
                name={name}
                size={26}
                src="https://placekitten.com/g/512/288"
              />
            </ExtraItem> 
        ))}
      </Extra>
    }
  </ExtrasWrapper>
)};

Extras.propTypes = {
  items: shape({
    attractions: AttractionsType,
    products: ProductsType,
    venue: shape(VenueType)
  }).isRequired
};

export default Extras;
