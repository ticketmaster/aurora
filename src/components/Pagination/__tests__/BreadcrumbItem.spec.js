import React from "react";
import renderer from "react-test-renderer";

import { BreadcrumbItem } from "../";

describe("<BreadcrumbItem />", () => {
  const PROPS = {
    position: "1",
    href: "/",
    children: "Home"
  };

  it("renders correctly", () => {
    const component = renderer.create(<BreadcrumbItem {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
