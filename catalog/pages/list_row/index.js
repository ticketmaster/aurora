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
import { Text } from "../../../src/components/Text";
import { constants } from "../../../src/theme";
import { listItems, sections, pureListItems, ResponsiveHeader } from "./mock";
import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";

const { MAX_COLUMNS } = constants;

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
    pureListItems,
    ThumbnailCircleImage,
    ResponsiveHeader,
    onOverflowButtonClick,
    MAX_COLUMNS,
    Container,
    Row,
    Column,
    Text
  },
  content: pageLoader(() => import("./index.md"))
};
