import React from "react";
import renderer from "react-test-renderer";
import {
  renderIntoDocument,
  cleanup,
  fireEvent,
  Simulate
} from "react-testing-library";

import DropDownGroup from "../DropDown/DropDownGroup";
import DropDownOption from "../DropDown/DropDownOption";

describe("DropDownGroup", () => {
  afterEach(cleanup);

  it("renders default input", () => {
    expect(renderComponent().container.firstChild).toMatchSnapshot();
  });

  it("renders variant 0 with a placeholder prop", () => {
    expect(
      renderComponent({ placeholder: "Select An Option", variant: 1 }).container
        .firstChild
    ).toMatchSnapshot();
  });

  it("renders variant 1 with a label prop", () => {
    expect(
      renderComponent({ label: "Selected Option:", variant: 1 }).container
        .firstChild
    ).toMatchSnapshot();
  });

  it("renders input correctly when the isOpen prop with a value of true is passed", () => {
    expect(
      renderComponent({ isOpen: true }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders input correctly when the keywordSearch prop with a value of false is passed", () => {
    expect(
      renderComponent({ keywordSearch: false }).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders input correctly when the withKeyboardProvider prop with a value of false is passed", () => {
    expect(
      renderComponent({ withKeyboardProvider: false }).container.firstChild
    ).toMatchSnapshot();
  });

  it("Should open the drop down onClick", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.click(getByTestId("test-dropContainer"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should close the drop down on click outside", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.click(getByTestId("test-dropContainer"));
    fireEvent.click(getByTestId("something"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should not focus onClick", () => {
    const { container } = renderComponent({ disabled: true });
    fireEvent.mouseDown(container.querySelector("label"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Escape key should close the drop down", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "Escape",
      keyCode: 27,
      which: 27
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Arrow key up should open the drop down", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowUp",
      keyCode: 32,
      which: 32
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Arrow down arrow should open the drop down", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.keyDown(getByTestId("test-dropContainer"), {
      key: "ArrowDown",
      keyCode: 40,
      which: 40
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Click outside should close the dropdown", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.click(getByTestId("test-dropContainer"));
    fireEvent.click(getByTestId("test-outSideComponent"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Click outside should not close the dropdown when the isOpen prop equals true", () => {
    const { container, getByTestId } = renderComponent({ isOpen: true });

    fireEvent.click(getByTestId("test-dropContainer"));
    fireEvent.click(getByTestId("test-outSideComponent"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Space bar should select and close dropdown", () => {
    const onChange = jest.fn();
    const { container, getByTestId } = renderComponent({ onChange });

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
    const { container, getByTestId } = renderComponent({
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
    const { container, unmount } = renderComponent();

    unmount();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("Should invoke an onChange handler option selected", () => {
    const onChange = jest.fn();
    const { getByTestId } = renderComponent({ onChange });

    Simulate.click(getByTestId("test-dropContainer"));
    Simulate.click(getByTestId("test-dropDownOptionOne"));

    expect(onChange).toHaveBeenCalledWith(["ValueOne"]);
  });

  it("Should invoke an onChange handler when passed value to group", () => {
    const { queryAllByText } = renderComponent({
      value: ["ValueOne"]
    });

    const optionChoice = queryAllByText("Option One");
    expect(optionChoice).toHaveLength(2);
  });

  it("Selecting options after passing in values", () => {
    const { queryAllByText, getByTestId } = renderComponent({
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
    const { getByTestId } = renderComponent();
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
    const { queryAllByText, getByTestId } = renderComponent();

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
    const { queryAllByText, getByTestId } = renderComponent({ onChange });

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

  it("disable scroll when dropdown is open", () => {
    const { container, getByTestId } = renderComponent();

    fireEvent.click(getByTestId("test-dropDownOptionOne"));
    fireEvent.wheel(getByTestId("test-outSideComponent"));

    expect(container.firstChild).toMatchSnapshot();
  });

  function renderComponent(props = {}) {
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
