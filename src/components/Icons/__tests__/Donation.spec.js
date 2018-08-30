import React from "react";
import renderer from "react-test-renderer";

import { DonationIcon } from "../";

describe("DonationIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<DonationIcon size={22} color="#000" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
