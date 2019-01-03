import React from "react";
import renderer from "react-test-renderer";

import InstagramIcon from "../Instagram";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("InstagramIcon", () => {
  const children = <title>Instagram Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <InstagramIcon size={22}>{children}</InstagramIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <InstagramIcon color={tm.primary.base} size={22}>
        {children}
      </InstagramIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
