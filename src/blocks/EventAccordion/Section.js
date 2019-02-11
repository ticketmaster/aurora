import React from "react";
// import {string, func, shape, oneOfType} from "prop-types";
// import { variantType } from "../../components/types";

import Chevron from "./Chevron";
import Ellipsis from "./Ellipsis";
import { StatusBadge } from "../../components/StatusBadge";
import { Text } from "../../components/Text";
import { themes } from "../../theme";

import { formatOnSaleText } from "./utils/textUtils";

import {
  BadgeWrapper,
  Button,
  ChevronWrapper,
  DayAndTime,
  DesktopBadge,
  EventCTAWrapper,
  EventDate,
  EventInfoWrapper,
  NameAndTitleWrapper,
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
  id,
  onToggle,

  linkSubTitle,
  linkTitle,
  label,

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
        id={id}
        variant="transparent"
        onClick={onToggle}
      >
        <Chevron
          className="chevron"
          onClick={onToggle}
          id={id}
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
        <NameAndTitleWrapper className="nameEventWrapper" isOpen={isOpen}>
          <EventTitle
            className="eventTitle"
            size="kilo"
            weight="semiBold"
            tag="p"
          >
            {title}
          </EventTitle>
          <EventName
            className="eventName"
            accent="gray03"
            size="hecto"
            tag="p"
            variant="accent"
          >
            {subTitle}
          </EventName>
        </NameAndTitleWrapper>

        {label && (
          <BadgeWrapper>
            <StatusBadge id={id} color={themes.global.error.base}>
              {label}
            </StatusBadge>
          </BadgeWrapper>
        )}

        {onSaleText && (
          <Text accent="alert" secondary size="uno" tag="p" weight="bold">
            {onSaleText}
          </Text>
        )}

        {linkSubTitle && (
          <Text primary id={id} size="uno" tag="p" onClick={onClick}>
            {linkSubTitle}
          </Text>
        )}
      </EventTextWrapper>
    </EventInfoWrapper>

    {label && (
      <DesktopBadge>
        <Text primary id={id} size="uno" tag="p">
          {formatOnSaleText(label)}
        </Text>
      </DesktopBadge>
    )}

    <EventCTAWrapper>
      <Button className="ctaButton">More Info</Button>
      <Ellipsis className="ellipsis" size={0} />
      {linkSubTitle && (
        <Text primary id={id} size="uno" tag="p" onClick={onClick}>
          {linkSubTitle}
        </Text>
      )}
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
