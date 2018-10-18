import { pageLoader } from "catalog";

import TooltipDemo from "./TooltipDemo";

export default {
  path: "/tooltip",
  title: "Tooltip",
  imports: {
    TooltipDemo
  },
  content: pageLoader(() => import("./index.md"))
};
