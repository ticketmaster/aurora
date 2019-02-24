import { pageLoader } from "catalog";

import StatusBadgeDemo from "./StatusBadgeDemo";
import { Spacing, themes } from "../../../src";
import {StatusBadge} from "../../../src/components/StatusBadge";
import {Row, Column, Container} from "../../../src/components/Grid"

export default {
  path: "/status_badge",
  title: "Status Badge",
  imports: {
    StatusBadgeDemo,
    Spacing,
    StatusBadge,
    themes,
    Column,
    Container,
    Row
  },
  content: pageLoader(() => import("./index.md"))
};
