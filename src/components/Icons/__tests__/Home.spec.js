/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { HomeIcon } from "../";

describe("HomeIcon", () => {
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
      <HomeIcon {...props}>
        <title>Home Icon</title>
      </HomeIcon>
    );
  }
});
