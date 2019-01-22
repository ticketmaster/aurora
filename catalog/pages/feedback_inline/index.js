import { pageLoader } from "catalog";

import FeedbackInline from "../../../src/components/FeedbackInline";
import { ClearIcon } from "../../../src/components/Icons";
import Spacing from "../../../src/components/Spacing";

export default {
  path: "/feedback-inline",
  title: "FeedbackInline",
  imports: {
    FeedbackInline,
    ClearIcon,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
