import { pageLoader } from "catalog";

import {
  CAIcon,
  CampsiteIcon,
  ChevronIcon,
  ClubIcon,
  CrossIcon,
  ConcessionIcon,
  DonationIcon,
  FacebookIcon,
  GeneralIcon,
  InstagramIcon,
  HotelIcon,
  MealIcon,
  MembershipIcon,
  MerchandiseIcon,
  OverflowIcon,
  ParkingIcon,
  SpecialIcon,
  StarIcon,
  TransportationIcon,
  TwitterIcon,
  USIcon,
  VenueIcon,
  VipIcon,
  YoutubeIcon,
  // approved icons
  InfoDotIcon,
  ErrorIcon,
  SuccessIcon,
  InfoIcon,
  BackIcon,
  ForwardIcon,
  UpIcon,
  DownIcon,
  CloseIcon,
  DeleteIcon,
  CalendarIcon,
  HomeIcon,
  SearchIcon,
  BookmarkIcon,
  ClearIcon,
  EditIcon,
  FeedbackIcon,
  FilterIcon,
  LocationIcon,
  TicketIcon,
  TicketsIcon,
  UserIcon
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
    ConcessionIcon,
    DonationIcon,
    FacebookIcon,
    GeneralIcon,
    InstagramIcon,
    HotelIcon,
    MealIcon,
    MembershipIcon,
    MerchandiseIcon,
    OverflowIcon,
    ParkingIcon,
    SpecialIcon,
    StarIcon,
    TransportationIcon,
    TwitterIcon,
    USIcon,
    VenueIcon,
    VipIcon,
    YoutubeIcon,

    InfoDotIcon,
    ErrorIcon,
    SuccessIcon,
    InfoIcon,
    BackIcon,
    ForwardIcon,
    UpIcon,
    DownIcon,
    CloseIcon,
    DeleteIcon,
    CalendarIcon,
    HomeIcon,
    SearchIcon,
    BookmarkIcon,
    ClearIcon,
    EditIcon,
    FeedbackIcon,
    FilterIcon,
    LocationIcon,
    TicketIcon,
    TicketsIcon,
    UserIcon,

    Column,
    Container,
    Row,

    iconStyle,
    iconLabelStyle
  },
  content: pageLoader(() => import("./index.md"))
};
