import React from "react";

import colors from "../../../src/theme/colors";

import ParkingIcon from "../../../src/components/Icons/Parking";
import VenueIcon from "../../../src/components/Icons/Venue";
import TicketIcon from "../../../src/components/Icons/Ticket";
import VipIcon from "../../../src/components/Icons/Vip";
import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";

export const listItems = [
  {
    rowId: "567",
    title: "Del Mar Fairgrounds",
    subTitle: "KABOO 3-Day Pass",
    dateTitle: "apr 23",
    dateSubTitle: "Thu, 8:00 PM",
    buttonText: "See Tickets",
    variant: "standard",
    onClick: () => {},
    url: "/"
  },
  {
    rowId: "569",
    title: "Del Mar Fairgrounds",
    subTitle: "KABOO 3-Day Pass",
    dateTitle: "apr 23",
    dateSubTitle: "Thu, 8:00 PM",
    buttonText: "See Tickets",
    variant: "standard",
    onClick: () => {},
    url: "/"
  },
  {
    rowId: "570",
    title: "Del Mar Fairgrounds",
    subTitle: "KABOO 3-Day Pass",
    dateTitle: "apr 23",
    dateSubTitle: "Thu, 8:00 PM",
    buttonText: "See Tickets",
    variant: "standard",
    onClick: () => {},
    url: "/"
  }
];

export const sections = [
  {
    title: "Ticket Options",
    key: "789",
    items: [
      {
        title: "VIP Packages",
        icon: <VipIcon size={26} color={colors.blackPearl} />,
        onItemClick: () => {}
      },
      {
        title: "Parking Pass Available",
        icon: <ParkingIcon size={26} color={colors.blackPearl} />
      }
    ],
    totalSections: 4
  },

  {
    title: "Venue Info",
    key: "456",
    items: [
      {
        title: "United Center",
        subTitle: "Chicago, IL",
        icon: <VenueIcon size={26} color={colors.blackPearl} />,
        onItemClick: () => {},
        url: "/"
      }
    ],
    totalSections: 4
  },

  {
    title: "Lineup",
    key: "123",
    items: [
      {
        title:
          "The Roots tour of San Diego california hdjhj wjdwjd wjdhwejkdh wdjewj",
        icon: (
          <ThumbnailCircleImage
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
          <ThumbnailCircleImage
            size={40}
            src="https://placekitten.com/g/512/288"
            alt="circleImage"
          />
        ),
        onItemClick: () => {}
      }
    ],
    totalSections: 4
  },
  {
    title: "More",
    key: "1011",
    items: [
      {
        title: "Sell Tickets",
        icon: <TicketIcon size={26} color={colors.blackPearl} />,
        onItemClick: () => {}
      }
    ],
    totalSections: 4
  }
];

export const items = [
  {
    title: "United Center",
    subTitle: "Chicago, IL",
    icon: <VenueIcon size={26} color={colors.blackPearl} />,
    onItemClick: () => {},
    url: "/"
  }
];
