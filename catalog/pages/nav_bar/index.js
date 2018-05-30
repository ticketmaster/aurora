import { pageLoader } from "catalog";

import NavBar from "../../../src/components/NavBar";
import Header from "../../../src/components/Header";
import spacing from "../../../src/theme/spacing";

export default {
  path: "/nav_bar",
  title: "Nav Bar",
  imports: { NavBar, Header, spacing },
  content: pageLoader(() => import("./index.md"))
};
