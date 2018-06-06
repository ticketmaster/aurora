import { pageLoader } from "catalog";

import BottomSheet from "../../../src/components/BottomSheet";
import BottomSheetContainer from "../../../src/components/BottomSheet/Container";

import colors from "../../../src/theme/colors";

import { Row } from "../../../src/components/Grid";
import ExpandedRow from "../../../src/components/List/ExpandedRow";
import ParkingIcon from "../../../src/components/Icons/Parking";
import VenueIcon from "../../../src/components/Icons/Venue";
import TicketIcon from "../../../src/components/Icons/Ticket";
import VipIcon from "../../../src/components/Icons/Vip";
import CircleImage from "../../../src/components/Image/Circle";
import { sections } from "../expandedRow/mock";

export default {
  path: "/bottomSheet",
  title: "Bottom Sheet",
  imports: {
    BottomSheet,
    BottomSheetContainer,
    Row,
    sections,
    ExpandedRow,
    ParkingIcon,
    VenueIcon,
    TicketIcon,
    VipIcon,
    CircleImage,
    colors
  },
  content: pageLoader(() => import("./index.md"))
};
