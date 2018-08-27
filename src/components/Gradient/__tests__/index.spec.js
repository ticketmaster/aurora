import React from "react";
import renderer from "react-test-renderer";

import Gradient from "../";

describe("Gradient", () => {
  it("renders default", () => {
    const tree = renderer.create(<Gradient />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with spotlight elements", () => {
    const tree = renderer.create(<Gradient className="gradient--spotlight" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
