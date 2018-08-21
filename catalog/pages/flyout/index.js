import { pageLoader } from "catalog";

import Flyout from "../../../src/components/Flyout";
import FlyoutItem from "../../../src/components/Flyout/Item";

export default {
  path: "/flyout",
  title: "Flyout",
  imports: {
    Flyout,
    FlyoutItem
  },
  content: pageLoader(() => import("./index.md"))
};
