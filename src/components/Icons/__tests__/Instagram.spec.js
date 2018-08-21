import React from "react";
import renderer from "react-test-renderer";

import InstagramIcon from "../Instagram";

describe("InstagramIcon", () => {
  const children = <title>Instagram Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <InstagramIcon size={22} color="#000">
        {children}
      </InstagramIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
