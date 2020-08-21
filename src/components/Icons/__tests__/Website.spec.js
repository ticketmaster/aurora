import React from "react";
import renderer from "react-test-renderer";

import WebsiteIcon from "../Website";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("WebsiteIcon", () => {
  const children = <title>Website Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <WebsiteIcon size={22}>{children}</WebsiteIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <WebsiteIcon color={tm.primary.base} size={22}>
        {children}
      </WebsiteIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
