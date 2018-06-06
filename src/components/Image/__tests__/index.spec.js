import React from "react";
import renderer from "react-test-renderer";

import CircleImage from "../ThumbnailCircle";

describe("<ThumbnailCircle />", () => {
  it("renders ThumbnailCircle image correctly", () => {
    const component = renderer.create(
      <CircleImage
        size={40}
        src="https://placekitten.com/g/512/288"
        alt="thumbnailCircle"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
