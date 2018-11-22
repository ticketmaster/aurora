import React from "react";
import renderer from "react-test-renderer";

import BottomSheetLabel from "../BottomSheetLabel";

describe("<BottomSheetLabel />", () => {
  it("renders BottomSheetLabel correctly", () => {
    const component = renderer.create(
      <BottomSheetLabel>Custom label</BottomSheetLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders BottomSheetLabel with prop variant to equal `positive`", () => {
    const component = renderer.create(
      <BottomSheetLabel variant="positive">Positive label</BottomSheetLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders BottomSheetLabel with prop variant to equal `alert`", () => {
    const component = renderer.create(
      <BottomSheetLabel variant="alert">Alert label</BottomSheetLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders BottomSheetLabel without children", () => {
    const component = renderer.create(<BottomSheetLabel />);
    const instance = component.getInstance();
    expect(instance).toBe(null);
  });
});
