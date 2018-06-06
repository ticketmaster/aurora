import { pageLoader } from "catalog";

import {
  ListContainer,
  ListRow,
  ListRowOverflow,
  Section,
  SectionItem
} from "../../../src/components/List";
import { Button } from "../../../src/components/Button";
import { listItems, sections } from "./mock";

const onOverflowButtonClick = ({ scope, index }) => ({ event }) => ev => {}; // eslint-disable-line

export default {
  path: "/listRow",
  title: "List Row",
  imports: {
    ListRow,
    ListContainer,
    ListRowOverflow,
    Section,
    SectionItem,
    Button,
    listItems,
    sections,
    onOverflowButtonClick
  },
  content: pageLoader(() => import("./index.md"))
};
