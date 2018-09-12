/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { BackIcon } from "../";

describe("BackIcon", () => {
  const children = <title>Back Icon</title>;

  it("renders default correctly", () => {
    const component = renderer.create(<BackIcon>{children}</BackIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderer.create(
      <BackIcon size="large">{children}</BackIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
