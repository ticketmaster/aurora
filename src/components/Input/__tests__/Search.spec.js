import React from "react";
import renderer from "react-test-renderer";
import {
  findRenderedDOMComponentWithTag,
  Simulate,
  renderIntoDocument
} from "react-dom/test-utils";

import SearchInput from "../Search";

describe("SearchInput", () => {
  it("renders default input", () => {
    expect(renderComponent()).toMatchSnapshot();
  });

  it("renders slim input", () => {
    expect(renderComponent({ slim: true })).toMatchSnapshot();
  });

  it("renders inverted input", () => {
    expect(renderComponent({ invert: true })).toMatchSnapshot();
  });

  it("renders slim & inverted input", () => {
    expect(renderComponent({ invert: true, slim: true })).toMatchSnapshot();
  });

  it("it calls componsed onFocus from props", () => {
    const onFocus = jest.fn();
    const tree = renderIntoDocument(<SearchInput onFocus={onFocus} />);
    const input = findRenderedDOMComponentWithTag(tree, "input");

    Simulate.focus(input);

    expect(onFocus).toHaveBeenCalled();
  });

  it("it calls componsed onBlur from props", () => {
    const onBlur = jest.fn();
    const tree = renderIntoDocument(<SearchInput onBlur={onBlur} />);
    const input = findRenderedDOMComponentWithTag(tree, "input");

    Simulate.blur(input);

    expect(onBlur).toHaveBeenCalled();
  });

  it("it calls inverted onBlur from props", () => {
    const onBlur = jest.fn();
    const tree = renderIntoDocument(<SearchInput invert onBlur={onBlur} />);
    const input = findRenderedDOMComponentWithTag(tree, "input");

    Simulate.blur(input);

    expect(onBlur).toHaveBeenCalled();
  });

  function renderComponent(props = {}) {
    return renderer.create(<SearchInput {...props} />);
  }
});
