import { pageLoader } from "catalog";

import Footer from "../../../src/components/Footer";
import Row from "../../../src/components/Grid/Row";
import Section from "../../../src/components/List/Section";
import SectionItem from "../../../src/components/List/SectionItem";
import sections from "./mock";
import colors from "../../../src/theme/colors";
import typography from "../../../src/theme/typography";

export default {
  path: "/footer",
  title: "Footer",
  imports: {
    Footer,
    Row,
    Section,
    SectionItem,
    sections,
    colors,
    typography
  },
  content: pageLoader(() => import("./index.md"))
};
