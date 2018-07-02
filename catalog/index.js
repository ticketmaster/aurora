import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import home from "./pages/home/index";
import colors from "./pages/colors/index";
import typography from "./pages/typography/index";
import buttons from "./pages/buttons/index";
import grid from "./pages/grid/index";
import icons from "./pages/icons/index";
import imageCard from "./pages/image_card/index";
import listRow from "./pages/listRow";
import header from "./pages/header/index";
import inputs from "./pages/inputs/index";
import navBar from "./pages/nav_bar/index";
import breadcrumbs from "./pages/breadcrumbs";

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
  imageCard,
  listRow,
  header,
  inputs,
  navBar,
  breadcrumbs
];

const sizes = [
  { name: "xs mobile", width: 320, height: 568 },
  { name: "mobile", width: 414, height: 736 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1024, height: 768 },
  { name: "xl desktop", width: 1440, height: 1024 }
];

ReactDOM.render(
  <Catalog title="Prism" theme={theme} pages={pages} responsiveSizes={sizes} />,
  document.getElementById("catalog")
);
