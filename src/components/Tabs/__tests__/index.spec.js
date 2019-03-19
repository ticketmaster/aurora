import React from "react";
import { render, Simulate } from "react-testing-library";

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
    const { container, unmount } = render(<Tabs {...mainProps} />);
    expect(container).toMatchSnapshot();
    unmount();
  });

  it("should render tabs component correctly when withBorderBottom equals false", () => {
    const { container, unmount } = render(
      <Tabs {...mainProps} withBorderBottom={false} />
    );
    expect(container).toMatchSnapshot();
    unmount();
  });

  it("should render tabs component correctly with props for text of tabs", () => {
    const { container, unmount } = render(
      <Tabs {...mainProps} {...textProps} />
    );
    expect(container).toMatchSnapshot();
    unmount();
  });

  it("should call onClick function with index of tab when click on it", () => {
    const { unmount, container } = render(<Tabs {...mainProps} />);
    Simulate.click(container.querySelector('div[data-index="1"]'));
    expect(onTabsClick).toHaveBeenLastCalledWith(1);
    unmount();
  });
});
