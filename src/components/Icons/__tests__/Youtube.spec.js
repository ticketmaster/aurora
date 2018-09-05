import React from "react";
import renderer from "react-test-renderer";

import YoutubeIcon from "../Youtube";

describe("FacebookIcon", () => {
  const children = <title>Youtube Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <YoutubeIcon size={22} color="#000">
        {children}
      </YoutubeIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
