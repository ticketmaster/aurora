import React from "react";

import colors from "../../../src/theme/colors";
import FacebookIcon from "../../../src/components/Icons/Facebook";
import TwitterIcon from "../../../src/components/Icons/Twitter";
import InstagramIcon from "../../../src/components/Icons/Instagram";
import YoutubeIcon from "../../../src/components/Icons/Youtube";

const sections = [
  {
    title: "Our Network",
    key: "789",
    items: [
      {
        title: "Live Nation",
        onItemClick: () => {}
      },
      {
        title: "House of Blues",
        onItemClick: () => {}
      },
      {
        title: "Front Gate Tickets",
        onItemClick: () => {}
      },
      {
        title: "TicketsNow",
        onItemClick: () => {}
      },
      {
        title: "universe",
        onItemClick: () => {}
      },
      {
        title: "NFL Ticket Exchange",
        onItemClick: () => {}
      },
      {
        title: "NBATICKETS.com",
        onItemClick: () => {}
      },
      {
        title: "NHL Ticket Exchange",
        onItemClick: () => {}
      }
    ],
    totalSections: 5
  },

  {
    title: "Friends & Partners",
    key: "456",
    items: [
      {
        title: "American Express",
        onItemClick: () => {}
      },
      {
        title: "Allianz",
        onItemClick: () => {}
      },
      {
        title: "AWS",
        onItemClick: () => {}
      }
    ],
    totalSections: 5
  },

  {
    title: "We're here to help",
    key: "123",
    items: [
      {
        title: "Ticket Your Event",
        onItemClick: () => {}
      },
      {
        title: "FAQs",
        onItemClick: () => {}
      },
      {
        title: "Refunds and Exchanges",
        onItemClick: () => {}
      },
      {
        title: "Contact Us",
        onItemClick: () => {}
      },
      {
        title: "Custom Tickets",
        onItemClick: () => {}
      },
      {
        title: "Gift Cards",
        onItemClick: () => {}
      }
    ],
    totalSections: 5
  },

  {
    title: "About Us",
    key: "123",
    items: [
      {
        title: "Who we are",
        onItemClick: () => {}
      },
      {
        title: "Insider Blog",
        onItemClick: () => {}
      },
      {
        title: "Work With Us",
        onItemClick: () => {}
      },
      {
        title: "Across the Globe",
        onItemClick: () => {}
      },
      {
        title: "Innovation",
        onItemClick: () => {}
      },
      {
        title: "Developer",
        onItemClick: () => {}
      },
      {
        title: "Privacy Policy",
        onItemClick: () => {}
      }
    ],
    totalSections: 5
  },
  {
    title: "Let's Connect",
    key: "480",
    items: [
      {
        title: "Facebook",
        icon: <FacebookIcon size={14} color={colors.white.light} />,
        onItemClick: () => {}
      },
      {
        title: "Twitter",
        icon: <TwitterIcon size={14} color={colors.white.light} />,
        onItemClick: () => {}
      },
      {
        title: "Instagram",
        icon: <InstagramIcon size={14} color={colors.white.light} />,
        onItemClick: () => {}
      },
      {
        title: "Youtube",
        icon: <YoutubeIcon size={14} color={colors.white.light} />,
        onItemClick: () => {}
      }
    ],
    totalSections: 5
  }
];

export default sections;
