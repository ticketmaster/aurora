import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Button } from "../../../src/components/Button";
import DisplayFor from "../../../src/components/DeviceSize"

import Accordion from "../../../src/components/Accordion";
import Chevron from "../../../src/blocks/EventAccordion/Chevron";
import BottomSheet from "../../../src/blocks/EventAccordion/BottomSheet"
import Event from "../../../src/blocks/EventAccordion/Event";
import EventInfo from "../../../src/blocks/EventAccordion/EventInfo";
import Text from "../../../src/components/Text";
import EventList from "../../../src/blocks/EventAccordion/EventList";

import { EXTRAS_DATA, EVENTS, EVENT_DATA, EVENTS_MANY } from "./mock";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {
    Accordion,
    Button,
    BottomSheet,
    Chevron,
    DisplayFor,
    Event,
    EventList,
    EventInfo,
    EVENT_DATA,
    EVENTS,
    EXTRAS_DATA,
    EVENTS_MANY,
    Text,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
