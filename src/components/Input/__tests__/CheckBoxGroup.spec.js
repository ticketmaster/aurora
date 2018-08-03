import React from "react";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";

import CheckBoxGroup from "../CheckBox/CheckBoxGroup";
import CheckBox from "../CheckBox/CheckBox";

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

  it("onChange receives current value", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <CheckBoxGroup onChange={onChange}>
        <CheckBox
          name="something"
          data-testid="test-checkbox"
          value="else"
          size="small"
          index={0}
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
          index={0}
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
          index={0}
        />
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
          index={1}
        />
      </CheckBoxGroup>
    );

    fireEvent.click(getByTestId("test-checkbox"));
    fireEvent.click(getByTestId("test-checkbox2"));

    expect(onChange).toHaveBeenCalledWith(["1", "2"]);
  });

  function renderGroupComponent(props = {}) {
    return renderIntoDocument(
      <CheckBoxGroup {...props}>
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
          index={1}
        />
      </CheckBoxGroup>
    );
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
          index={0}
        />
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
          index={1}
        />

        <CheckBox
          name="something"
          data-testid="test-checkbox3"
          value="2"
          size="large"
          index={2}
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
          index={0}
        />
        <CheckBox
          name="something"
          data-testid="test-checkbox2"
          value="2"
          size="large"
          index={1}
        />
        <CheckBox
          name="somethingelse"
          data-testid="test-checkbox3"
          value="3"
          size="large"
          index={2}
        />
      </CheckBoxGroup>
    );

    fireEvent.click(getByTestId("test-checkbox3"));

    expect(getByTestId("test-checkbox").hasAttribute("checked"));
    expect(getByTestId("test-checkbox2").hasAttribute("checked"));
    expect(getByTestId("test-checkbox3").hasAttribute("checked"));
  });
});
