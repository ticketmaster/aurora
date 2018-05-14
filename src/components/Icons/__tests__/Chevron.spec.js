import React from "react";
import renderer from "react-test-renderer";

import { ChevronIcon } from "../";

describe("ChevronDownIcon", () => {
  it("renders default chevronDown icon correctly", () => {
    const component = renderer.create(<ChevronIcon size={13} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("ChevronUpIcon", () => {
    it("renders chevronUp icon correctly", () => {
      const component = renderer.create(
        <ChevronIcon size={13} color="#000" direction="up" />
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("ChevronLeftIcon", () => {
    it("renders chevronLeft icon correctly", () => {
      const component = renderer.create(
        <ChevronIcon size={13} color="#000" direction="left" />
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("ChevronRightIcon", () => {
    it("renders chevronRight icon correctly", () => {
      const component = renderer.create(
        <ChevronIcon size={13} color="#000" direction="right" />
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
