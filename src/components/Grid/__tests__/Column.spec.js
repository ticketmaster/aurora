import React from "react";
import renderer from "react-test-renderer";

import Column from "../Column";

describe("Column", () => {
  it("warns with invalid column size", () => {
    console.error = jest.fn(); // eslint-disable-line

    renderer.create(
      <Column small={-1}>
        <span>Content!</span>
      </Column>
    );

    expect(console.error).toHaveBeenCalled(); // eslint-disable-line
  });
});
