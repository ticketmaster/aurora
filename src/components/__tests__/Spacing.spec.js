import React from "react";
import renderer from "react-test-renderer";
import Spacing from "../Spacing";

describe("Spacing", () => {
  it("renders top and bottom spacing for small device", () =>
    expect(
      renderComponent({ top: { small: "normal" }, bottom: { small: "normal" } })
    ).toMatchSnapshot());

  it("renders top and bottom spacing for medium device", () =>
    expect(
      renderComponent({
        top: { medium: "normal" },
        bottom: { medium: "normal" }
      })
    ).toMatchSnapshot());

  it("renders top and bottom spacing for medium device", () =>
    expect(
      renderComponent({
        top: { large: "normal" },
        bottom: { large: "normal" }
      })
    ).toMatchSnapshot());

  it("renders top and bottom spacing for medium device", () =>
    expect(
      renderComponent({
        top: { xLarge: "normal" },
        bottom: { xLarge: "normal" }
      })
    ).toMatchSnapshot());

  function renderComponent(props = {}) {
    return renderer.create(<Spacing {...props} />).toJSON();
  }
});
