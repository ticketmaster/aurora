import { pageLoader } from "catalog";

import Header from "../../../src/components/Header";
import Heading from "../../../src/components/Header/Heading";
import HeaderWithImage from "../../../src/components/Header/WithImage";
import ImageCard from "../../../src/components/ImageCard";
import Breadcrumb from "../../../src/components/Breadcrumbs";
import { Column, Row } from "../../../src/components/Grid";
import { RatingBadge } from "../../../src/components/Button";
import { StarIcon } from "../../../src/components/Icons";
import colors from "../../../src/theme/colors";

const breadcrumbStyles = { color: colors.white.base };
const starIconStyles = { marginRight: "2px" };
const ratingBadgeStyles = { marginLeft: "12px" };

export default {
  path: "/header",
  title: "Header & Heading",
  imports: {
    Header,
    Heading,
    HeaderWithImage,
    Column,
    Row,
    ImageCard,
    RatingBadge,
    StarIcon,
    Breadcrumb,
    colors,
    breadcrumbStyles,
    starIconStyles,
    ratingBadgeStyles
  },
  content: pageLoader(() => import("./index.md"))
};
