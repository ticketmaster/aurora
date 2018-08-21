import React from "react";
import renderer from "react-test-renderer";

import TwitterIcon from "../Twitter";

describe("TwitterIcon", () => {
  const children = <title>Twitter Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <TwitterIcon size={22} color="#000">
        {children}
      </TwitterIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
