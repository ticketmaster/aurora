import React from "react";
import renderer from "react-test-renderer";

import { colors } from "../../../theme";
import SeeMoreIcon from "../SeeMoreIcon";

describe("<SeeMoreIcon />", () => {
  it("renders SeeMoreIcon correctly", () => {
    const component = renderer.create(
      <SeeMoreIcon
        name="chevron-down"
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
