import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Button as AuroraButton } from "../../components/Button";
import { Row as AuroraRow } from "../../components/Grid";
import { Text } from "../../components/Text";
import Chevron from "./Chevron";
import Ellipsis from "./Ellipsis";
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
  min-width: 39px;
  padding: 0;
  position: relative;

  && :focus {
    outline: none;
  }
`;

const EventDate = styled.div`
  display: block;
  flex-direction: column;
  margin: 0 !important;

  div {
    display: block;
    padding-left: 4px;
    padding-right: 16px;
  }
`;

const EventWrapper = styled(Row)`
  margin: 4px;
  padding: 4px 0;

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
    padding: 4px 24px 4px 4px;

    .ctaButton {
      display: inline;
    }

    .chevronWrapper {
      display: inline;
    }

    .ctaEllipsis {
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
  <EventWrapper className="eventWrapper">
    <EventInfoWrapper className="eventInfoWrapper">
      <ChevronWrapper
        className="chevronWrapper"
        label={label}
        variant="transparent"
        onClick={onClick}
      >
        <Chevron
          onClick={onClick}
          label={label}
          color="000"
          isOpen={isOpen}
          size={15}
        />
      </ChevronWrapper>

      {image && <div> image </div>}

      <EventDate>
        <Text size="kilo" weight="bold">
          APR 5
        </Text>
        <Text size="hecko">Mon • 7:30 PM</Text>
      </EventDate>

      <EventTextWrapper>
        <Text size="kilo" weight="semiBold">
          Los Angeles, CA — STAPLES Center
        </Text>
        <Text size="hecto">Event Name</Text>

        {statusBadge &&
          statusBadge.variant &&
          statusBadge.text && (
            <BadgeWrapper>
              <StatusBadge label={label} color={themes.global.error.base} />
            </BadgeWrapper>
          )}

        {onSaleText && <Text size="kilo">{onSale}</Text>}
        {extrasAvailable && (
          <Text primary label={label} size="uno" onClick={onClick}>
            Extras Available
          </Text>
        )}
      </EventTextWrapper>
    </EventInfoWrapper>

    <EventCTAWrapper>
      <Button className="ctaButton">More Info</Button>
      <Ellipsis className="ctaEllipsis" />
      {partnerText && <p className="cta-subText">on Partner site</p>}
    </EventCTAWrapper>
  </EventWrapper>
);

Section.defaultProps = {
  statusBadge: null,
  partnerText: null
};

Section.propTypes = {
  statusBadge: PropTypes.oneOfType([null, variantType]),
  // extrasAvailable: PropTypes.mix,
  // image: PropTypes.mix,
  // isOpen: PropTypes.mix,
  // label: PropTypes.mix,
  // onClick: PropTypes.mix,
  // onSale: PropTypes.mix,
  // onSaleText: PropTypes.mix,
  partnerText: PropTypes.oneOfType([null, PropTypes.string])
};

export default Section;
