import React from "react";
import renderer from "react-test-renderer";

import LoaderRing from "../";

describe("<LoaderRing />", () => {
  it("renders LoaderRing correctly", () => {
    const component = renderer.create(<LoaderRing />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
