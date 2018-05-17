import { pageLoader } from "catalog";

import { Container, Row, Column } from "../../../src/components/Grid";
import colors from "../../../src/theme/colors";

const contentStyles = {
  backgroundColor: colors.azure.base,
  textAlign: "center"
};

export default {
  path: "/grid",
  title: "Grid",
  imports: { Container, Row, Column, contentStyles },
  content: pageLoader(() => import("./index.md"))
};
