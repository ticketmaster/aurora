/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { ClearIcon } from "../";

describe("ClearIcon", () => {
  const children = <title>Clear Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<ClearIcon>{children}</ClearIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
