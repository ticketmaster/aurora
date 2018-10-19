import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Container, Row, Column } from "../../../src/components/Grid";
import Spacing from "../../../src/components/Spacing";
import { Link, Text } from "../../../src/components/Text";

export default {
  path: "/links",
  title: "Links",
  imports: {
    Link,
    Text,
    ThemeProvider,
    Container,
    Row,
    Column,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
