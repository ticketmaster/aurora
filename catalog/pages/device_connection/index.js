import { pageLoader } from "catalog";

import ImageCard from "../../../src/components/ImageCard";
import Row from "../../../src/components/Grid/Row";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import Spacing from "../../../src/components/Spacing";
import {
  DeviceConnectionProvider,
  DeviceConnectionConsumer,
  DisplayOn
} from "../../../src/components/DeviceConnection";

export default {
  path: "/device_connection",
  title: "Device Connection",
  imports: {
    DeviceConnectionProvider,
    DeviceConnectionConsumer,
    DisplayOn,
    ImageCard,
    Row,
    Container,
    Column,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
