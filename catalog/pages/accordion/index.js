import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import Accordion from "../../../src/components/Accordion";
import AccordionItem from "../../../src/components/Accordion/AccordionItem";
import Text from "../../../src/components/Text";

import { Button } from "../../../src/components/Button";
import Chevron from "../../../src/blocks/EventAccordion/Chevron";
import Section from "../../../src/blocks/EventAccordion/Section";
import SectionB from "../../../src/blocks/EventAccordion/SectionB";

export default {
  path: "/accordion",
  title: "Accordion",
  imports: {
    Accordion,
    AccordionItem,
    Button,
    Chevron,
    Section,
    SectionB,
    Text,
    ThemeProvider
  },
  content: pageLoader(() => import("./index.md"))
};
