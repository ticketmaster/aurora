import { pageLoader } from "catalog";
import {
  Tabs,
  TabsProvider,
  TabsConsumer,
  Button,
  Text,
  Column
} from "../../../src";

export default {
  path: "/tabs",
  title: "Tabs",
  imports: {
    Tabs,
    TabsProvider,
    TabsConsumer,
    Text,
    Button,
    Column
  },
  content: pageLoader(() => import("./index.md"))
};
