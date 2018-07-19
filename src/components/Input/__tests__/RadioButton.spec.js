import React from "react";
import renderer from "react-test-renderer";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";
import RadioGroup from "../RadioButton/RadioGroup";
import RadioButton from "../RadioButton/RadioButton";

describe("RadioGroup", () => {
  afterEach(cleanup);
  afterAll(cleanup);

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
      <RadioGroup onChange={onChange}>
        <RadioButton
          name="something"
          data-testid="test-radiobutton"
          value="else"
          size="small"
          index={0}
        />
      </RadioGroup>
    );
    fireEvent.change(getByTestId("test-radiobutton"));
    expect(onChange).toHaveBeenCalledWith(["else"]);
  });

  it("only one item selected", () => {
    const onChange = jest.fn();
    const { getByTestId } = renderIntoDocument(
      <RadioGroup onChange={onChange}>
        <RadioButton
          name="something"
          data-testid="test-radiobutton"
          value="else"
          size="small"
          index={0}
        />
        <RadioButton
          name="something"
          data-testid="test-radiobutton2"
          value="new"
          size="small"
          index={1}
        />
      </RadioGroup>
    );
    fireEvent.change(getByTestId("test-radiobutton"));
    fireEvent.change(getByTestId("test-radiobutton2"));
    expect(onChange).toHaveBeenCalledWith(["new"]);
  });

  it("passing in a slected item", () => {
    const onChange = jest.fn();
    const { getByTestId } = renderIntoDocument(
      <RadioGroup value={["value1"]} onChange={onChange}>
        <RadioButton
          name="name1"
          data-testid="test-radiobutton"
          value="value1"
          size="small"
          index={0}
        />
        <RadioButton
          name="name2"
          data-testid="test-radiobutton2"
          value="value2"
          size="small"
          index={1}
        />
        <RadioButton
          name="name3"
          data-testid="test-radiobutton3"
          value="value3"
          size="small"
          index={2}
        />
      </RadioGroup>
    );

    expect(getByTestId("test-radiobutton").hasAttribute("checked"));
    expect(!getByTestId("test-radiobutton2").hasAttribute("checked"));
    expect(!getByTestId("test-radiobutton3").hasAttribute("checked"));
  });

  it("passing in a slected item then selecting another", () => {
    const onChange = jest.fn();
    const { getByTestId } = renderIntoDocument(
      <RadioGroup value={["value1"]} onChange={onChange}>
        <RadioButton
          name="name1"
          data-testid="test-radiobutton"
          value="value1"
          size="small"
          index={0}
        />
        <RadioButton
          name="name2"
          data-testid="test-radiobutton2"
          value="value2"
          size="small"
          index={1}
        />
        <RadioButton
          name="name3"
          data-testid="test-radiobutton3"
          value="value3"
          size="small"
          index={2}
        />
      </RadioGroup>
    );

    fireEvent.change(getByTestId("test-radiobutton2"));

    expect(!getByTestId("test-radiobutton").hasAttribute("checked"));
    expect(getByTestId("test-radiobutton2").hasAttribute("checked"));
    expect(!getByTestId("test-radiobutton3").hasAttribute("checked"));
  });

  function renderGroupComponent(props = {}) {
    return renderer.create(
      <RadioGroup {...props}>
        {" "}
        <RadioButton name="name1" value="value" size="small" index={0} />{" "}
      </RadioGroup>
    );
  }
});
