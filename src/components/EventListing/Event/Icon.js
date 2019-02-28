import React from "react";
// import styled from 'styled-components';

import COLORS from "../../../theme/colors";

import Avatar from "../../../components/Image/ThumbnailCircle";
import Parking from "../../../components/Icons/Parking";
import Ticket from "../../../components/Icons/Ticket";
import Venue from "../../../components/Icons/Venue";
import Vip from "../../../components/Icons/Vip";

const Icon = props => {
  switch (props.type) {
    case "attraction":
      return <Avatar size={40} {...props} />;

    case "parking":
      return (
        <Parking
          {...props}
          className="icon"
          color={COLORS.blackPearl}
          size={24}
          aria-labelledby="catTitle catDesc"
          role="img"
        >
          <title id="catTitle">Pixels, My Super-friendly Cat</title>
          <desc id="catDesc">
            An illustrated gray cat with bright green blinking eyes.
          </desc>
        </Parking>
      );

    case "tickets":
      return (
        <Ticket
          {...props}
          className="icon"
          size="small"
          aria-labelledby="catTitle catDesc"
          role="img"
        >
          <title id="catTitle">Pixels, My Super-friendly Cat</title>
          <desc id="catDesc">
            An illustrated gray cat with bright green blinking eyes.
          </desc>
        </Ticket>
      );

    case "venuenfo":
      return (
        <Venue
          {...props}
          className="icon"
          color={COLORS.blackPearl}
          size={24}
          aria-labelledby="venueIcon venueDesc"
          role="img"
        >
          <title id="venueIcon">venue icon</title>
          <desc id="venueDesc">A svg vector of a building</desc>
        </Venue>
      );

    case "vip":
      return (
        <Vip {...props} className="icon" color={COLORS.blackPearl} size={24} />
      );

    default:
      return <div />;
  }
};

export default Icon;
