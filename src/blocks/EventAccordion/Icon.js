import React from "react";

import Avatar from "../../components/Image/ThumbnailCircle";
import Parking from "../../components/Icons/Parking";
import Ticket from "../../components/Icons/Ticket";
import Venue from "../../components/Icons/Venue";
import Vip from "../../components/Icons/Vip";

const Icon = props => {
  switch (props.name) {
    case "Lineup":
      return <Avatar {...props} />;

    case "Parking Pass Available":
      return <Parking {...props} />;

    case "Sell Tickets":
      // return <Ticket {...props} />;
      return <div />;

    case "Venue Info":
      return <Venue {...props} />;

    case "VIP Packages":
      return <Vip {...props} />;

    default:
      return <div />;
  }
};

export default Icon;
