import { pageLoader } from "catalog";

import { ResponsiveImage, StaticImage } from "../../../src/";
import ThumbnailCircleImage from "../../../src/components/Image/ThumbnailCircle";
import { Container, Row, Column } from "../../../src/components/Grid";
import LazyResponsiveImageExample from "./LazyResponsiveImageExample";

export default {
  path: "/images",
  title: "Images",
  imports: {
    ResponsiveImage,
    StaticImage,
    ThumbnailCircleImage,
    Container,
    Row,
    Column,
    LazyResponsiveImageExample
  },
  content: pageLoader(() => import("./index.md"))
};
