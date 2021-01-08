import React from "react";
import renderer from "react-test-renderer";
import { render, Simulate } from "react-testing-library";

import { Tabs } from "../index";

const items = ["Test tab item 1", "Test tab item 2", "Test tab item 3"];
const onTabsClick = jest.fn();
const tabChangedWithArrowKeysMock = jest.fn();
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
    Simulate.click(container.querySelector('button[data-index="1"]'));
    expect(onTabsClick).toHaveBeenLastCalledWith(1);
    unmount();
  });

  it("should call tabChangedWithArrowKeys with index of tab on right when right arrow key pressed", () => {
    const { unmount, container } = render(
      <Tabs
        {...mainProps}
        tabChangedWithArrowKeys={tabChangedWithArrowKeysMock}
      />
    );
    Simulate.keyDown(container.querySelector('button[data-index="0"]'), {
      key: "ArrowRight",
      keyCode: 39
    });
    expect(tabChangedWithArrowKeysMock).toHaveBeenLastCalledWith(1);
    unmount();
  });

  it("should call tabChangedWithArrowKeys with index of tab on left when left arrow key pressed", () => {
    const { unmount, container } = render(
      <Tabs
        {...mainProps}
        index="1"
        tabChangedWithArrowKeys={tabChangedWithArrowKeysMock}
      />
    );
    Simulate.keyDown(container.querySelector('button[data-index="1"]'), {
      key: "ArrowLeft",
      keyCode: 37
    });
    expect(tabChangedWithArrowKeysMock).toHaveBeenLastCalledWith(0);
    unmount();
  });

  it("should call tabChangedWithArrowKeys with index of first tab when right arrow key pressed on last tab", () => {
    const { unmount, container } = render(
      <Tabs
        {...mainProps}
        index="2"
        tabChangedWithArrowKeys={tabChangedWithArrowKeysMock}
      />
    );
    Simulate.keyDown(container.querySelector('button[data-index="2"]'), {
      key: "ArrowRight",
      keyCode: 39
    });
    expect(tabChangedWithArrowKeysMock).toHaveBeenLastCalledWith(0);
    unmount();
  });

  it("should call tabChangedWithArrowKeys with index of last tab when left arrow key pressed on first tab", () => {
    const { unmount, container } = render(
      <Tabs
        {...mainProps}
        tabChangedWithArrowKeys={tabChangedWithArrowKeysMock}
      />
    );
    Simulate.keyDown(container.querySelector('button[data-index="0"]'), {
      key: "ArrowLeft",
      keyCode: 37
    });
    expect(tabChangedWithArrowKeysMock).toHaveBeenLastCalledWith(2);
    unmount();
  });

  it("should call focusTab function when right arrow key pressed", () => {
    const instance = renderer
      .create(
        <Tabs
          {...mainProps}
          tabChangedWithArrowKeys={tabChangedWithArrowKeysMock}
        />
      )
      .getInstance();
    const spyFocusTab = jest.spyOn(instance, "focusTab");
    instance.onKeyDown({ keyCode: 39 });
    expect(spyFocusTab).toHaveBeenLastCalledWith(1);
    spyFocusTab.mockRestore();
  });

  it("should not call focusTab function when other key is pressed", () => {
    const instance = renderer
      .create(
        <Tabs
          {...mainProps}
          tabChangedWithArrowKeys={tabChangedWithArrowKeysMock}
        />
      )
      .getInstance();
    const spyFocusTab = jest.spyOn(instance, "focusTab");
    instance.onKeyDown({ keyCode: 40 });
    expect(spyFocusTab).toHaveBeenCalledTimes(0);
    spyFocusTab.mockRestore();
  });
});
