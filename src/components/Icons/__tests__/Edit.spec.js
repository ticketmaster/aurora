/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { EditIcon } from "../";

describe("EditIcon", () => {
  const children = <title>Edit Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<EditIcon>{children}</EditIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
