import { pageLoader } from "catalog";

import { ResponsiveImage, StaticImage } from "../../../src/";

export default {
  path: "/images",
  title: "Images",
  imports: {
    ResponsiveImage,
    StaticImage
  },
  content: pageLoader(() => import("./index.md"))
};
