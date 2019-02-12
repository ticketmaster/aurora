import React from "react";
import styled from "styled-components";

import Avatar from "../../components/Image/ThumbnailCircle";
import Parking from "../../components/Icons/Parking";
import Ticket from "../../components/Icons/Ticket";
import Venue from "../../components/Icons/Venue";
import Vip from "../../components/Icons/Vip";

const AvatarWrapper = styled.div`
  min-width: 40px;
`;

const StyledTicket = styled(Ticket)`
  .ticket-icon {
    transform: rotate(45deg);
  }
`;

const BaseIcon = props => {
  switch (props.name) {
    case "Attraction":
      return (
        <AvatarWrapper className={props.className}>
          <Avatar {...props} size={40} />
        </AvatarWrapper>
      );

    case "Parking":
      return <Parking {...props} />;

    case "Tickets":
      return <StyledTicket {...props} size="small" />;

    case "VENUE INFO":
      return <Venue {...props} />;

    case "VIP":
      return <Vip {...props} />;

    default:
      return <div />;
  }
};

const Icon = styled(BaseIcon)`
  
`;

export default Icon;
