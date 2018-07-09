import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "react-testing-library";

import Input from "../Input";

describe("Input", () => {
  afterEach(cleanup);

  it("renders default input", () => {
    expect(renderGroupComponent({ name: "test" })).toMatchSnapshot();
  });

  it("renders top label", () => {
    expect(
      renderGroupComponent({ labelPosition: "top", name: "test" })
    ).toMatchSnapshot();
  });

  it("renders bottom label", () => {
    expect(
      renderGroupComponent({ labelPosition: "left", name: "test" })
    ).toMatchSnapshot();
  });

  it("renders bottom label", () => {
    expect(
      renderGroupComponent({ disabled: true, name: "test" })
    ).toMatchSnapshot();
  });

  it("renders error top label", () => {
    expect(
      renderGroupComponent({
        labelPosition: "top",
        errorMessage: "Something Went Wrong",
        name: "test"
      })
    ).toMatchSnapshot();
  });
  it("renders error top label", () => {
    expect(
      renderGroupComponent({
        labelPosition: "bottom",
        errorMessage: "Something  Went Wrong",
        name: "test"
      })
    ).toMatchSnapshot();
  });

  function renderGroupComponent(props = {}) {
    return renderer.create(<Input {...props} />);
  }
});
