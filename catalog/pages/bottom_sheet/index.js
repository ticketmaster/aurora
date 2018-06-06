import { pageLoader } from "catalog";

import BottomSheet from "../../../src/components/BottomSheet";
import Backdrop from "../../../src/components/Backdrop/index";

import { sections } from "../list_row/mock";
import ListRowOverflow from "../../../src/components/List/Overflow";
import Section from "../../../src/components/List/Section";
import SectionItem from "../../../src/components/List/SectionItem";

export default {
  path: "/bottomSheet",
  title: "Bottom Sheet",
  imports: {
    BottomSheet,
    Backdrop,
    Section,
    SectionItem,
    sections,
    ListRowOverflow
  },
  content: pageLoader(() => import("./index.md"))
};
