import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import Header from "../../../src/components/Header";
import Heading from "../../../src/components/Header/Heading";
import HeaderWithImage from "../../../src/components/Header/WithImage";
import ImageCard from "../../../src/components/ImageCard";
import Breadcrumb from "../../../src/components/Breadcrumbs";
import Spacing from "../../../src/components/Spacing";
import LazyHeaderWithImageExample from "./LazyHeaderWithImageExample";
import { Column, Row } from "../../../src/components/Grid";
import { RatingBadge } from "../../../src/components/Button";
import { StarIcon } from "../../../src/components/Icons";
import colors from "../../../src/theme/colors";

const starIconStyles = { marginRight: "2px" };
const ratingBadgeStyles = { marginLeft: "12px" };

export default {
  path: "/header",
  title: "Header & Heading",
  imports: {
    Header,
    Heading,
    LazyHeaderWithImageExample,
    HeaderWithImage,
    Column,
    Row,
    ImageCard,
    Spacing,
    RatingBadge,
    StarIcon,
    Breadcrumb,
    colors,
    starIconStyles,
    ratingBadgeStyles,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
