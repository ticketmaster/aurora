import { pageLoader } from "catalog";

import EventListRow from "../../../src/components/EventListRow";

export default {
  path: "/eventListRow",
  title: "EventListRow",
  imports: { EventListRow },
  content: pageLoader(() => import("./index.md"))
};
