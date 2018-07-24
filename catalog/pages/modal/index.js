import { pageLoader } from "catalog";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Modal from "../../../src/components/Modal/index";
import Backdrop from "../../../src/components/Backdrop/index";

export default {
  path: "/modal",
  title: "Modal",
  imports: {
    Backdrop,
    Modal,
    ReactCSSTransitionGroup
  },
  content: pageLoader(() => import("./index.md"))
};
