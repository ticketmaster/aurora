import React from "react";
import { render, cleanup } from "react-testing-library";

import DisplayOn from "../DisplayOn";

jest.mock("../Context", () => ({
  Consumer: ({ children }) => children({ "4g": true })
}));

describe("DisplayOn", () => {
  afterEach(() => {
    cleanup();
  });

  it("should return children when the connection prop matches connection state", () => {
    const { container } = render(<DisplayOn conn4g>Content</DisplayOn>);

    expect(container).toMatchSnapshot();
  });

  it("should return null when the connection prop does not match connection state", () => {
    const { container } = render(<DisplayOn conn2g>Content</DisplayOn>);

    expect(container).toMatchSnapshot();
  });
});
