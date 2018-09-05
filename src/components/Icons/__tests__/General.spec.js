import React from "react";
import renderer from "react-test-renderer";

import { GeneralIcon } from "../";

describe("GeneralIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<GeneralIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
