import React from "react";
import renderer from "react-test-renderer";

import ButtonWithLoading from "..";

describe("ButtonWithLoading", () => {
  it("should match snapshot with default values", () => {
    const component = renderer.create(<ButtonWithLoading />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    const props = {
      children: "Children",
      isLoading: true
    };

    const component = renderer.create(<ButtonWithLoading {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
