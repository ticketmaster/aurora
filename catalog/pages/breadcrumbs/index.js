import { pageLoader } from "catalog";

import {
  BreadcrumbList,
  BreadcrumbItem
} from "../../../src/components/Breadcrumbs";
import colors from "../../../src/theme/colors";

const breadcrumbListStyles = {
  color: colors.azure.base
};

export default {
  path: "/breadcrumbs",
  title: "Breadcrumbs",
  imports: {
    BreadcrumbList,
    BreadcrumbItem,
    breadcrumbListStyles
  },
  content: pageLoader(() => import("./index.md"))
};
