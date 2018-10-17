import { pageLoader } from "catalog";

import Spacing from "../../../src/components/Spacing";
import PopOverDemo from "./PopOverDemo";

export default {
  path: "/popover",
  title: "PopOver",
  imports: {
    PopOverDemo,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
