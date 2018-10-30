import React from "react";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

describe("ButtonGroup", () => {
  afterEach(cleanup);

  const renderButtonGroup = (groupProps, sectionProps) =>
    renderIntoDocument(
      <ButtonGroup title="Sort by" {...groupProps}>
        <ButtonGroup.Section title="Category" value="0" {...sectionProps}>
          <ButtonGroup.Button value="0" data-testid="test-button0">
            All
          </ButtonGroup.Button>
          <ButtonGroup.Button value="1" data-testid="test-button1">
            Concerts
          </ButtonGroup.Button>
          <ButtonGroup.Button value="2" data-testid="test-button2">
            Button Label
          </ButtonGroup.Button>
        </ButtonGroup.Section>
      </ButtonGroup>
    );
  it("renders default button group", () => {
    const component = renderButtonGroup();
    expect(component).toMatchSnapshot();
  });

  it("renders button group with default selected element", () => {
    const component = renderButtonGroup({ value: { 0: ["0"] } });
    expect(component).toMatchSnapshot();
    expect(component.getByTestId("test-button0").className).toEqual(
      expect.stringContaining("button__selected")
    );
  });

  it("selecting item", () => {
    const onChange = jest.fn();
    const component = renderButtonGroup({ onChange });
    fireEvent.click(component.getByTestId("test-button0"));
    expect(onChange).toHaveBeenCalledWith({ "0": ["0"] });
  });

  it("selecting item of button group with default selected item (no multi selection)", () => {
    const onChange = jest.fn();
    const component = renderButtonGroup({ value: { 0: ["0"] }, onChange });
    fireEvent.click(component.getByTestId("test-button1"));
    expect(onChange).toHaveBeenCalledWith({ "0": ["1"] });
  });

  it("selecting item of button group with several sections", () => {
    const onChange = jest.fn();
    const component = renderIntoDocument(
      <ButtonGroup title="Sort by" onChange={onChange} value={{ 0: ["0"] }}>
        <ButtonGroup.Section title="Category0" value="0">
          <ButtonGroup.Button value="0" data-testid="test-button0">
            All
          </ButtonGroup.Button>
        </ButtonGroup.Section>
        <ButtonGroup.Section title="Category1" value="1">
          <ButtonGroup.Button value="0" data-testid="test-button1">
            All
          </ButtonGroup.Button>
        </ButtonGroup.Section>
      </ButtonGroup>
    );
    fireEvent.click(component.getByTestId("test-button1"));
    expect(onChange).toHaveBeenCalledWith({ "0": ["0"], "1": ["0"] });
  });

  it("selecting multiple items of button group", () => {
    const onChange = jest.fn();
    const component = renderButtonGroup({ onChange }, { isMultiSelect: true });
    fireEvent.click(component.getByTestId("test-button0"));
    fireEvent.click(component.getByTestId("test-button1"));
    fireEvent.click(component.getByTestId("test-button2"));
    expect(onChange).toHaveBeenCalledWith({ "0": ["0", "1", "2"] });
    expect(onChange.mock.calls.length).toBe(3);
  });
});
