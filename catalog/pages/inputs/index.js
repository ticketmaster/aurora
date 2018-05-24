import { pageLoader } from "catalog";

import { Search } from "../../../src/components/Input";
import Header from "../../../src/components/Header";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import Row from "../../../src/components/Grid/Row";

export default {
  path: "/inputs",
  title: "Inputs",
  imports: {
    Search,
    Header,
    Column,
    Container,
    Row
  },
  content: pageLoader(() => import("./index.md"))
};
