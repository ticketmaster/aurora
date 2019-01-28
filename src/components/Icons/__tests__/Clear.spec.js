/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { ClearIcon } from "../";

describe("ClearIcon", () => {
  const children = <title>Clear Icon</title>;

  it("large renders correctly", () => {
    const component = renderer.create(<ClearIcon>{children}</ClearIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("small renders correctly", () => {
    const component = renderer.create(
      <ClearIcon size="small">{children}</ClearIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
