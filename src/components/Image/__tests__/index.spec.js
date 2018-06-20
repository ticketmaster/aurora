import React from "react";
import renderer from "react-test-renderer";

import CircleImage from "../Circle";

describe("<CircleImage />", () => {
  it("renders circle image correctly", () => {
    const component = renderer.create(
      <CircleImage
        size={40}
        src="https://placekitten.com/g/512/288"
        alt="circleImage"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
