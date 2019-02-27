/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { FraudulentActivityIcon } from "../";

describe("FraudulentActivityIcon", () => {
  it("large renders correctly", () => {
    const component = renderer.create(
      <FraudulentActivityIcon>
        <title>Print Icon</title>
      </FraudulentActivityIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
