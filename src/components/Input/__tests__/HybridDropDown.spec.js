import React from "react";
import renderer from "react-test-renderer";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";
import HybridSelect from "../HybridDropDown/HybridSelect";
import HybridOption from "../HybridDropDown/HybridOption";

describe("HybridDropDown", () => {
  function testComponentHTML(props = {}) {
    return (
      <HybridSelect
        selectProps={{ "data-testid": "test-hybridselect" }}
        dropdownProps={{ "data-testid": "test-hybriddropdown" }}
        {...props}
      >
        <HybridOption value="0" index={0}>
          Option One
        </HybridOption>
        <HybridOption value="1" index={1}>
          Option Two
        </HybridOption>
        <HybridOption
          value="2"
          index={2}
          dropdownOptionProps={{ "data-testid": "test-hybridoption" }}
        >
          Option Three
        </HybridOption>
        <HybridOption value="3" index={3}>
          Option Four
        </HybridOption>
        <HybridOption value="4" index={4}>
          Option Five
        </HybridOption>
      </HybridSelect>
    );
  }
  function renderTestComponent(props = {}) {
    return renderIntoDocument(testComponentHTML(props));
  }
  afterEach(cleanup);
  afterAll(cleanup);

  it("renders default hybridDropdown", () => {
    expect(renderTestComponent()).toMatchSnapshot();
  });

  it("renders default hybridDropdown with label", () => {
    expect(renderTestComponent({ label: "Sort By: " })).toMatchSnapshot();
  });

  it("renders hybridDropdown with placeholder", () => {
    expect(
      renderTestComponent({ placeholder: "Select an option" })
    ).toMatchSnapshot();
  });

  it("should call onMouseEnter", () => {
    const onMouseEnter = jest.fn();
    const { getByTestId } = renderTestComponent({ onMouseEnter });

    fireEvent.mouseEnter(getByTestId("test-hybridselect"));

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when option is clicked", () => {
    const onChange = jest.fn();
    const dropdownMenuOpen = jest.fn();
    const { getByTestId } = renderTestComponent({ onChange, dropdownMenuOpen });

    fireEvent.click(getByTestId("test-hybridoption"));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(["2"]);
  });

  it("should call onChange when updateValue is called", () => {
    const instance = renderer.create(testComponentHTML()).getInstance();
    const spyOnChange = jest.spyOn(instance, "onChange");
    instance.updateValue({ target: { value: "1" } });
    expect(spyOnChange).toHaveBeenCalledTimes(1);
    expect(spyOnChange).toHaveBeenCalledWith(["1"]);
    spyOnChange.mockRestore();
  });

  it("should show native select when dropdown close and mouse leave", () => {
    const instance = renderer
      .create(testComponentHTML({ dropdownMenuClose: jest.fn() }))
      .getInstance();
    instance.onMouseEnter();
    instance.dropdownMenuOpen();
    instance.dropdownMenuClose();
    instance.onMouseLeave();
    expect(instance.state.showNativeSelect).toBe(true);
  });

  it("should not show native select when mouse leave dropdown before dropdown close", () => {
    const instance = renderer
      .create(testComponentHTML({ onMouseLeave: jest.fn() }))
      .getInstance();
    instance.onMouseEnter();
    instance.dropdownMenuOpen();
    instance.onMouseLeave();
    expect(instance.state.showNativeSelect).toBe(false);
    instance.dropdownMenuClose();
    expect(instance.state.showNativeSelect).toBe(true);
  });
});
