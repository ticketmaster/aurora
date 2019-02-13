import React from "react";

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
      return <Parking {...props} />;

    case "Tickets":
      return <Ticket {...props} size="small" />;

    case "VENUE INFO":
      return <Venue {...props} />;

    case "VIP":
      return <Vip {...props} />;

    default:
      return <div />;
  }
};

export default Icon;
