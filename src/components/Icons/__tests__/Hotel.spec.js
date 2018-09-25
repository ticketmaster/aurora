import React from "react";
import renderer from "react-test-renderer";

import { HotelIcon } from "../";

describe("HotelIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<HotelIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
