import { pageLoader } from "catalog";

import CircleImage from "../../../src/components/Image/Circle";
import { Container, Row, Column } from "../../../src/components/Grid";

export default {
  path: "/image",
  title: "Image",
  imports: { CircleImage, Container, Row, Column },
  content: pageLoader(() => import("./index.md"))
};
