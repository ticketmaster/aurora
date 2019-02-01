import { pageLoader } from "catalog";
import Container from "../../../src/components/Grid/Container";
import Row from "../../../src/components/Grid/Row";
import Column from "../../../src/components/Grid/Column";
import {
  ListContainer,
  ListRow,
  ListRowOverflow,
  Section,
  SectionItem
} from "../../../src/components/List";
import { Button } from "../../../src/components/Button";
import { constants } from "../../../src/theme";
import { listItems, sections } from "./mock";

const { MAX_COLUMNS } = constants;

const onOverflowButtonClick = ({ scope, index }) => ({ event }) => ev => {}; // eslint-disable-line

export default {
  path: "/pureListRow",
  title: "Pure List Row",
  imports: {
    ListRow,
    ListContainer,
    ListRowOverflow,
    Section,
    SectionItem,
    Button,
    listItems,
    sections,
    onOverflowButtonClick,
    MAX_COLUMNS,
    Container,
    Row,
    Column
  },
  content: pageLoader(() => import("./index.md"))
};
