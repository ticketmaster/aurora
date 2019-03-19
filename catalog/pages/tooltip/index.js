import { pageLoader } from "catalog";

import TooltipDemo from "./TooltipDemo";
import SeatTooltipDemo from "./SeatTooltipDemo";
import TooltipRestrictedDemo from "./TooltipRestricted";

export default {
  path: "/tooltip",
  title: "Tooltip",
  imports: {
    TooltipDemo,
    SeatTooltipDemo,
    TooltipRestrictedDemo
  },
  content: pageLoader(() => import("./index.md"))
};
