import { pageLoader } from "catalog";

import ListRow from "../../../src/components/List/Row";
import { Container, Row, Column } from "../../../src/components/Grid";

export default {
  path: "/listRow",
  title: "List Row",
  imports: { ListRow, Container, Row, Column },
  content: pageLoader(() => import("./index.md"))
};
