import React from "react";
import styled from "styled-components";

import ParkingIcon from "../../../src/components/Icons/Parking";
import VenueIcon from "../../../src/components/Icons/Venue";
import TicketIcon from "../../../src/components/Icons/Ticket";
import VipIcon from "../../../src/components/Icons/Vip";
import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";
import { themes } from "../../../src/theme";
import { mediumAndUp } from "../../../src/theme/mediaQueries";

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
    subTitle: "KABOO 3-Day Premium Pass with Exclusive Back Stage Access",
    dateTitle: "apr 23",
    dateSubTitle: "Thu, 8:00 PM",
    buttonText: "Acheter des Billets",
    variant: "standard",
    onClick: () => {},
    url: "/"
  },
  {
    rowId: "571",
    title:
      "CEG & T Presents Amorphis/Dark Tranquillity/Moonspell/Omnium Gatherum",
    subTitle: "Gramercy Theatre - New York, NY",
    dateTitle: "sep 7",
    dateSubTitle: "Fri, 7:00 PM",
    buttonText: "See Tickets",
    variant: "standard",
    onClick: () => {},
    url: "/"
  }
];

export const sections = [
  {
    title: "Ticket Options",
    id: "789",
    items: [
      {
        title: "VIP Packages",
        icon: <VipIcon size={26} color={themes.global.darkFill} />,
        onItemClick: () => {}
      },
      {
        title: "Parking Pass Available",
        icon: <ParkingIcon size={26} color={themes.global.darkFill} />
      }
    ]
  },

  {
    title: "Venue Info",
    id: "456",
    items: [
      {
        title: "United Center",
        subTitle: "Chicago, IL",
        icon: <VenueIcon size={26} color={themes.global.darkFill} />,
        onItemClick: () => {},
        url: "/"
      }
    ]
  },

  {
    title: "Lineup",
    id: "123",
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
    ]
  },
  {
    title: "More",
    id: "1011",
    items: [
      {
        title: "Sell Tickets",
        icon: <TicketIcon color={themes.global.darkFill} />,
        onItemClick: () => {}
      }
    ]
  }
];

export const items = [
  {
    title: "United Center",
    subTitle: "Chicago, IL",
    icon: <VenueIcon size={26} color={themes.global.darkFill} />,
    onItemClick: () => {},
    url: "/"
  }
];

export const ResponsiveHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0;

  ${mediumAndUp`
    padding-left: 35px;
  `};
`;

export const pureListItems = [
  {
    image: "https://placekitten.com/g/512/288",
    text: "VIP Packages",
    expires: "Expires 06/17/2019"
  },
  {
    image: "https://placekitten.com/g/512/289",
    text: "VIP Packages",
    expires: "Expires 05/11/2020"
  },
  {
    image: "https://placekitten.com/g/512/283",
    text: "VIP Packages",
    expires: "Expires 08/22/2021"
  }
];
