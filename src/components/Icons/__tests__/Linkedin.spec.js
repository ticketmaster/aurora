import React from "react";
import renderer from "react-test-renderer";

import LinkedinIcon from "../Linkedin";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("LinkedinIcon", () => {
  const children = <title>Linkedin Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <LinkedinIcon size={22}>{children}</LinkedinIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <LinkedinIcon color={tm.primary.base} size={22}>
        {children}
      </LinkedinIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
