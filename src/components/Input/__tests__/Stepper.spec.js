/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { ThemeProvider } from "styled-components";
import { cleanup, render, Simulate } from "react-testing-library";

import Stepper from "../Stepper/Stepper";

describe("Stepper", () => {
  afterEach(cleanup);

  it("renders default stepper", () => {
    const { container } = renderStepperComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders disabled stepper", () => {
    const { container } = renderStepperComponent({ disabled: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("decrements correctly", () => {
    const { container } = renderStepperComponent();
    const button = container.getElementsByTagName("button")[0];

    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("decrements twice correctly", () => {
    const { container } = renderStepperComponent();
    const button = container.getElementsByTagName("button")[0];

    Simulate.click(button);
    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("decrements from non-zero value correctly", () => {
    const { container } = renderStepperComponent();
    const decButton = container.getElementsByTagName("button")[0];
    const incButton = container.getElementsByTagName("button")[1];

    Simulate.click(incButton);
    Simulate.click(incButton);
    Simulate.click(decButton);
    Simulate.click(decButton);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("increments correctly", () => {
    const { container } = renderStepperComponent();
    const button = container.getElementsByTagName("button")[1];

    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("increments twice correctly", () => {
    const { container } = renderStepperComponent();
    const button = container.getElementsByTagName("button")[1];

    Simulate.click(button);
    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles input value correctly", () => {
    const { container } = renderStepperComponent();
    const input = container.getElementsByTagName("input")[0];

    Simulate.change(input, {
      target: { value: "42" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles input value longer than 2 chars correctly", () => {
    const { container } = renderStepperComponent();
    const input = container.getElementsByTagName("input")[0];

    Simulate.change(input, {
      target: { value: "4242" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles case when input is deleted", () => {
    const { container } = renderStepperComponent();
    const input = container.getElementsByTagName("input")[0];

    Simulate.change(input, {
      target: { value: "" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  function renderStepperComponent(props = {}) {
    return render(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <Stepper {...props} />
      </ThemeProvider>
    );
  }
});
