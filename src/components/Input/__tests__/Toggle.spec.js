/* eslint-disable react/jsx-boolean-value */
import React from "react";
import renderer from "react-test-renderer";
import { render, Simulate } from "react-testing-library";

import { Toggle } from "../";

describe("<Toggle />", () => {
  it("renders small size active toggle correctly", () => {
    const component = renderer.create(<Toggle size="small" value={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders regular size active toggle correctly", () => {
    const component = renderer.create(<Toggle value={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders regular disabled active toggle correctly", () => {
    const component = renderer.create(<Toggle value={true} disabled />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders regular disabled inactive toggle correctly", () => {
    const component = renderer.create(<Toggle value={false} disabled />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should invoke an onClick handler when passed", () => {
    const onToggle = jest.fn();
    const { container } = render(<Toggle value={true} onToggle={onToggle} />);
    const inputElement = container.querySelector('button[role="switch"]');
    Simulate.click(inputElement);
    expect(onToggle).toHaveBeenCalled();
  });

  it("should not invoke an onToggle handler on click when disabled", () => {
    const onToggle = jest.fn();
    const { container } = render(
      <Toggle value={true} onToggle={onToggle} disabled />
    );
    const activeArea = container.firstChild;
    Simulate.click(activeArea);
    expect(onToggle.mock.calls.length).toBe(0);
  });

  it("should call keyPress handler if it is provided", () => {
    const onKeyPress = jest.fn();
    const { container } = render(
      <Toggle value={true} onKeyPress={onKeyPress} />
    );
    const inputElement = container.querySelector('button[role="switch"]');
    Simulate.keyPress(inputElement);
    expect(onKeyPress.mock.calls.length).toBe(1);
  });
});
