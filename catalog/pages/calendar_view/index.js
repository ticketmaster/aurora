import { pageLoader } from "catalog";

import { Container, Row, Column } from "../../../src/components/Grid";

import Spacing from "../../../src/components/Spacing";

import { ResponsiveImage } from "../../../src/components/Image";

import {
  DayTile,
  DayTileDate,
  DayTileItem,
  DayTileButton,
  DayTileMoreButton,
  DayTileOverflowButton
} from "../../../src/components/CalendarView";

export default {
  path: "/calendar-view",
  title: "Calendar View",
  imports: {
    Container,
    Row,
    Column,
    Spacing,
    ResponsiveImage,
    DayTile,
    DayTileDate,
    DayTileItem,
    DayTileButton,
    DayTileMoreButton,
    DayTileOverflowButton
  },
  content: pageLoader(() => import("./index.md"))
};
