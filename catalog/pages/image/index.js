import { pageLoader } from "catalog";

import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";
import { Container, Row, Column } from "../../../src/components/Grid";

export default {
  path: "/image",
  title: "Image",
  imports: { ThumbnailCircleImage, Container, Row, Column },
  content: pageLoader(() => import("./index.md"))
};
