import React from "react";
import renderer from "react-test-renderer";

import Loader from "..";

describe("Loader", () => {
  describe("when loading true & children", () => {
    let props;

    it("should match snapshot", () => {
      props = {
        children: "Children",
        isLoading: true
      };

      const component = renderer.create(<Loader {...props} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("when loading false", () => {
    let props;

    it("should match snapshot", () => {
      props = {
        children: "Children"
      };

      const component = renderer.create(<Loader {...props} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
