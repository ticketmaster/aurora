import React from "react";
import renderer from "react-test-renderer";

import { OverflowIcon } from "../";

describe("OverflowIcon", () => {
  const children = <title>Overflow Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <OverflowIcon size={22} color="#000">
        {children}
      </OverflowIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
