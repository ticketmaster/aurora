/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { TicketsIcon } from "../";

describe("TicketsIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <TicketsIcon>
        <title>Tickets Icon</title>
      </TicketsIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
