import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, colors, constants } from "../../theme";

import DateTimeInfo from "./DateTimeInfo";
import SeeMoreIcon from "../Icon/SeeMoreIcon";
import OverflowIcon from "../Icon/OverflowIcon";
import EventInfo from "./EventInfo";
import Button from "../Button";
import eventDateShape from "./shape";
import TicketOptions from "./TicketOptions";

const variants = ["standard", "ticketOptions"];

const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.rocky.base};
  min-height: 66px;
  padding: ${spacing.large} ${spacing.large}
    ${props =>
      props.variant === "ticketOptions" ? spacing.moderate : spacing.large};

  @media only screen and ${constants.device.mobile} {
    padding-right: ${spacing.expanded};
    padding-left: 0;
  }
`;

const ListRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListRowLink = styled.a`
  text-decoration: none;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  display: none;

  @media only screen and (min-width: 480px) {
    display: block;
  }
`;

const EventListRow = ({
  url,
  variant,
  date,
  venueName,
  eventName,
  onClick
}) => (
  <Column variant={variant}>
    <ListRowContainer href={url} onClick={onClick}>
      <ListRowLink href={url} onClick={onClick}>
        <SeeMoreIcon
          name="chevron-down"
          size={15}
          color={colors.cascade.light}
        />
        <DateTimeInfo date={date} />
        <EventInfo eventName={eventName} venueName={venueName} />
      </ListRowLink>

      <ButtonContainer>
        <Button variant="standard" style={{ width: "100px" }}>
          See Tickets
        </Button>
      </ButtonContainer>

      <OverflowIcon
        name="dots"
        size={15}
        color={colors.cascade.light}
        desktopDisplay={false}
        mobileDisplay
        svgStyle={{ transform: "rotate(-90deg) " }}
      />
    </ListRowContainer>
    {variant === "ticketOptions" ? <TicketOptions /> : null}
  </Column>
);

EventListRow.propTypes = {
  url: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(variants).isRequired,
  date: PropTypes.shape(eventDateShape).isRequired,
  venueName: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EventListRow;
