import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, typography, spacing } from "../../theme";
import constants from "../../theme/constants";

import eventDateShape from "./shape";

const DateTimeInfoContainer = styled.div`
  width: 110px;
  padding-right: ${spacing.moderate};

  @media only screen and ${constants.device.mobile} {
    font-size: ${typography.size.kilo};
    width: 124px;
  }
`;

const DateTitle = styled.div`
  color: ${colors.heliotrope};
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.semiBold};
  text-transform: uppercase;

  @media only screen and ${constants.device.mobile} {
    font-size: ${typography.size.kilo};
`;

const DateSubTitle = styled.div`
  color: ${colors.cascade.base};
  font-size: ${typography.size.hecto};
  white-space: nowrap;

  @media only screen and ${constants.device.mobile} {
    font-size: ${typography.size.kilo};
  }
`;

const DateTimeInfo = ({ date: { dateTitle = "", dateSubTitle = "" } = {} }) => (
  <DateTimeInfoContainer>
    <DateTitle>{dateTitle}</DateTitle>
    <DateSubTitle>{dateSubTitle}</DateSubTitle>
  </DateTimeInfoContainer>
);

DateTimeInfo.propTypes = {
  date: PropTypes.shape(eventDateShape).isRequired
};

export default DateTimeInfo;
