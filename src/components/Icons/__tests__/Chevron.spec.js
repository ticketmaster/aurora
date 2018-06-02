import React from "react";
import renderer from "react-test-renderer";

import { ChevronIcon } from "../";

const children = <title>Chevron Icon</title>;

describe("ChevronDownIcon", () => {
  it("renders default chevronDown icon correctly", () => {
    const component = renderer.create(
      <ChevronIcon size={13} color="#000">
        {children}
      </ChevronIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("ChevronUpIcon", () => {
    it("renders chevronUp icon correctly", () => {
      const component = renderer.create(
        <ChevronIcon size={13} color="#000" direction="up">
          {children}
        </ChevronIcon>
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("ChevronLeftIcon", () => {
    it("renders chevronLeft icon correctly", () => {
      const component = renderer.create(
        <ChevronIcon size={13} color="#000" direction="left">
          {children}
        </ChevronIcon>
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("ChevronRightIcon", () => {
    it("renders chevronRight icon correctly", () => {
      const component = renderer.create(
        <ChevronIcon size={13} color="#000" direction="right">
          {children}
        </ChevronIcon>
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
