/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { CloseIcon } from "../";

describe("CloseIcon", () => {
  const children = <title>Close Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<CloseIcon>{children}</CloseIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderer.create(
      <CloseIcon size="large">{children}</CloseIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
