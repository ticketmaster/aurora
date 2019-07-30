import React from "react";
import renderer from "react-test-renderer";

import DropDownLabel from "../DropDown/DropDownLabel";

describe("<DropDownLabel />", () => {
  it("renders small size label correctly", () => {
    const component = renderer.create(
      <DropDownLabel size="small">label text</DropDownLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large size label correctly", () => {
    const component = renderer.create(
      <DropDownLabel>label text</DropDownLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders small disabled label correctly", () => {
    const component = renderer.create(
      <DropDownLabel size="small" disabled>
        label text
      </DropDownLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
