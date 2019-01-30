import React from "react";
import styled from "styled-components";

import ParkingIcon from "../../../src/components/Icons/Parking";
import VenueIcon from "../../../src/components/Icons/Venue";
import TicketIcon from "../../../src/components/Icons/Ticket";
import VipIcon from "../../../src/components/Icons/Vip";
import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";
import colors from "../../../src/theme/colors";
import { Text } from "../../../src/components/Text";

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const listItems = [
  {
    header: (
      <Header>
        <ThumbnailCircleImage
          size={40}
          src="https://placekitten.com/g/512/288"
          alt="circleImage"
        />
        <Text style={{ marginLeft: "15px" }} size="giga">
          VIP Packages
        </Text>
        <Text
          style={{ marginLeft: "15px" }}
          variant="accent"
          accent="turquoise"
          size="giga"
        >
          Expires 06/17/2019
        </Text>
      </Header>
    )
  },
  {
    header: (
      <Header>
        <ThumbnailCircleImage
          size={40}
          src="https://placekitten.com/g/512/289"
          alt="circleImage"
        />
        <Text style={{ marginLeft: "15px" }} size="giga">
          VIP Packages
        </Text>
        <Text
          style={{ marginLeft: "15px" }}
          variant="accent"
          accent="turquoise"
          size="giga"
        >
          Expires 05/11/2020
        </Text>
      </Header>
    )
  },
  {
    header: (
      <Header>
        <ThumbnailCircleImage
          size={40}
          src="https://placekitten.com/g/512/283"
          alt="circleImage"
        />
        <Text style={{ marginLeft: "15px" }} size="giga">
          VIP Packages
        </Text>
        <Text
          style={{ marginLeft: "15px" }}
          variant="accent"
          accent="turquoise"
          size="giga"
        >
          Expires 08/22/2021
        </Text>
      </Header>
    )
  }
];

export const sections = [
  {
    title: "Ticket Options",
    id: "789",
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
    ]
  },

  {
    title: "Venue Info",
    id: "456",
    items: [
      {
        title: "United Center",
        subTitle: "Chicago, IL",
        icon: <VenueIcon size={26} color={colors.blackPearl} />,
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
        icon: <TicketIcon size={26} color={colors.blackPearl} />,
        onItemClick: () => {}
      }
    ]
  }
];
