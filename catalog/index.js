import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import home from "./pages/home";
import colors from "./pages/colors";
import buttons from "./pages/buttons";
import eventListRow from "./pages/eventListRow";
import eventListRowVariant from "./pages/eventListRow/eventListRowVariant";


const theme = {
  pageHeadingBackground: "linear-gradient( 124deg, #009cde, #535eb2 )"};

const pages = [home, colors, buttons, eventListRow, eventListRowVariant];

const sizes = [
  { name: "mobile", width: 479 },
  { name: "tablet", width: 767 },
  { name: "desktop", width: 1024 }
];

ReactDOM.render(
  <Catalog title="Prism" theme={theme} pages={pages} responsiveSizes={sizes} />,
  document.getElementById("catalog")
);
