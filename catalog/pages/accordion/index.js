import { pageLoader } from "catalog";
import Accordion from "../../../src/components/Accordion";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {Accordion},
  content: pageLoader(() => import("./index.md"))
};
