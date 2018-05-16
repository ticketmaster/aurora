import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import home from "./pages/home/index";
import colors from "./pages/colors/index";
import buttons from "./pages/buttons/index";
import grid from "./pages/grid/index";
import icons from "./pages/icons/index";

const theme = {
  pageHeadingBackground: "linear-gradient( 124deg, #009cde, #535eb2 )"
};
const pages = [home, colors, buttons, grid, icons];

const sizes = [
  { name: "mobile", width: 480 },
  { name: "tablet", width: 768 },
  { name: "desktop", width: 1024 },
  { name: "xLarge desktop", width: 1440 }
];

ReactDOM.render(
  <Catalog title="Prism" theme={theme} pages={pages} responsiveSizes={sizes} />,
  document.getElementById("catalog")
);
