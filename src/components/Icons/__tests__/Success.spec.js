/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { SuccessIcon } from "../";

describe("SuccessIcon", () => {
  it("renders correctly", () => {
    const component = renderComponent();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders regular correctly", () => {
    const component = renderComponent({ size: "regular" });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderComponent({ size: "large" });

    expect(component.toJSON()).toMatchSnapshot();
  });

  function renderComponent(props) {
    return renderer.create(
      <SuccessIcon {...props}>
        <title>Success Icon</title>
      </SuccessIcon>
    );
  }
});
