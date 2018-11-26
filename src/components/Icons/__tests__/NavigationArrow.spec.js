import React from "react";
import renderer from "react-test-renderer";

import { NavigationArrowIcon } from "../../../";

describe("NavigationArrowIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <NavigationArrowIcon size="large" color="#000" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
