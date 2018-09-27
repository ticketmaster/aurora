/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { FilterIcon } from "../";

describe("FilterIcon", () => {
  const children = <title>Filter Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<FilterIcon>{children}</FilterIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
