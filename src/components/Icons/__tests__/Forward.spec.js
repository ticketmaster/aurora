/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { ForwardIcon } from "../";

describe("ForwardIcon", () => {
  it("renders correctly", () => {
    const component = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderComponent({ size: "large" });

    expect(component.toJSON()).toMatchSnapshot();
  });

  function renderComponent(props) {
    return renderer.create(
      <ForwardIcon {...props}>
        <title>Forward Icon</title>
      </ForwardIcon>
    );
  }
});
