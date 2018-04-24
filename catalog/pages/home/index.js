import { pageLoader } from "catalog";

export default {
  path: "/",
  title: "Welcome",
  content: pageLoader(() => import("./index.md"))
};
