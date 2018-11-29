import React from "react";
import renderer from "react-test-renderer";

import QtySelectorMinusIcon from "../QtySelectorMinus";
import QtySelectorPlusIcon from "../QtySelectorPlus";

describe("QtySelectorMinusIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<QtySelectorMinusIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("QtySelectorPlusIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<QtySelectorPlusIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
