import React from "react";
import renderer from "react-test-renderer";

import { OverflowIcon } from "../";

describe("OverflowIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<OverflowIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
