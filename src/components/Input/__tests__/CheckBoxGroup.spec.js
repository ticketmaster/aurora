import React from "react";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";
import { ThemeProvider } from "styled-components";
import { CheckBoxGroup, CheckBoxButton } from "..";

describe("CheckBoxGroup", () => {
  afterEach(cleanup);

  it("renders default input", () => {
    expect(renderGroupComponent()).toMatchSnapshot();
  });

  it("renders default CheckBox without CheckBoxGroup", () => {
    expect(renderCheckBox()).toMatchSnapshot();
  });

  it("renders checked CheckBox without CheckBoxGroup", () => {
    expect(renderCheckBox({ isChecked: true })).toMatchSnapshot();
  });

  it("renders top aligned checked checkbox CheckBox without CheckBoxGroup", () => {
    expect(
      renderCheckBox({ isTopAligned: true, isChecked: true })
    ).toMatchSnapshot();
  });

  it("renders small input", () => {
    expect(renderGroupComponent({ size: "small" })).toMatchSnapshot();
  });

  it("renders large input", () => {
    expect(renderGroupComponent({ size: "large" })).toMatchSnapshot();
  });

  it("onChange receives current value", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderGroupComponent({ onChange });

    fireEvent.click(getByTestId("test-checkbox"));

    expect(onChange).toHaveBeenCalledWith(["else"]);
  });

  it("selecting a single item twice", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderGroupComponent({ onChange });

    fireEvent.click(getByTestId("test-checkbox"));
    fireEvent.click(getByTestId("test-checkbox"));

    expect(onChange).toHaveBeenCalledWith([]);
  });

  it("selecting multiple items", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <CheckBoxGroup onChange={onChange}>
          <CheckBoxButton
            name="something"
            data-testid="test-checkbox"
            value="1"
            size="small"
            index={0}
          />
          <CheckBoxButton
            name="something"
            data-testid="test-checkbox2"
            value="2"
            size="large"
            index={1}
          />
        </CheckBoxGroup>
      </ThemeProvider>
    );

    fireEvent.click(getByTestId("test-checkbox"));
    fireEvent.click(getByTestId("test-checkbox2"));

    expect(onChange).toHaveBeenCalledWith(["1", "2"]);
  });

  function renderGroupComponent(CheckBoxGroupProps = {}, CheckBoxProps = {}) {
    const defaultCheckBoxProps = {
      name: "something",
      "data-testid": "test-checkbox",
      value: "else",
      size: "large",
      index: 0
    };

    return renderIntoDocument(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <CheckBoxGroup {...CheckBoxGroupProps}>
          <CheckBoxButton {...defaultCheckBoxProps} {...CheckBoxProps} />
        </CheckBoxGroup>
      </ThemeProvider>
    );
  }

  function renderCheckBox(props = {}) {
    return renderIntoDocument(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <CheckBoxButton
          name="something"
          data-testid="test-checkbox"
          value="1"
          size="small"
          index={0}
          {...props}
        />
      </ThemeProvider>
    );
  }

  it("passing multiple values", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <CheckBoxGroup value={["1", "2"]} onChange={onChange}>
          <CheckBoxButton
            name="something"
            data-testid="test-checkbox"
            value="1"
            size="small"
            index={0}
          />
          <CheckBoxButton
            name="something"
            data-testid="test-checkbox2"
            value="2"
            size="large"
            index={1}
          />

          <CheckBoxButton
            name="something"
            data-testid="test-checkbox3"
            value="2"
            size="large"
            index={2}
          />
        </CheckBoxGroup>
      </ThemeProvider>
    );

    expect(getByTestId("test-checkbox").hasAttribute("checked"));
    expect(getByTestId("test-checkbox2").hasAttribute("checked"));
    expect(!getByTestId("test-checkbox3").hasAttribute("checked"));
  });

  it("passing multiple items then selecting more", () => {
    const onChange = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <CheckBoxGroup value={["1", "2"]} onChange={onChange}>
          <CheckBoxButton
            name="something"
            data-testid="test-checkbox"
            value="1"
            size="small"
            index={0}
          />
          <CheckBoxButton
            name="something"
            data-testid="test-checkbox2"
            value="2"
            size="large"
            index={1}
          />
          <CheckBoxButton
            name="somethingelse"
            data-testid="test-checkbox3"
            value="3"
            size="large"
            index={2}
          />
        </CheckBoxGroup>
      </ThemeProvider>
    );

    fireEvent.click(getByTestId("test-checkbox3"));

    expect(getByTestId("test-checkbox").hasAttribute("checked"));
    expect(getByTestId("test-checkbox2").hasAttribute("checked"));
    expect(getByTestId("test-checkbox3").hasAttribute("checked"));
  });
});
