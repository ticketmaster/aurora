import { pageLoader } from "catalog";

import TooltipDemo from "./TooltipDemo";
import SeatTooltipDemo from "./SeatTooltipDemo";
import TooltipRestrictedDemo from "./TooltipRestricted";
import TooltipRestrictedAsyncDemo from "./TooltipRestrictedAsync";

export default {
  path: "/tooltip",
  title: "Tooltip",
  imports: {
    TooltipDemo,
    SeatTooltipDemo,
    TooltipRestrictedDemo,
    TooltipRestrictedAsyncDemo
  },
  content: pageLoader(() => import("./index.md"))
};
