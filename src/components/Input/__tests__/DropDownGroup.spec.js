import React from "react";
import renderer from "react-test-renderer";
import {
  renderIntoDocument,
  cleanup,
  fireEvent,
  Simulate
} from "react-testing-library";
import { LAYOUT_VARIANTS } from "../DropDown/constants";

import DropDownGroup from "../DropDown/DropDownGroup";
import DropDownOption from "../DropDown/DropDownOption";
import CalendarIcon from "../../Icons/Calendar";

describe("DropDownGroup", () => {
  function renderTestComponentOne(props = {}) {
    return renderIntoDocument(
      <div data-testid="test-outSideComponent">
        <div data-testid="something">something</div>
        <DropDownGroup {...props} data-testid="test-dropContainer">
          <DropDownOption
            data-testid="test-dropDownOptionOne"
            value="ValueOne"
            index={0}
          >
            Option One
          </DropDownOption>
          <DropDownOption
            data-testid="test-dropDownOptionTwo"
            value="ValueTwo"
            index={1}
          >
            Second Option
          </DropDownOption>
          <DropDownOption
            data-testid="test-dropDownOptionThree"
            value="ValueThree"
            index={2}
          >
            Option Three
          </DropDownOption>
        </DropDownGroup>
      </div>
    );
  }

  function renderTestComponentTwo(props = {}) {
    return renderIntoDocument(
      <DropDownGroup
        {...props}
        variant={LAYOUT_VARIANTS.BORDERLESS_INNER_LABEL}
        label="Sort By:"
      >
        <DropDownOption value="date" index={0}>
          {"Date"}
          {null}
        </DropDownOption>
        <DropDownOption value="distance" index={1}>
          {"Distance - "}
          {"Closest"}
        </DropDownOption>
        <DropDownOption value="price" index={2}>
          {"Price "}
          {<span>On sale</span>}
        </DropDownOption>
      </DropDownGroup>
    );
  }

  afterEach(cleanup);

  it("renders default dropdown", () => {
    expect(renderTestComponentOne().container.firstChild).toMatchSnapshot();
  });

  it("renders default dropdown that should always open downwards", () => {
    expect(
      renderTestComponentOne({ shouldOpenDownward: true }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders small dropdown", () => {
    expect(
      renderTestComponentOne({ size: "small" }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders bordered variant with an inner label with a placeholder prop", () => {
    expect(
      renderTestComponentOne({
        placeholder: "Select An Option",
        variant: LAYOUT_VARIANTS.BORDERED_INNER_LABEL
      }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders borderless variant with an inner label with a label prop", () => {
    expect(
      renderTestComponentOne({
        label: "Selected Option:",
        variant: LAYOUT_VARIANTS.BORDERLESS_INNER_LABEL
      }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders input correctly when the isOpen prop with a value of true is passed", () => {
    expect(
      renderTestComponentOne({ isOpen: true }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders input correctly when the keywordSearch prop with a value of false is passed", () => {
    expect(
      renderTestComponentOne({ keywordSearch: false }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders input correctly when the withKeyboardProvider prop with a value of false is passed", () => {
    expect(
      renderTestComponentOne({ withKeyboardProvider: false }).container
        .firstChild
    ).toMatchSnapshot();
  });

  it("Should open the drop down onClick", () => {
    const { container, getByTestId } = renderTestComponentOne();

    fireEvent.click(getByTestId("test-dropContainer"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should not focus onClick", () => {
    const { container } = renderTestComponentOne({ disabled: true });
    fireEvent.mouseDown(container.querySelector("label"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Escape key should close the drop down", () => {
    const { container, getByTestId } = renderTestComponentOne();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "Escape",
      keyCode: 27,
      which: 27
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Arrow key up should open the drop down", () => {
    const { container, getByTestId } = renderTestComponentOne();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowUp",
      keyCode: 32,
      which: 32
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Arrow key down should open the drop down", () => {
    const { container, getByTestId } = renderTestComponentOne();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Click outside should close the dropdown", () => {
    const { container, getByTestId } = renderTestComponentOne();

    fireEvent.click(getByTestId("test-dropContainer"));
    fireEvent.click(getByTestId("test-outSideComponent"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Click outside should not close the dropdown when the isOpen prop equals true", () => {
    const { container, getByTestId } = renderTestComponentOne({ isOpen: true });

    fireEvent.click(getByTestId("test-dropDownOptionOne"));
    fireEvent.click(getByTestId("test-outSideComponent"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Effect when move moves over dropdown option when focused is same as index", () => {
    const { container, getByTestId } = renderTestComponentOne({ isOpen: true });

    fireEvent.mouseMove(getByTestId("test-dropDownOptionOne"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Effect when move moves over dropdown option  when focused is not same as index", () => {
    const { container, getByTestId } = renderTestComponentOne({ isOpen: true });

    fireEvent.mouseMove(getByTestId("test-dropDownOptionTwo"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Space bar should select and close dropdown", () => {
    const onChange = jest.fn();
    const { container, getByTestId } = renderTestComponentOne({ onChange });

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 32,
      which: 32,
      bubbles: true
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Space bar should select and not close dropdown when the isOpen prop equals true", () => {
    const onChange = jest.fn();
    const { container, getByTestId } = renderTestComponentOne({
      onChange,
      isOpen: true
    });

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 32,
      which: 32,
      bubbles: true
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should remove event listener when unmount", () => {
    const { container, unmount } = renderTestComponentOne();

    unmount();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("Should invoke an onChange handler option selected", () => {
    const onChange = jest.fn();
    const { getByTestId } = renderTestComponentOne({ onChange });

    Simulate.click(getByTestId("test-dropContainer"));
    Simulate.click(getByTestId("test-dropDownOptionOne"));

    expect(onChange).toHaveBeenCalledWith(["ValueOne"]);
  });

  it("Should invoke an onChange handler when passed value to group", () => {
    const { queryAllByText } = renderTestComponentOne({
      value: ["ValueOne"]
    });

    const optionChoice = queryAllByText("Option One");
    expect(optionChoice).toHaveLength(2);
  });

  it("Selecting options after passing in values", () => {
    const { queryAllByText, getByTestId } = renderTestComponentOne({
      value: ["ValueOne"]
    });

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 32,
      which: 32,
      bubbles: true
    });

    const optionChoice = queryAllByText("Second Option");
    expect(optionChoice).toHaveLength(1);
  });

  it("Pressing tab when the dropdown is open", () => {
    const { getByTestId } = renderTestComponentOne();
    const preventDefault = jest.fn();

    fireEvent.click(getByTestId("test-dropDownOptionOne"));

    Simulate.keyDown(getByTestId("test-dropContainer"), {
      key: "Tab",
      keyCode: 9,
      which: 9,
      bubbles: true,
      preventDefault
    });

    expect(preventDefault).toHaveBeenCalled();
  });

  it("Should select options based on typed input", () => {
    const { queryAllByText, getByTestId } = renderTestComponentOne();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "s",
      keyCode: 83,
      which: 83,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 32,
      which: 32,
      bubbles: true
    });

    const optionChoice = queryAllByText("Second Option");
    expect(optionChoice).toHaveLength(1);
  });

  it("if entered texted doesn't not match then select the option that matched previously", () => {
    const onChange = jest.fn();
    const { queryAllByText, getByTestId } = renderTestComponentOne({
      onChange
    });

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "s",
      keyCode: 83,
      which: 83,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "z",
      keyCode: 90,
      which: 90,
      bubbles: true
    });

    fireEvent.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 32,
      which: 32,
      bubbles: true
    });

    const optionChoice = queryAllByText("Option One");
    expect(optionChoice).toHaveLength(2);
  });

  it("should NOT disable TAB key when the dropdown is NOT open", () => {
    const preventDefault = jest.fn();
    const { getByTestId } = renderTestComponentOne();

    Simulate.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 9,
      which: 9,
      bubbles: true,
      preventDefault
    });
    expect(preventDefault).not.toBeCalled();
  });

  it("should disable TAB key when the dropdown is open", () => {
    const preventDefault = jest.fn();
    const { getByTestId } = renderTestComponentOne();
    fireEvent.click(getByTestId("test-dropDownOptionOne"));

    Simulate.keyDown(getByTestId("test-dropDownOptionOne"), {
      key: "",
      keyCode: 9,
      which: 9,
      bubbles: true,
      preventDefault
    });
    expect(preventDefault).toHaveBeenCalled();
  });

  it("should render the correct label when label prop is passed, and when an array of children containing falsy values is passed to each DropDownOption", () => {
    const { container } = renderTestComponentTwo({ value: ["date"] });
    expect(container).toMatchSnapshot();
  });

  it("should render the correct label when label prop is passed, and when an array of children containing string values is passed to each DropDownOption", () => {
    const { container } = renderTestComponentTwo({ value: ["distance"] });
    expect(container).toMatchSnapshot();
  });

  it("should render the correct label when label prop is passed, and when an array of children containing string and node values is passed to each DropDownOption", () => {
    const { container } = renderTestComponentTwo({ value: ["price"] });
    expect(container).toMatchSnapshot();
  });

  it("should render the label with icon", () => {
    const { queryByTestId } = renderTestComponentTwo({
      value: ["price"],
      icon: <CalendarIcon data-testid="testid" />
    });

    expect(queryByTestId("testid")).toBeTruthy();
  });

  it("should hide right chevron icon icon", () => {
    const { container } = renderTestComponentTwo({
      value: ["price"],
      chevronVisible: false
    });
    const chevron = container.querySelector("svg");

    expect(chevron).toBe(null);
  });

  it("should fire onDropDownToggle if its passed", () => {
    const onDropDownToggleEvent = jest.fn();
    const { container } = renderTestComponentOne({
      onDropDownToggle: onDropDownToggleEvent
    });
    const labelTag = container.getElementsByTagName("LABEL")[0];

    Simulate.click(labelTag);
    expect(onDropDownToggleEvent).toBeCalled();
  });
});

describe("DropDownOption", () => {
  it("should render the correct markup when a className prop is passed", () => {
    const component = renderer.create(
      <DropDownOption
        className="dropdown__item--expandable"
        value="ValueOne"
        index={0}
      >
        Option One
      </DropDownOption>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
