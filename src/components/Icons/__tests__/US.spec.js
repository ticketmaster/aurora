import React from "react";
import renderer from "react-test-renderer";

import USIcon from "../US";

describe("USIcon", () => {
  const children = <title>US Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <USIcon width={22} height={13} color="#000">
        {children}
      </USIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
