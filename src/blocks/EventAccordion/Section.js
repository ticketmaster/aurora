import React from "react";
import styled, { css } from "styled-components";
// import {string, func, shape, oneOfType} from "prop-types";

import Chevron from "./Chevron";
import Ellipsis from "./Ellipsis";

import { Button as AuroraButton } from "../../components/Button";
import { Row as AuroraRow } from "../../components/Grid";
import { Text } from "../../components/Text";
import { StatusBadge } from "../../components/StatusBadge";

import { mediumAndUp } from "../../theme/mediaQueries";
import { themes } from "../../theme";
import { variantType } from "../../components/types";

const Col = styled.div`
  max-width: none;
  flex: 0;
`;

const Row = styled(AuroraRow)`
  flex: 1 1;
  margin: 0 !important;
`;

const Button = styled(AuroraButton)`
  display: column;
  width: 102px;
`;

const ChevronWrapper = styled.button`
  background: none;
  border: none;
  display: flex;
  flex: 0;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 48px;
  position: relative;

  && :focus {
    outline: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      .chevron {
        transform: rotate(-180deg);
      }
    `};
`;

const EventDate = styled.div`
  display: block;
  flex-direction: column;
`;

const Month = styled(Text)`
  line-height: 20px;
  margin: 0 !important;
  display: block;
  padding-left: 4px;
  padding-right: 16px;
`;

const DayAndTime = styled(Month)`
  line-height: 18px;
`;

const EventWrapper = styled(Row)`
  margin: 4px;
  padding: 4px 16px 4px 0px;

  .ctaButton {
    display: none;
  }

  .chevronWrapper {
    display: none;
  }

  .ctaEllipsis {
    display: inline;
  }

  ${mediumAndUp`
    .ctaButton {
      display: inline;
    }

    .chevronWrapper {
      display: inline;
    }

    .ellipsis {
      display: none;
    }
  `};
`;

const BadgeWrapper = styled.span`
  display: flex;
  height: 20px;
`;

const EventInfoWrapper = styled(Row)`
  flex: 1 1;
  margin: 0 !important;
  padding-bottom: 14px;
  padding-top: 14px;

  &&:hover {
    background: lavender;
  }
`;

const EventTextWrapper = styled(Col)`
  flex: 1 1;

  * {
    margin: 0;
  }
`;

const EventCTAWrapper = styled(Col)`
  padding-left: 16px;
  padding-top: 14px;
`;

const EventTitle = styled(Text)`
  line-height: 20px;
`;

const EventName = styled(Text)`
  line-height: 18px;
`;

const Section = ({
  extrasAvailable,
  image,
  isOpen,
  label,
  onClick,
  onSale,
  onSaleText,
  partnerText,
  statusBadge
}) => (
  <EventWrapper className="eventWrapper" isOpen={isOpen}>
    <EventInfoWrapper className="eventInfoWrapper">
      <ChevronWrapper
        className="chevronWrapper"
        isOpen={isOpen}
        label={label}
        variant="transparent"
        onClick={onClick}
      >
        <Chevron
          className="chevron"
          onClick={onClick}
          label={label}
          color="000"
          isopen={String(isOpen)}
          size={15}
        />
      </ChevronWrapper>

      {image && <div> image </div>}

      <EventDate>
        <Month primary size="kilo" weight="semiBold" tag="p">
          APR 5
        </Month>
        <DayAndTime size="hecto" tag="p">
          Mon • 7:30 PM
        </DayAndTime>
      </EventDate>

      <EventTextWrapper>
        <EventTitle size="kilo" weight="semiBold" tag="p">
          Los Angeles, CA — STAPLES Center
        </EventTitle>
        <EventName size="hecto" tag="p" variant="accent" accent="gray03">
          Event Name
        </EventName>

        {statusBadge &&
          statusBadge.variant &&
          statusBadge.text && (
            <BadgeWrapper>
              <StatusBadge label={label} color={themes.global.error.base} />
            </BadgeWrapper>
          )}

        {onSaleText && (
          <Text secondary accent="alert" size="uno" tag="p" weight="bold">
            ON SALE: {onSaleText}
          </Text>
        )}
        {extrasAvailable && (
          <Text primary label={label} size="uno" tag="p" onClick={onClick}>
            Extras Available
          </Text>
        )}
      </EventTextWrapper>
    </EventInfoWrapper>

    <EventCTAWrapper>
      <Button className="ctaButton">More Info</Button>
      <Ellipsis className="ellipsis" size={0} />
      {partnerText && <p className="cta-subText">on Partner site</p>}
    </EventCTAWrapper>
  </EventWrapper>
);

// Section.defaultProps = {
//   onClick: null,
//   partnerText: null,
//   statusBadge: null
// };

// Section.propTypes = {
// statusBadge: shape({
//   text: string,
//   varian: variantType
// }),
// onClick: func,
// extrasAvailable: mix,
// image: mix,
// isOpen: mix,
// label: mix,
// onClick: mix,
// onSale: mix,
// onSaleText: mix,
// partnerText: oneOfType(null, [string])
// };

export default Section;
