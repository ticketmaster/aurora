import { pageLoader } from "catalog";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Modal from "../../../src/components/Modal/index";
import Backdrop from "../../../src/components/Backdrop/index";

export default {
  path: "/modal",
  title: "Modal",
  imports: {
    Backdrop,
    Modal,
    TransitionGroup,
    CSSTransition
  },
  content: pageLoader(() => import("./index.md"))
};
