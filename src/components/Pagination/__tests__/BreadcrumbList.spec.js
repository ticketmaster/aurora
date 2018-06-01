import React from "react";
import renderer from "react-test-renderer";

import { BreadcrumbList } from "../";

describe("<BreadcrumbList />", () => {
  const PROPS = {
    delimiter: " / ",
    children: ["Breadcrumb", "List"]
  };

  it("renders correctly", () => {
    const component = renderer.create(<BreadcrumbList {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
