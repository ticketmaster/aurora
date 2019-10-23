/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { InfoDotIcon } from "../";

describe("InfoDotIcon", () => {
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

  it("renders if size is null", () => {
    const component = renderComponent({ size: null });

    expect(component.toJSON()).toMatchSnapshot();
  });

  function renderComponent(props) {
    return renderer.create(
      <InfoDotIcon {...props}>
        <title>Info Icon</title>
      </InfoDotIcon>
    );
  }
});
