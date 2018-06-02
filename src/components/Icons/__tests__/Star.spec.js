import React from "react";
import renderer from "react-test-renderer";

import { StarIcon } from "../";

describe("StarIcon", () => {
  const children = <title>Star Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <StarIcon size={22} color="#000">
        {children}
      </StarIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
