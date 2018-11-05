import React from "react";
import renderer from "react-test-renderer";

import StatusBadge from "../StatusBadge";

describe("StatusBadge", () => {
  it("should match snapshot when variant is undefined", () => {
    const tree = renderer
      .create(<StatusBadge label="snapshot test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when variant is dark", () => {
    const tree = renderer
      .create(<StatusBadge variant="dark" label="snapshot test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when variant is light", () => {
    const tree = renderer
      .create(<StatusBadge variant="light" label="light test" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
