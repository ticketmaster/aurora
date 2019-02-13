import React from "react";
import COLORS from "../../theme/colors";

import Avatar from "../../components/Image/ThumbnailCircle";
import Parking from "../../components/Icons/Parking";
import Ticket from "../../components/Icons/Ticket";
import Venue from "../../components/Icons/Venue";
import Vip from "../../components/Icons/Vip";

const Icon = props => {
  switch (props.name) {
    case "Attraction":
      return <Avatar size={40} {...props} />;

    case "Parking":
      return (
        <Parking
          {...props}
          className="icon"
          color={COLORS.blackPearl}
          size={24}
        />
      );

    case "Tickets":
      return <Ticket {...props} className="icon" size="small" />;

    case "VENUE INFO":
      return (
        <Venue
          {...props}
          className="icon"
          color={COLORS.blackPearl}
          size={24}
        />
      );

    case "VIP":
      return (
        <Vip {...props} className="icon" color={COLORS.blackPearl} size={24} />
      );

    default:
      return <div />;
  }
};

export default Icon;
