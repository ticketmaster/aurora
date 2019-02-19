import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import accordion from "./pages/accordion";
import adaptiveModal from "./pages/adaptive_modal";
import banner from "./pages/banner";
import bottomSheet from "./pages/bottom_sheet";
import breadcrumbs from "./pages/breadcrumbs";
import buttons from "./pages/buttons";
import eventListing from "./pages/event_listing"
import calendarView from "./pages/calendar_view";
import colors from "./pages/colors";

import deviceConnection from "./pages/device_connection";
import feedbackInline from "./pages/feedback_inline";
import grid from "./pages/grid/index";
import header from "./pages/header";
import home from "./pages/home";
import icons from "./pages/icons/index";
import imageCard from "./pages/image_card";
import images from "./pages/images";
import inputs from "./pages/inputs";

import links from "./pages/links";
import listRow from "./pages/list_row";
import navBar from "./pages/nav_bar";
import popover from "./pages/popover";
import rangeSlider from "./pages/range_slider";
import statusBadge from "./pages/status_badge";
import tabs from "./pages/tabs";
import tooltip from "./pages/tooltip";
import typography from "./pages/typography";

const theme = {
  pageHeadingBackground: "linear-gradient( 124deg, #009cde, #535eb2 )"
};

const pages = [
  home,
  colors,
  typography,
  accordion,
  buttons,
  eventListing,
  grid,
  icons,
  images,
  imageCard,
  listRow,
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
