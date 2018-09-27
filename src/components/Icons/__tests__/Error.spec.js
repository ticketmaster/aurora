/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { ErrorIcon } from "../";

describe("ErrorIcon", () => {
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

  it("filled renders correctly", () => {
    const component = renderComponent({ type: "filled" });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("filled renders regular correctly", () => {
    const component = renderComponent({ size: "regular", type: "filled" });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("filled renders large correctly", () => {
    const component = renderComponent({ size: "large", type: "filled" });

    expect(component.toJSON()).toMatchSnapshot();
  });

  function renderComponent(props) {
    return renderer.create(
      <ErrorIcon {...props}>
        <title>Error Icon</title>
      </ErrorIcon>
    );
  }
});
