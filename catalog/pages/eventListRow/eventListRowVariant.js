import { pageLoader } from "catalog";

import EventListRow from "../../../src/components/EventListRow";

export default {
  path: "/eventListRow/eventListRowVariant",
  title: "EventListRowVariant",
  imports: { EventListRow },
  content: pageLoader(() => import("./eventListRowVariant.md"))
};
