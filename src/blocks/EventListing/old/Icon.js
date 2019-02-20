import React from "react";
import COLORS from "../../../theme/colors";

import Avatar from "../../../components/Image/ThumbnailCircle";
import Parking from "../../../components/Icons/Parking";
import Ticket from "../../../components/Icons/Ticket";
import Venue from "../../../components/Icons/Venue";
import Vip from "../../../components/Icons/Vip";

const Icon = props => {
  switch (props.type) {
    case "Attraction":
      return <Avatar size={40} {...props} />;

    case "Parking":
      return (
        <Parking
          {...props}
          className="icon"
          color={COLORS.blackPearl}
          size={24}
          aria-labelledby="catTitle catDesc" role="img"
        >
         <title id="catTitle">Pixels, My Super-friendly Cat</title>
          <desc id="catDesc">An illustrated gray cat with bright green blinking eyes.</desc>
        </Parking>
      );

    case "Tickets":
      return (
        <Ticket
            {...props}
            className="icon"
            size="small"
            aria-labelledby="catTitle catDesc" role="img"
          >
           <title id="catTitle">Pixels, My Super-friendly Cat</title>
            <desc id="catDesc">An illustrated gray cat with bright green blinking eyes.</desc>
        </Ticket>);

    case "Venue":
      return (
        <Venue
          {...props}
          className="icon"
          color={COLORS.blackPearl}
          size={24}
          aria-labelledby="catTitle catDesc" role="img"
        >
         <title id="catTitle">Pixels, My Super-friendly Cat</title>
          <desc id="catDesc">An illustrated gray cat with bright green blinking eyes.</desc>
        </Venue>
      );

    case "Vip":
      return (
        <Vip {...props} className="icon" color={COLORS.blackPearl} size={24} />
      );

    default:
      return <div />;
  }
};

export default Icon;
