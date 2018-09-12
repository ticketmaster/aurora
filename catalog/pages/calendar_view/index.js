import { pageLoader } from "catalog";

import { DayTile } from "../../../src/components/CalendarView";
import { ResponsiveImage } from "../../../src/components/Image";

export default {
  path: "/calendar-view",
  title: "Calendar View",
  imports: {
    DayTile,
    ResponsiveImage
  },
  content: pageLoader(() => import("./index.md"))
};
