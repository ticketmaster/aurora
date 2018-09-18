import React from "react";
import renderer from "react-test-renderer";

import LinkedinIcon from "../Linkedin";

describe("LinkedinIcon", () => {
  const children = <title>Linkedin Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <LinkedinIcon size={22}>{children}</LinkedinIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
