import { pageLoader } from "catalog";

import {
  ChevronIcon,
  UserIcon,
  OverflowIcon,
  SearchIcon,
  ParkingIcon,
  TicketIcon,
  VenueIcon,
  VipIcon,
  CrossIcon,
  StarIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
  USIcon,
  CAIcon
} from "../../../src/components/Icons/index";
import { Container, Row, Column } from "../../../src/components/Grid";
import colors from "../../../src/theme/colors";

const iconStyle = {
  backgroundColor: colors.white.base,
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const iconLabelStyle = {
  padding: "10px",
  textAlign: "center"
};

export default {
  path: "/icons",
  title: "Icons",
  imports: {
    ChevronIcon,
    UserIcon,
    OverflowIcon,
    SearchIcon,
    ParkingIcon,
    TicketIcon,
    VenueIcon,
    VipIcon,
    CrossIcon,
    StarIcon,
    TwitterIcon,
    InstagramIcon,
    FacebookIcon,
    YoutubeIcon,
    USIcon,
    CAIcon,
    Container,
    Row,
    Column,
    iconStyle,
    iconLabelStyle
  },
  content: pageLoader(() => import("./index.md"))
};
