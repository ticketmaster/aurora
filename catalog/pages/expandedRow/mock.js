import React from "react";

import colors from "../../../src/theme/colors";

import ParkingIcon from "../../../src/components/Icons/Parking";
import VenueIcon from "../../../src/components/Icons/Venue";
import TicketIcon from "../../../src/components/Icons/Ticket";
import VipIcon from "../../../src/components/Icons/Vip";
import CircleImage from "../../../src/components/Image/Circle";
import ExpandedItem from "../../../src/components/List/ExpandedItem";

export const sections = [
  {
    item: (
      <ExpandedItem
        title="Lineup"
        key="123"
        items={[
          {
            title: "The Roots",
            icon: (
              <CircleImage
                size={40}
                src="https://placekitten.com/g/512/288"
                alt="circleImage"
              />
            ),
            onItemClick: () => {}
          },
          {
            title: "T.I",
            icon: (
              <CircleImage
                size={40}
                src="https://placekitten.com/g/512/288"
                alt="circleImage"
              />
            ),
            onItemClick: () => {}
          }
        ]}
        totalSections={4}
      />
    )
  },
  {
    item: (
      <ExpandedItem
        title="Venue Info"
        key="456"
        items={[
          {
            title: "United Center",
            subTitle: "Chicago, IL",
            icon: <VenueIcon size={26} color={colors.blackPearl} />,
            onItemClick: () => {}
          }
        ]}
        totalSections={4}
      />
    )
  },
  {
    item: (
      <ExpandedItem
        title="Ticket Options"
        key="789"
        items={[
          {
            title: "VIP Packages",
            icon: <VipIcon size={26} color={colors.blackPearl} />,
            onItemClick: () => {}
          },
          {
            title: "Parking Pass Available",
            icon: <ParkingIcon size={26} color={colors.blackPearl} />
          }
        ]}
        totalSections={4}
      />
    )
  },
  {
    item: (
      <ExpandedItem
        title="More"
        key="1011"
        items={[
          {
            title: "Sell Tickets",
            icon: <TicketIcon size={26} color={colors.blackPearl} />,
            onItemClick: () => {}
          }
        ]}
        totalSections={4}
      />
    )
  }
];

export const items = [
  {
    title: "United Center",
    subTitle: "Chicago, IL",
    icon: <VenueIcon size={26} color={colors.blackPearl} />,
    onItemClick: () => {}
  }
];
