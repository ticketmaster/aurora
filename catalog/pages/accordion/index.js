import { pageLoader } from "catalog";
import Accordion from "../../../src/components/Accordion";
import {DATA} from "./mock";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {Accordion, DATA},
  content: pageLoader(() => import("./index.md"))
};
