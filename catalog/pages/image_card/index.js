import { pageLoader } from "catalog";

import ImageCard from "../../../src/components/ImageCard";
import Row from "../../../src/components/Grid/Row";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import spacing from "../../../src/theme/spacing";

const additionalContentStyles = {
  backgroundColor: "white",
  padding: "10px 0",
  textAlign: "center"
};

const additionalContentTransparentStyles = {
  ...additionalContentStyles,
  backgroundColor: "transparent"
};

export default {
  path: "/image_card",
  title: "Image Card",
  imports: {
    ImageCard,
    Row,
    Container,
    Column,
    spacing,
    additionalContentStyles,
    additionalContentTransparentStyles
  },
  content: pageLoader(() => import("./index.md"))
};
