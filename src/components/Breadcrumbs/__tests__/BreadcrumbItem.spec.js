import React from "react";
import renderer from "react-test-renderer";

import Breadcrumb from "../";

describe("<Breadcrumb.Item />", () => {
  const PROPS = {
    position: "1",
    href: "/",
    children: "Home"
  };

  it("renders correctly", () => {
    const component = renderer.create(<Breadcrumb.Item {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
