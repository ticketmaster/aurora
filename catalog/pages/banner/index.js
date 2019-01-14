import { pageLoader } from "catalog";

import Banner from "../../../src/components/Banner";
import { ClearIcon } from "../../../src/components/Icons";
import Spacing from "../../../src/components/Spacing";

export default {
  path: "/banner",
  title: "Banner",
  imports: {
    Banner,
    ClearIcon,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
