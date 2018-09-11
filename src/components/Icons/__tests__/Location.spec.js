/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { LocationIcon } from "../";

describe("LocationIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <LocationIcon>
        <title>Location Icon</title>
      </LocationIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
