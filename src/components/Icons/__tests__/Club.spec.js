import React from "react";
import renderer from "react-test-renderer";

import { ClubIcon } from "../";

describe("ClubIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ClubIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
