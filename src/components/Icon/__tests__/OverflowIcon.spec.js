import React from "react";
import renderer from "react-test-renderer";

import { colors } from "../../../theme";
import OverflowIcon from "../OverflowIcon";

describe("<OverflowIcon />", () => {
  it("renders OverflowIcon correctly", () => {
    const component = renderer.create(
      <OverflowIcon
        name="dots"
        size={15}
        color={colors.cascade.light}
        desktopDisplay={false}
        mobileDisplay
        svgStyle={{ transform: "rotate(-90deg) " }}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
