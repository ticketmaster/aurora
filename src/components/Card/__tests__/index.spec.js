import React from "react";
import renderer from "react-test-renderer";

import Card from "../index";

describe("Card", () => {
  it("renders standard card", () => {
    const component = renderer.create(<Card />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders transparent card", () => {
    const component = renderer.create(<Card variant="transparent" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
