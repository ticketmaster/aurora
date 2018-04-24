import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

import Button from "../src/components/Button";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./pages/WELCOME.md"))
  },
  {
    path: "/buttons",
    title: "Buttons",
    imports: { Button },
    content: pageLoader(() => import("./pages/BUTTONS.md"))
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
