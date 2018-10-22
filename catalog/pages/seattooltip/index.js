import { pageLoader } from "catalog";

import SeatTooltipDemo from "./SeatTooltipDemo";

export default {
  path: "/seattooltip",
  title: "Seat Tooltip",
  imports: {
    SeatTooltipDemo
  },
  content: pageLoader(() => import("./index.md"))
};
