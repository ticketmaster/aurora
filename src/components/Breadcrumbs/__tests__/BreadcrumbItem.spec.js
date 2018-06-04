import React from "react";
import renderer from "react-test-renderer";

import Breadcrumb from "../";

describe("<Breadcrumb.Item />", () => {
  const PROPS = {
    position: "1",
    children: "Home"
  };

  it("renders correctly when an href prop is passed", () => {
    const component = renderer.create(<Breadcrumb.Item {...PROPS} href="/" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when no href prop is passed", () => {
    const component = renderer.create(<Breadcrumb.Item {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
