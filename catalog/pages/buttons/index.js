import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Container, Row, Column } from "../../../src/components/Grid";
import Spacing from "../../../src/components/Spacing";
import { Button, Badge, RatingBadge } from "../../../src/components/Button";
import { ChevronIcon, StarIcon } from "../../../src/components/Icons";
import colors from "../../../src/theme/colors";

const starIconStyles = { marginRight: "2px" };

export default {
  path: "/buttons",
  title: "Buttons",
  imports: {
    Button,
    Badge,
    ChevronIcon,
    StarIcon,
    RatingBadge,
    colors,
    starIconStyles,
    ThemeProvider,
    Container,
    Row,
    Column,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
