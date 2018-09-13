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
});
