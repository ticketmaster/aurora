/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { DeleteIcon } from "../";

describe("DeleteIcon", () => {
  const children = <title>Delete Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<DeleteIcon>{children}</DeleteIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderer.create(
      <DeleteIcon size="large">{children}</DeleteIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
