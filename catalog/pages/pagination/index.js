import { pageLoader } from "catalog";

import {
  BreadcrumbList,
  BreadcrumbItem
} from "../../../src/components/Pagination";
import colors from "../../../src/theme/colors";

const breadcrumbListStyles = {
  color: colors.azure.base
};

export default {
  path: "/pagination",
  title: "Pagination",
  imports: {
    BreadcrumbList,
    BreadcrumbItem,
    breadcrumbListStyles
  },
  content: pageLoader(() => import("./index.md"))
};
