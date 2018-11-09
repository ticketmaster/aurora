import { pageLoader } from "catalog";

import StatusBadgeDemo from "./StatusBadgeDemo";
import { Spacing } from "../../../src";

export default {
  path: "/status_badge",
  title: "Status Badge",
  imports: {
    StatusBadgeDemo,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
