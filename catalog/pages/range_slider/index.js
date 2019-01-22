import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Container, Row, Column } from "../../../src/components/Grid";
import Spacing from "../../../src/components/Spacing";
import RangeSlider from "../../../src/components/RangeSlider";

export default {
  path: "/range",
  title: "Range Slider",
  imports: {
    RangeSlider,
    ThemeProvider,
    Container,
    Row,
    Column,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
