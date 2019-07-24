import React from "react";
import { ThemeProvider } from "styled-components";
import { cleanup, render } from "react-testing-library";

import Input from "../Input";

describe("Input", () => {
  afterEach(cleanup);

  it("renders default input", () => {
    const { container } = renderInputComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders small input", () => {
    const { container } = renderInputComponent({
      size: "small",
      style: { color: "blue" }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders large input", () => {
    const { container } = renderInputComponent({
      size: "large",
      label: "First Name",
      labelStyle: { fontSize: "20px" }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders top labeled input", () => {
    const { container } = renderInputComponent({ labelPosition: "top" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders left labeled input", () => {
    const { container } = renderInputComponent({ labelPosition: "left" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders disabled input", () => {
    const { container } = renderInputComponent({ disabled: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders input with error", () => {
    const { container } = renderInputComponent({
      errorMessage: "Something Went Wrong"
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders input without name", () => {
    const { container } = renderInputComponent({ name: undefined });
    expect(container.firstChild).toMatchSnapshot();
  });

  function renderInputComponent(props = {}) {
    return render(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <Input name="test1" placeholder="test hint" {...props} />
      </ThemeProvider>
    );
  }
});
