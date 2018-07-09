import React from "react";
import renderer from "react-test-renderer";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";

import CheckBoxGroup from "../CheckBoxGroup";
import CheckBox from "../CheckBox";

describe("CheckBoxGroup", () => {
  afterEach(cleanup);

  it("renders default input", () => {
    expect(renderGroupComponent()).toMatchSnapshot();
  });

  it("renders small input", () => {
    expect(renderGroupComponent({ size: "small" })).toMatchSnapshot();
  });

  it("renders large input", () => {
    expect(renderGroupComponent({ size: "large" })).toMatchSnapshot();
  });

  it("onChange recives current value", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <CheckBoxGroup onChange={onChange}>
        <CheckBox
          name="something"
          data-testid="test-checkbox"
          value="else"
          size="small"
        />
      </CheckBoxGroup>
    );

    fireEvent.click(getByTestId("test-checkbox"));

    expect(onChange).toHaveBeenCalledWith(["else"]);
  });

  it("selecting a single item twice", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <CheckBoxGroup onChange={onChange}>
        <CheckBox
          name="something"
          data-testid="test-checkbox"
          value="else"
          size="small"
        />
      </CheckBoxGroup>
    );

    fireEvent.click(getByTestId("test-checkbox"));
    fireEvent.click(getByTestId("test-checkbox"));

    expect(onChange).toHaveBeenCalledWith([]);
  });

  it("selecting multiple items", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <CheckBoxGroup onChange={onChange}>
        <CheckBox
          name="something"
          data-testid="test-checkbox"
          value="1"
          size="small"
        />
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
        />
      </CheckBoxGroup>
    );

    fireEvent.click(getByTestId("test-checkbox"));
    fireEvent.click(getByTestId("test-checkbox2"));

    expect(onChange).toHaveBeenCalledWith(["1", "2"]);
  });

  function renderGroupComponent(props = {}) {
    return renderer.create(<CheckBoxGroup {...props} />);
  }

  it("passing multiple values", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <CheckBoxGroup value={["1", "2"]} onChange={onChange}>
        <CheckBox
          name="something"
          data-testid="test-checkbox"
          value="1"
          size="small"
        />
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
        />

        <CheckBox
          name="something"
          data-testid="test-checkbox3"
          value="2"
          size="large"
        />
      </CheckBoxGroup>
    );

    expect(getByTestId("test-checkbox").hasAttribute("checked"));
    expect(getByTestId("test-checkbox2").hasAttribute("checked"));
    expect(!getByTestId("test-checkbox3").hasAttribute("checked"));
  });

  it("passing multiple items then selecting more", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <CheckBoxGroup value={["1", "2"]} onChange={onChange}>
        <CheckBox
          name="something"
          data-testid="test-checkbox"
          value="1"
          size="small"
        />
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
        />
        <CheckBox
          name="somethingelse"
          data-testid="test-checkbox3"
          value="3"
          size="large"
        />
      </CheckBoxGroup>
    );

    fireEvent.click(getByTestId("test-checkbox3"));

    expect(getByTestId("test-checkbox").hasAttribute("checked"));
    expect(getByTestId("test-checkbox2").hasAttribute("checked"));
    expect(getByTestId("test-checkbox3").hasAttribute("checked"));
  });
});
