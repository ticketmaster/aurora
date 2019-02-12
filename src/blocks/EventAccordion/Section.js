import React from "react";
import { string, func, instanceOf, bool, shape, objectOf } from "prop-types";
import { EventType } from "../../components/types";

import Chevron from "./Chevron";
import Ellipsis from "./Ellipsis";
import Badge from "./Badge";

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
  handleToggle = () => {},
  id = null,
  isOpen = false,
  item: {
    dates: {
      status: { code = null }
    },
    datesFormatted: { dateSubTitle = null, dateTitle = null },
    name = null,
    venue = null
  }
}) => (
  <EventWrapper className="eventWrapper" isOpen={isOpen}>
    <EventInfoWrapper className="eventInfoWrapper">
      <ChevronWrapper
        className="chevronWrapper"
        isOpen={isOpen}
        id={id}
        variant="transparent"
        onClick={handleToggle}
      >
        <Chevron
          className="chevron"
          onClick={handleToggle}
          id={id}
          color="000"
          isopen={String(isOpen)}
          size={15}
        />
      </ChevronWrapper>

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
            {name}
          </EventTitle>
          <EventName
            className="eventName"
            accent="gray03"
            size="hecto"
            tag="p"
            variant="accent"
          >
            {venue.name}
          </EventName>
        </NameAndTitleWrapper>
      </EventTextWrapper>
    </EventInfoWrapper>
  </EventWrapper>
);

{
  /* {image && <div> image </div>}

     

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
            <Badge
              id={id}
              label={label}
              variant={variant}
            >
              {label}
            </Badge>
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
    </EventCTAWrapper> */
}

Section.propTypes = {
  handleToggle: func.isRequired,
  id: string.isRequired,
  isOpen: bool.isRequired,
  item: shape({ ...EventType }).isRequired
};

export default Section;
