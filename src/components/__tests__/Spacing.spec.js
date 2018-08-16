import React from "react";
import renderer from "react-test-renderer";
import Spacing from "../Spacing";

describe("Spacing", () => {
  it("renders top and bottom spacing for xSmall device (320-479)", () =>
    expect(
      renderComponent({
        top: { xSmall: "normal" },
        bottom: { xSmall: "normal" }
      })
    ).toMatchSnapshot());

  it("renders top and bottom spacing for small device (480-767)", () =>
    expect(
      renderComponent({ top: { small: "normal" }, bottom: { small: "normal" } })
    ).toMatchSnapshot());

  it("renders top and bottom spacing for medium device (767-1023)", () =>
    expect(
      renderComponent({
        top: { medium: "normal" },
        bottom: { medium: "normal" }
      })
    ).toMatchSnapshot());

  it("renders top and bottom spacing for large device (>1024)", () =>
    expect(
      renderComponent({
        top: { large: "normal" },
        bottom: { large: "normal" }
      })
    ).toMatchSnapshot());

  function renderComponent(props = {}) {
    return renderer.create(<Spacing {...props} />).toJSON();
  }
});
