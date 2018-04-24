import { pageLoader } from "catalog";

import Button from "../../../src/components/Button";

export default {
  path: "/buttons",
  title: "Buttons",
  imports: { Button },
  content: pageLoader(() => import("./index.md"))
};
