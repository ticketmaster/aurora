import { pageLoader } from "catalog";

import ListRow from "../../../src/components/List/Row";
import Container from "../../../src/components/List/Container";
import { Row, Column } from "../../../src/components/Grid";

export default {
  path: "/listRow",
  title: "List Row",
  imports: { ListRow, Container, Row, Column },
  content: pageLoader(() => import("./index.md"))
};
