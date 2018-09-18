import { pageLoader } from "catalog";

import {
  CAIcon,
  CampsiteIcon,
  ChevronIcon,
  ClubIcon,
  CrossIcon,
  DonationIcon,
  FacebookIcon,
  GeneralIcon,
  InstagramIcon,
  OverflowIcon,
  ParkingIcon,
  SearchIcon,
  SpecialIcon,
  StarIcon,
  TicketIcon,
  TwitterIcon,
  LinkedinIcon,
  USIcon,
  UserIcon,
  VenueIcon,
  VipIcon,
  YoutubeIcon,
  HeartIcon,
  AppleIcon,
  GooglePlayIcon
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
    CAIcon,
    CampsiteIcon,
    ChevronIcon,
    ClubIcon,
    CrossIcon,
    DonationIcon,
    FacebookIcon,
    GeneralIcon,
    InstagramIcon,
    OverflowIcon,
    ParkingIcon,
    SearchIcon,
    SpecialIcon,
    StarIcon,
    TicketIcon,
    TwitterIcon,
    LinkedinIcon,
    USIcon,
    UserIcon,
    VenueIcon,
    VipIcon,
    YoutubeIcon,
    HeartIcon,
    AppleIcon,
    GooglePlayIcon,
    Column,
    Container,
    Row,
    iconStyle,
    iconLabelStyle
  },
  content: pageLoader(() => import("./index.md"))
};
