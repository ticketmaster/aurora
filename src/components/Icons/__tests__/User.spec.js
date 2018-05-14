import React from "react";
import renderer from "react-test-renderer";

import { UserIcon } from "../";

describe("UserIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<UserIcon size={13} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
