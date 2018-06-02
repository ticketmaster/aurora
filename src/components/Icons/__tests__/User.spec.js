import React from "react";
import renderer from "react-test-renderer";

import { UserIcon } from "../";

describe("UserIcon", () => {
  const children = <title>User Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <UserIcon size={13} color="#000">
        {children}
      </UserIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
