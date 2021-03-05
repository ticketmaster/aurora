import React from "react";
import { renderIntoDocument, cleanup } from "react-testing-library";
import Select from "../Select/Select";
import Option from "../Select/Option";

describe("Select", () => {
  function renderTestDocument(props = {}) {
    return renderIntoDocument(
      <Select {...props}>
        <Option value="" aria-label="">
          Select an option
        </Option>
        <Option value="0">Option One</Option>
        <Option value="1" optionText="Option Two" />
        <Option value="2" label="Option Three" />
        <Option value="3">Option Four</Option>
        <Option value="4">Option Five</Option>
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
