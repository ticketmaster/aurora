import React from "react";
import renderer from "react-test-renderer";

import Breadcrumb from "../";

describe("<Breadcrumb />", () => {
  const PROPS = {
    children: ["Breadcrumb", "List"]
  };

  it("renders correctly", () => {
    const component = renderer.create(<Breadcrumb {...PROPS} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render when empty list passed in", () => {
    const component = renderer.create(<Breadcrumb>{[]}</Breadcrumb>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
