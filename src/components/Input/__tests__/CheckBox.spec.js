import React from "react";
import { ThemeProvider } from "styled-components";
import { render, cleanup, Simulate } from "react-testing-library";

import { CheckBox } from "../";
import { blur } from "../CheckBox/CheckBox";

describe("CheckBox", () => {
  afterEach(cleanup);

  it("renders default checkbox", () => {
    const { container } = renderCheckBox();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders default checked checkbox", () => {
    const { container } = renderCheckBox({ checked: true, onChange: () => {} });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders default indeterminate checkbox", () => {
    const { container } = renderCheckBox({
      checked: "indeterminate",
      onChange: () => {}
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders large checkbox", () => {
    const { container } = renderCheckBox({ size: "large" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders disabled checkbox", () => {
    const { container } = renderCheckBox({ disabled: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly after click ", () => {
    const { container } = renderCheckBox();
    Simulate.click(container.querySelector("label"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly on focus ", () => {
    const { container } = renderCheckBox();
    Simulate.focus(container.querySelector("label"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should execute blur method on event target", () => {
    const mockFn = jest.fn();
    const mockEventObj = {
      target: {
        blur: mockFn
      }
    };
    blur(mockEventObj);
    expect(mockFn.mock.calls.length).toBe(1);
  });

  function renderCheckBox(props = {}) {
    return render(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <CheckBox name="test_name" value="test_value" {...props}>
          Test checkbox
        </CheckBox>
      </ThemeProvider>
    );
  }
});
