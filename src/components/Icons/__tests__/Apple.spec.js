import React from "react";
import renderer from "react-test-renderer";

import AppleIcon from "../Apple";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("AppleIcon", () => {
  const children = <title>Apple Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <AppleIcon size={22}>{children}</AppleIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <AppleIcon color={tm.primary.base} size={22}>
        {children}
      </AppleIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
