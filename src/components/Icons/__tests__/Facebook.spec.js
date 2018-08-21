import React from "react";
import renderer from "react-test-renderer";

import FacebookIcon from "../Facebook";

describe("FacebookIcon", () => {
  const children = <title>Facebook Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <FacebookIcon size={22} color="#000">
        {children}
      </FacebookIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
