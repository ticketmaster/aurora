import React from "react";
import renderer from "react-test-renderer";

import Badge from "../Badge";

describe("Badge", () => {
  it("should match snapshot when type is undefined", () => {
    const tree = renderer.create(<Badge label="snapshot test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when type is dark", () => {
    const tree = renderer
      .create(<Badge type="dark" label="snapshot test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when type is light", () => {
    const tree = renderer
      .create(<Badge type="light" label="light test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
