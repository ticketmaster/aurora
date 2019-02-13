import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Button } from "../../../src/components/Button";

import Accordion from "../../../src/components/Accordion";
import Chevron from "../../../src/blocks/EventAccordion/Chevron";
import Event from "../../../src/blocks/EventAccordion/Event";
import EventInfo from "../../../src/blocks/EventAccordion/EventInfo";
import Text from "../../../src/components/Text";

import { EXTRAS_DATA, EVENTS, EVENT_DATA, EVENTS_MANY } from "./mock";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {
    Accordion,
    Button,
    Chevron,
    Event,
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
