import { pageLoader } from "catalog";

import { ResponsiveImage, StaticImage } from "../../../src/";
import LazyImageExample from "./LazyImageExample";

export default {
  path: "/images",
  title: "Images",
  imports: {
    ResponsiveImage,
    StaticImage,
    LazyImageExample
  },
  content: pageLoader(() => import("./index.md"))
};
