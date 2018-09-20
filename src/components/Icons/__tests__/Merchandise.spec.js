import React from "react";
import renderer from "react-test-renderer";

import { MerchandiseIcon } from "../";

describe("MerchandiseIcon", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <MerchandiseIcon size={22} color="#000" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
