import { pageLoader } from "catalog";

import StatusBadgeDemo from "./StatusBadgeDemo";
import { Spacing, themes } from "../../../src";
import {StatusBadge} from "../../../src/components/StatusBadge";

export default {
  path: "/status_badge",
  title: "Status Badge",
  imports: {
    StatusBadgeDemo,
    Spacing,
    StatusBadge,
    themes
  },
  content: pageLoader(() => import("./index.md"))
};
