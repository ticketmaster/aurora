import { pageLoader } from "catalog";

import Header from "../../../src/components/Header";
import Heading from "../../../src/components/Header/Heading";
import HeaderWithImage from "../../../src/components/Header/WithImage";
import ImageCard from "../../../src/components/ImageCard";
import Column from "../../../src/components/Grid/Column";

export default {
  path: "/header",
  title: "Header & Heading",
  imports: { Header, Heading, HeaderWithImage, Column, ImageCard },
  content: pageLoader(() => import("./index.md"))
};
