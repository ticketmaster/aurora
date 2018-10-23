import { pageLoader } from "catalog";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import BottomSheet from "../../../src/components/BottomSheet";
import Backdrop from "../../../src/components/List/Backdrop";

import { sections } from "../list_row/mock";
import ListRowOverflow from "../../../src/components/List/Overflow";
import Section from "../../../src/components/List/Section";
import SectionItem from "../../../src/components/List/SectionItem";
import { constants } from "../../../src/theme";

const { MAX_COLUMNS } = constants;

export default {
  path: "/bottomSheet",
  title: "Bottom Sheet",
  imports: {
    BottomSheet,
    Backdrop,
    Section,
    SectionItem,
    sections,
    ListRowOverflow,
    TransitionGroup,
    CSSTransition,
    MAX_COLUMNS
  },
  content: pageLoader(() => import("./index.md"))
};
