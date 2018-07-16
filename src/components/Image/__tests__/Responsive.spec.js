import React from "react";
import renderer from "react-test-renderer";

import ResponsiveImage from "../Responsive";

describe("ResponsiveImage", () => {
  const PROPS = {
    src: "http://placekitten.com/g/826/465",
    alt: "Test Kitten",
    height: 16,
    width: 9,
    loader: null
  };

  it("should render a lazy loading UI when a valid loader prop is passed", () => {
    const component = renderer.create(<ResponsiveImage loader="Loading..." />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const component = renderer.create(<ResponsiveImage {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
