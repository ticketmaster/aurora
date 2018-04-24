import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";

import home from "./pages/home/index";
import colors from "./pages/colors/index";
import buttons from "./pages/buttons/index";

const pages = [home, colors, buttons];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
