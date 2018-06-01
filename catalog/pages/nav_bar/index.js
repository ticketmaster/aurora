import { pageLoader } from "catalog";

import NavBar from "../../../src/components/NavBar";
import { Button } from "../../../src/components/Button";
import Header from "../../../src/components/Header";
import Spacing from "../../../src/components/Spacing";
import Container from "../../../src/components/Grid/Container";
import Column from "../../../src/components/Grid/Column";
import Row from "../../../src/components/Grid/Row";
import DeviceSizeProvider from "../../../src/components/DeviceSize/Provider";
import DisplayFor from "../../../src/components/DeviceSize";

export default {
  path: "/nav_bar",
  title: "Nav Bar",
  imports: {
    NavBar,
    Header,
    Button,
    Spacing,
    Container,
    Column,
    Row,
    DeviceSizeProvider,
    DisplayFor
  },
  content: pageLoader(() => import("./index.md"))
};
