import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Handle from "../Handle";
import Track from "../Track";

describe("Handle", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(<Handle offset={10} min={0} max={100} value={30} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Track", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Track offset={10} length={30} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
