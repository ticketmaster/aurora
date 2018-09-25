import React from "react";
import renderer from "react-test-renderer";

import { TransportationIcon } from "../";

describe("TransportationIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <TransportationIcon size={22} color="#000" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
