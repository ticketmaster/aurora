import React from "react";
import renderer from "react-test-renderer";

import { MealIcon } from "../";

describe("MealIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<MealIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
