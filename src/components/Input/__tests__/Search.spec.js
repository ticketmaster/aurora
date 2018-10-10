import React from "react";
import renderer from "react-test-renderer";
import { renderIntoDocument, fireEvent, cleanup } from "react-testing-library";

import SearchInput from "../Search";

describe("SearchInput", () => {
  afterEach(cleanup);

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

  it("passes iconProps to the SearchIcon component", () => {
    expect(
      renderComponent({ iconProps: { color: "currentColor" } })
    ).toMatchSnapshot();
  });

  it("it calls componsed onFocus from props", () => {
    const onFocus = jest.fn();
    const { getByPlaceholderText } = renderIntoDocument(
      <SearchInput placeholder="search" onFocus={onFocus} />
    );

    fireEvent.focus(getByPlaceholderText("search"));

    expect(onFocus).toHaveBeenCalled();
  });

  it("it calls componsed onBlur from props", () => {
    const onBlur = jest.fn();
    const { getByPlaceholderText } = renderIntoDocument(
      <SearchInput placeholder="search" onBlur={onBlur} />
    );

    fireEvent.blur(getByPlaceholderText("search"));

    expect(onBlur).toHaveBeenCalled();
  });

  function renderComponent(props = {}) {
    return renderer.create(<SearchInput {...props} />);
  }
});
