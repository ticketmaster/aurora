import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import Breadcrumb from "../../../src/components/Breadcrumbs";

export default {
  path: "/breadcrumbs",
  title: "Breadcrumbs",
  imports: {
    Breadcrumb,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
