import React from "react";
import renderer from "react-test-renderer";

import { StarIcon } from "../";

describe("StarIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<StarIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
