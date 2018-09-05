import React from "react";
import renderer from "react-test-renderer";

import CAIcon from "../CA";

describe("CAIcon", () => {
  const children = <title>CA Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <CAIcon width={22} height={13} color="#000">
        {children}
      </CAIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
