import React from "react";
// import {string, func, shape, oneOfType} from "prop-types";
// import { variantType } from "../../components/types";

import Chevron from "./Chevron";
import Ellipsis from "./Ellipsis";
import { StatusBadge } from "../../components/StatusBadge";
import { Text } from "../../components/Text";
import { themes } from "../../theme";

import {
  BadgeWrapper,
  Button,
  ChevronWrapper,
  DayAndTime,
  EventCTAWrapper,
  EventDate,
  EventInfoWrapper,
  EventName,
  EventTextWrapper,
  EventTitle,
  EventWrapper,
  Month
} from "./styles";

const Section = ({
  extrasAvailable,
  image,
  isOpen,
  label,
  onToggle,
  onSale,
  partnerText,
  statusBadge,

  buttonText,
  dateSubTitle,
  dateTitle,
  onClick,
  rowId,
  subTitle,
  title,
  url,
  variant,

  onSaleText
}) => (
  <EventWrapper className="eventWrapper" isOpen={isOpen}>
    <EventInfoWrapper className="eventInfoWrapper">
      <ChevronWrapper
        className="chevronWrapper"
        isOpen={isOpen}
        label={label}
        variant="transparent"
        onClick={onToggle}
      >
        <Chevron
          className="chevron"
          onClick={onToggle}
          label={label}
          color="000"
          isopen={String(isOpen)}
          size={15}
        />
      </ChevronWrapper>

      {image && <div> image </div>}

      <EventDate>
        <Month primary size="kilo" weight="semiBold" tag="p">
          {dateTitle}
        </Month>
        <DayAndTime size="hecto" tag="p">
          {dateSubTitle}
        </DayAndTime>
      </EventDate>

      <EventTextWrapper>
        <EventTitle size="kilo" weight="semiBold" tag="p">
          {title}
        </EventTitle>
        <EventName accent="gray03" size="hecto" tag="p" variant="accent">
          {subTitle}
        </EventName>

        {statusBadge &&
          statusBadge.variant &&
          statusBadge.text && (
            <BadgeWrapper>
              <StatusBadge label={label} color={themes.global.error.base} />
            </BadgeWrapper>
          )}

        {onSaleText && (
          <Text accent="alert" secondary size="uno" tag="p" weight="bold">
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
