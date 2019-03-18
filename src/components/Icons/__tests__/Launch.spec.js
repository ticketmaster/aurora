import React from "react";
import renderer from "react-test-renderer";

import LaunchIcon from "../Launch";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("LaunchIcon", () => {
  const children = <title>Launch Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<LaunchIcon>{children}</LaunchIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a size prop is passed", () => {
    const component = renderer.create(
      <LaunchIcon size={22}>{children}</LaunchIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <LaunchIcon color={tm.white.base}>{children}</LaunchIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
