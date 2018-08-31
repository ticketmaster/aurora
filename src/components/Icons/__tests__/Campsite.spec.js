import React from "react";
import renderer from "react-test-renderer";

import { CampsiteIcon } from "../";

describe("CampsiteIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<CampsiteIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
