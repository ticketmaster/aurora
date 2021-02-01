import React from "react";
import { renderIntoDocument, cleanup } from "react-testing-library";
import Select from "../Select/Select";

describe("Select", () => {
  afterEach(cleanup);
  afterAll(cleanup);

  it("renders default select", () => {
    expect(
      renderIntoDocument(
        <Select>
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });
  it("renders borderless select", () => {
    expect(
      renderIntoDocument(
        <Select variant={1}>
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });
  it("renders select without chevron", () => {
    expect(
      renderIntoDocument(
        <Select chevronVisible={false}>
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });
  it("renders full width select", () => {
    expect(
      renderIntoDocument(
        <Select fullWidth>
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });
  it("renders small select", () => {
    expect(
      renderIntoDocument(
        <Select size="small">
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });

  it("renders hybrid select", () => {
    expect(
      renderIntoDocument(
        <Select hybrid>
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });

  it("renders hybrid select when showSelect is false", () => {
    expect(
      renderIntoDocument(
        <Select hybrid showSelect={false}>
          <option value="" aria-label="">
            Select an option{" "}
          </option>
          <option value="0">Option One</option>
          <option value="1">Option Two</option>
          <option value="2">Option Three</option>
          <option value="3">Option Four</option>
          <option value="4">Option Five</option>
        </Select>
      )
    ).toMatchSnapshot();
  });
});
