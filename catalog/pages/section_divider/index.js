import { pageLoader } from "catalog";

import {
  MainSectionDivider,
  GeneralContentSpacer,
  MainSectionHeaderSpacer,
  SubSectionDivider
} from "../../../src/components/SectionDividier";

export default {
  path: "/section_divider",
  title: "SectionDivider",
  imports: {
    MainSectionDivider,
    GeneralContentSpacer,
    MainSectionHeaderSpacer,
    SubSectionDivider
  },
  content: pageLoader(() => import("./index.md"))
};
