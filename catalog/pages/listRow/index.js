import { pageLoader } from "catalog";

import ListRow from "../../../src/components/List/Row";
import ListContainer from "../../../src/components/List/Container";
import listItems from "./mock";
import { sections } from "../expandedRow/mock";

export default {
  path: "/listRow",
  title: "List Row",
  imports: {
    ListRow,
    ListContainer,
    listItems,
    sections
  },
  content: pageLoader(() => import("./index.md"))
};
