import { pageLoader } from "catalog";
import {
  Tabs,
  TabsProvider,
  TabsConsumer,
  Button,
  Text,
  Column,
  themes
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
    Column,
    themes
  },
  content: pageLoader(() => import("./index.md"))
};
