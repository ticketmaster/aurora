import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";

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

  it("renders correctly when value is 0", () => {
    const { container } = render(
      <Column small={1} medium={0}>
        <span>Content!</span>
      </Column>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly without any props", () => {
    const { container } = render(
      <Column>
        <span>Content!</span>
      </Column>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
