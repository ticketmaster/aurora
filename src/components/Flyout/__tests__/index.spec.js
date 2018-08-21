import React from "react";
import { render, Simulate } from "react-testing-library";

import Flyout from "../index";
import FlyoutItem from "../Item";

const mockFn = jest.fn();

const countries = [
  {
    value: "en-US",
    text: "USA (English)",
    label: "United States"
  },
  {
    value: "en-CA",
    text: "Canada (English)",
    label: "Canada"
  },
  {
    value: "fr-CA",
    text: "Canada (Français)",
    label: "Canada"
  }
];

describe("<Flyout />", () => {
  it("renders Flyout correctly when its open", () => {
    const { container } = render(
      <Flyout isOpen onFlyoutOptionSelected={mockFn} selectedIndex={0}>
        {countries.map((option, index) => (
          <FlyoutItem index={index} key={option.value}>
            {option.text}
          </FlyoutItem>
        ))}
      </Flyout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Flyout correctly when its closed", () => {
    const { container } = render(
      <Flyout isOpen={false} onFlyoutOptionSelected={mockFn} selectedIndex={0}>
        {countries.map((option, index) => (
          <FlyoutItem index={index} key={option.value}>
            {option.text}
          </FlyoutItem>
        ))}
      </Flyout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders Flyout correctly when its open", () => {
    const onFlyoutOptionSelected = mockFn;
    const { container } = render(
      <Flyout
        isOpen
        onFlyoutOptionSelected={onFlyoutOptionSelected}
        selectedIndex={0}
      >
        {countries.map((option, index) => (
          <FlyoutItem index={index} key={option.value}>
            {option.text}
          </FlyoutItem>
        ))}
      </Flyout>
    );

    Simulate.click(container.querySelector(".flyout-item"));
    expect(onFlyoutOptionSelected).toHaveBeenCalled();
  });
});
