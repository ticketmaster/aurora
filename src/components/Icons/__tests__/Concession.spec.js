import React from "react";
import renderer from "react-test-renderer";

import { ConcessionIcon } from "../";

describe("ConcessionIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <ConcessionIcon size={22} color="#000" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
