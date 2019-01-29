import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import home from "./pages/home";
import colors from "./pages/colors";
import typography from "./pages/typography";
import buttons from "./pages/buttons";
import grid from "./pages/grid/index";
import icons from "./pages/icons/index";
import imageCard from "./pages/image_card";
import listRow from "./pages/list_row";
import pureListRow from "./pages/pure_list_row";
import header from "./pages/header";
import inputs from "./pages/inputs";
import navBar from "./pages/nav_bar";
import bottomSheet from "./pages/bottom_sheet";
import images from "./pages/images";
import breadcrumbs from "./pages/breadcrumbs";
import adaptiveModal from "./pages/adaptive_modal";
import calendarView from "./pages/calendar_view";
import popover from "./pages/popover";
import tooltip from "./pages/tooltip";
import deviceConnection from "./pages/device_connection";
import links from "./pages/links";
import tabs from "./pages/tabs";
import statusBadge from "./pages/status_badge";
import banner from "./pages/banner";
import feedbackInline from "./pages/feedback_inline";
import rangeSlider from "./pages/range_slider";

const theme = {
  pageHeadingBackground: "linear-gradient( 124deg, #009cde, #535eb2 )"
};

const pages = [
  home,
  colors,
  typography,
  buttons,
  grid,
  icons,
  images,
  imageCard,
  listRow,
  pureListRow,
  header,
  inputs,
  navBar,
  breadcrumbs,
  bottomSheet,
  adaptiveModal,
  calendarView,
  popover,
  tooltip,
  deviceConnection,
  links,
  tabs,
  statusBadge,
  banner,
  feedbackInline,
  rangeSlider
];

const sizes = [
  { name: "xs mobile", width: 320, height: 568 },
  { name: "mobile", width: 480, height: 736 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1024, height: 768 },
  { name: "xl desktop", width: 1440, height: 1024 }
];

ReactDOM.render(
  <Catalog
    title="Aurora"
    theme={theme}
    pages={pages}
    responsiveSizes={sizes}
  />,
  document.getElementById("catalog")
);
