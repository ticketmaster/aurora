import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import { Button } from "../../../src/components/Button";

import Accordion from "../../../src/components/Accordion";
import AccordionItem from "../../../src/components/Accordion/AccordionItem";
import Chevron from "../../../src/blocks/EventAccordion/Chevron";
import Extras from "../../../src/blocks/EventAccordion/Extras";
import Section from "../../../src/blocks/EventAccordion/Section";
import Text from "../../../src/components/Text";

import { EXTRAS_DATA, EVENTS, EVENT } from "./mock";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {
    Accordion,
    AccordionItem,
    Button,
    Chevron,
    EVENT,
    EVENTS,
    EXTRAS_DATA,
    Extras,
    Section,
    Text,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
