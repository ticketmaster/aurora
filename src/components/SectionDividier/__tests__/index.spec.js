import React from "react";
import { render } from "react-testing-library";

import Divider from "../Divider";

import DIVIDER_CONFIG, {
  MAIN_SECTION_DIVIDER,
  MAIN_SECTION_HEADER_SPACER,
  SUB_SECTION_DIVIDER
} from "../constant";

describe("<Divider />", () => {
  const config = DIVIDER_CONFIG;
  it("should render spacing as `section` tag for MAIN_SECTION_DIVIDER", () => {
    const { container } = render(
      <Divider type={MAIN_SECTION_DIVIDER}>Content</Divider>
    );
    const tagName = container.querySelector(config[MAIN_SECTION_DIVIDER].tag);
    expect(tagName).toBeTruthy();
  });
  it("should render spacing as `header` tag for MAIN_SECTION_HEADER_SPACER", () => {
    const { container } = render(
      <Divider type={MAIN_SECTION_HEADER_SPACER}>Content</Divider>
    );
    const tagName = container.querySelector(
      config[MAIN_SECTION_HEADER_SPACER].tag
    );
    expect(tagName).toBeTruthy();
  });
  it("should render spacing as `section` tag for SUB_SECTION_DIVIDER", () => {
    const { container } = render(
      <Divider type={SUB_SECTION_DIVIDER}>Content</Divider>
    );
    const tagName = container.querySelector(config[SUB_SECTION_DIVIDER].tag);
    expect(tagName).toBeTruthy();
  });
});
