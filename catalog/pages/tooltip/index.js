import { pageLoader } from "catalog";

import TooltipDemo from "./TooltipDemo";
import SeatTooltipDemo from "./SeatTooltipDemo";

export default {
  path: "/tooltip",
  title: "Tooltip",
  imports: {
    TooltipDemo,
    SeatTooltipDemo
  },
  content: pageLoader(() => import("./index.md"))
};
