import { pageLoader } from "catalog";

import ImageCard from "../../../src/components/ImageCard";
import Row from "../../../src/components/Grid/Row";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import Spacing from "../../../src/components/Spacing";

export default {
  path: "/image_card",
  title: "Image Card",
  imports: { ImageCard, Row, Container, Column, Spacing },
  content: pageLoader(() => import("./index.md"))
};
