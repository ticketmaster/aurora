import React from "react";
import renderer from "react-test-renderer";

import { MembershipIcon } from "../";

describe("MembershipIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <MembershipIcon size={22} color="#000" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
