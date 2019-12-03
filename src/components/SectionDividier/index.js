import React from "react";

import Divider from "./Divider";

import {
  GENERAL_CONTENT_SPACER,
  MAIN_SECTION_DIVIDER,
  SUB_SECTION_DIVIDER,
  MAIN_SECTION_HEADER_SPACER
} from "./constant";

const MainSectionDivider = props => (
  <Divider {...props} type={MAIN_SECTION_DIVIDER} />
);
const SubSectionDivider = props => (
  <Divider {...props} type={SUB_SECTION_DIVIDER} />
);
const GeneralContentSpacer = props => (
  <Divider {...props} type={GENERAL_CONTENT_SPACER} />
);
const MainSectionHeaderSpacer = props => (
  <Divider {...props} type={MAIN_SECTION_HEADER_SPACER} />
);

export {
  MainSectionDivider,
  SubSectionDivider,
  GeneralContentSpacer,
  MainSectionHeaderSpacer
};
