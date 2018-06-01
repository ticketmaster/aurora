import { pageLoader } from "catalog";

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
    starIconStyles
  },
  content: pageLoader(() => import("./index.md"))
};
