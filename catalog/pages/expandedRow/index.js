import { pageLoader } from "catalog";

import colors from "../../../src/theme/colors";

import ExpandedRow from "../../../src/components/List/ExpandedRow";
import ParkingIcon from "../../../src/components/Icons/Parking";
import VenueIcon from "../../../src/components/Icons/Venue";
import TicketIcon from "../../../src/components/Icons/Ticket";
import VipIcon from "../../../src/components/Icons/Vip";
import CircleImage from "../../../src/components/Image/Circle";
import { items, sections } from "./mock";

export default {
  path: "/expandedRow",
  title: "Expanded Row",
  imports: {
    ExpandedRow,
    items,
    sections,
    ParkingIcon,
    VenueIcon,
    TicketIcon,
    VipIcon,
    CircleImage,
    colors
  },
  content: pageLoader(() => import("./index.md"))
};
