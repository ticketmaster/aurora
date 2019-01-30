/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { TicketIcon } from "../";

describe("TicketIcon", () => {
  it("large renders correctly", () => {
    const component = renderer.create(
      <TicketIcon>
        <title>Tickets Icon</title>
      </TicketIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it("small renders correctly", () => {
    const component = renderer.create(
      <TicketIcon size="small">
        <title>Tickets Icon</title>
      </TicketIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
