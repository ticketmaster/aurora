import { pageLoader } from "catalog";

import {
  Breadcrumb,
  BreadcrumbItem
} from "../../../src/components/Breadcrumbs";
import colors from "../../../src/theme/colors";

const breadcrumbStyles = {
  color: colors.azure.base
};

export default {
  path: "/breadcrumbs",
  title: "Breadcrumbs",
  imports: {
    Breadcrumb,
    BreadcrumbItem,
    breadcrumbStyles
  },
  content: pageLoader(() => import("./index.md"))
};
