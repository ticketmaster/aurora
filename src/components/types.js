/* eslint-disable import/prefer-default-export */
import { arrayOf, string, bool, shape } from "prop-types";

const AttractionType = {
  id: string,
  name: string,
  seoUrl: string,
  url: string,
  classification: shape({
    segment: shape({
      name: string,
      __typename: string
    }),
    __typename: string
  }),
  __typename: string
};

const AttractionsType = arrayOf(shape(AttractionType));

const DateFormattedType = {
  dateTitle: string,
  dateSubTitle: string,
  venueDateTime: string,
  venueDateTimeFormatted: string,
  __typename: string
};

const DatesType = {
  spanMultipleDays: bool,
  start: shape({
    dateTBA: bool,
    timeTBA: bool,
    localDate: string,
    dateTime: string,
    noSpecificTime: bool,
    __typename: string
  }),
  status: shape({
    code: string,
    __typename: string
  }),
  __typename: string
};

const ProductType = {
  id: string,
  name: string,
  type: string,
  url: string,
  __typename: string
};

const ProductsType = arrayOf(shape(ProductType));

const VenueType = {
  id: string,
  name: string,
  seoLink: string,
  postalCode: string,
  address: shape({
    line1: string,
    __typename: string
  }),
  state: shape({
    stateCode: string,
    name: string,
    __typename: string
  }),
  country: shape({
    countryCode: string,
    name: string,
    __typename: string
  }),
  __typename: string
};

const EventType = {
  dates: shape({ ...DatesType }),
  datesFormatted: shape({ ...DateFormattedType }),
  name: string,
  venue: shape(VenueType)
};

export {
  AttractionsType,
  DateFormattedType,
  DatesType,
  EventType,
  ProductsType,
  ProductType,
  VenueType
};
