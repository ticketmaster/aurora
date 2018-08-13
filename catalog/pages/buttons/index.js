import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Button, Badge, RatingBadge } from "../../../src/components/Button";
import { ChevronIcon, StarIcon } from "../../../src/components/Icons";
import colors from "../../../src/theme/colors";

const starIconStyles = { marginRight: "2px" };
const spacing = { padding: "10px", width: "50%", margin: "auto" };

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
    spacing
  },
  content: pageLoader(() => import("./index.md"))
};
