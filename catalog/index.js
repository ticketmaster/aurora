import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import home from "./pages/home/index";
import colors from "./pages/colors/index";
import buttons from "./pages/buttons/index";

const theme = {
  pageHeadingBackground: "linear-gradient( 124deg, #009cde, #535eb2 )"
};
const pages = [home, colors, buttons];

ReactDOM.render(
  <Catalog title="Prism" theme={theme} pages={pages} />,
  document.getElementById("catalog")
);
