import React from "react";
import renderer from "react-test-renderer";

import StaticImage from "../Static";

describe("StaticImage", () => {
  const PROPS = {
    src: "http://placekitten.com/g/826/465",
    alt: "Test Kitten",
    height: 9,
    width: 16,
    loader: null
  };

  it("should render a lazy loading UI when a valid loader prop is passed", () => {
    const component = renderer.create(<StaticImage loader="Loading..." />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const component = renderer.create(<StaticImage {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
