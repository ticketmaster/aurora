/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { ThemeProvider } from "styled-components";
import { cleanup, render, Simulate } from "react-testing-library";

import QtySelector from "../QtySelector/QtySelector";

describe("QtySelector", () => {
  afterEach(cleanup);

  it("renders default QtySelector", () => {
    const { container } = renderQtySelectorComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders QtySelector correctly when there are min and max", () => {
    const { container } = renderQtySelectorComponent({ min: 2, max: 4 });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders disabled QtySelector", () => {
    const { container } = renderQtySelectorComponent({ disabled: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("decrements correctly", () => {
    const { container } = renderQtySelectorComponent();
    const button = container.getElementsByTagName("button")[0];

    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("decrements twice correctly", () => {
    const { container } = renderQtySelectorComponent();
    const button = container.getElementsByTagName("button")[0];

    Simulate.click(button);
    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("decrements from non-zero value correctly", () => {
    const { container } = renderQtySelectorComponent();
    const decButton = container.getElementsByTagName("button")[0];
    const incButton = container.getElementsByTagName("button")[1];

    Simulate.click(incButton);
    Simulate.click(incButton);
    Simulate.click(decButton);
    Simulate.click(decButton);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("increments correctly", () => {
    const { container } = renderQtySelectorComponent();
    const button = container.getElementsByTagName("button")[1];

    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("increments twice correctly", () => {
    const { container } = renderQtySelectorComponent();
    const button = container.getElementsByTagName("button")[1];

    Simulate.click(button);
    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles input value correctly", () => {
    const { container } = renderQtySelectorComponent();
    const input = container.getElementsByTagName("input")[0];

    Simulate.change(input, {
      target: { value: "42" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles input value longer than 2 chars correctly", () => {
    const { container } = renderQtySelectorComponent();
    const input = container.getElementsByTagName("input")[0];

    Simulate.change(input, {
      target: { value: "4242" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles input value longer than 2 chars correctly when using buttons", () => {
    const { container } = renderQtySelectorComponent();
    const input = container.getElementsByTagName("input")[0];
    const button = container.getElementsByTagName("button")[1];

    Simulate.change(input, {
      target: { value: "99" }
    });
    Simulate.click(button);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("sets focus state to true after input is focused", () => {
    const { container } = renderQtySelectorComponent();
    const input = container.getElementsByTagName("input")[0];
    Simulate.focus(input);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("sets focus state to false when input looses focus", () => {
    const { container } = renderQtySelectorComponent();
    const input = container.getElementsByTagName("input")[0];
    Simulate.blur(input);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles case when input is deleted", () => {
    const { container } = renderQtySelectorComponent();
    const input = container.getElementsByTagName("input")[0];

    Simulate.change(input, {
      target: { value: "" }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  function renderQtySelectorComponent(props = {}) {
    return render(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <QtySelector {...props} />
      </ThemeProvider>
    );
  }
});
