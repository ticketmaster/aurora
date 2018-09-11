import React from "react";
import renderer from "react-test-renderer";

import HeartIcon from "../Heart";

describe("HeartIcon", () => {
  const children = <title>HeartIcon Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <HeartIcon size={22} color="#000" opacity={0.5}>
        {children}
      </HeartIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
