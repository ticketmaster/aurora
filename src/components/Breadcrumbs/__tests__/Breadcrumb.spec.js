import React from "react";
import renderer from "react-test-renderer";

import { Breadcrumb } from "../";

describe("<Breadcrumb />", () => {
  const PROPS = {
    delimiter: " / ",
    children: ["Breadcrumb", "List"]
  };

  it("renders correctly", () => {
    const component = renderer.create(<Breadcrumb {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
