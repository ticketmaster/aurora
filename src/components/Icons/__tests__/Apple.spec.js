import React from "react";
import renderer from "react-test-renderer";

import AppleIcon from "../Apple";

describe("AppleIcon", () => {
  const children = <title>Apple Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <AppleIcon size={22}>{children}</AppleIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
