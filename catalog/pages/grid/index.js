import { pageLoader } from "catalog";

import { Container, Row, Column } from "../../../src/components/Grid";
import themes from "../../../src/theme/colorThemes";

const contentStyles = {
  backgroundColor: themes.global.primary.base,
  textAlign: "center"
};

export default {
  path: "/grid",
  title: "Grid",
  imports: { Container, Row, Column, contentStyles },
  content: pageLoader(() => import("./index.md"))
};
