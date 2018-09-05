import React from "react";
import renderer from "react-test-renderer";

import { SpecialIcon } from "../";

describe("SpecialIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<SpecialIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
