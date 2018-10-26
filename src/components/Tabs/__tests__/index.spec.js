import React from "react";
import { render } from "react-testing-library";

import { Tabs } from "../index";

const items = ["Test tab item 1", "Test tab item 2", "Test tab item 3"];
const onTabsClick = jest.fn();
const mainProps = {
  items,
  index: 0,
  onClick: onTabsClick
};
const textProps = {
  variant: "accent",
  accent: "alert",
  size: "giga",
  weight: "semiBold"
};

describe("<Tabs />", () => {
  it("should render tabs component correctly", () => {
    const { container } = render(<Tabs {...mainProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render tabs component correctly with props for text of tabs", () => {
    const { container } = render(<Tabs {...mainProps} {...textProps} />);
    expect(container).toMatchSnapshot();
  });
});
