import React from "react";
import renderer from "react-test-renderer";

import GooglePlayIcon from "../GooglePlay";

describe("GooglePlayIcon", () => {
  const children = <title>GooglePlay Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <GooglePlayIcon size={22}>{children}</GooglePlayIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
