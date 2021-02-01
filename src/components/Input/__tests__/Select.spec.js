import React from "react";
import { renderIntoDocument, cleanup } from "react-testing-library";
import Select from "../Select/Select";

describe("Select", () => {
  function renderTestDocument(props = {}) {
    return renderIntoDocument(
      <Select {...props}>
        <option value="" aria-label="">
          Select an option{" "}
        </option>
        <option value="0">Option One</option>
        <option value="1">Option Two</option>
        <option value="2">Option Three</option>
        <option value="3">Option Four</option>
        <option value="4">Option Five</option>
      </Select>
    );
  }
  afterEach(cleanup);
  afterAll(cleanup);

  it("renders default select", () => {
    expect(renderTestDocument()).toMatchSnapshot();
  });
  it("renders borderless select", () => {
    expect(renderTestDocument({ variant: 1 })).toMatchSnapshot();
  });
  it("renders select without chevron", () => {
    expect(renderTestDocument({ chevronVisible: false })).toMatchSnapshot();
  });
  it("renders full width select", () => {
    expect(renderTestDocument({ fullWidth: true })).toMatchSnapshot();
  });
  it("renders small select", () => {
    expect(renderTestDocument({ size: "small" })).toMatchSnapshot();
  });

  it("renders hybrid select", () => {
    expect(renderTestDocument({ hybrid: true })).toMatchSnapshot();
  });

  it("renders hybrid select when showSelect is false", () => {
    expect(
      renderTestDocument({ hybrid: true, showSelect: false })
    ).toMatchSnapshot();
  });
});
