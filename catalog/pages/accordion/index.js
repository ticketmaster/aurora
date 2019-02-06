import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import Accordion from "../../../src/components/Accordion";
import AccordionItem from "../../../src/components/Accordion/AccordionItem";

import Section from "../../../src/blocks/EventAccordion/Section";
import Chevron from "../../../src/blocks/EventAccordion/Chevron";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {
    Accordion,
    AccordionItem,
    Section,
    Chevron,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
