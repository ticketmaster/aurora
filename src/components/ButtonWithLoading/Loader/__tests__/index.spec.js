import React from "react";
import renderer from "react-test-renderer";

import Loader from "..";

describe("Loader", () => {
  it("should match snapshot", () => {
    const props = {
      children: "Children"
    };

    const component = renderer.create(<Loader {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
