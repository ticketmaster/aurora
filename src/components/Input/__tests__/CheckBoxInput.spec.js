import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import CheckBoxInput from "../CheckBox/CheckBoxInput";

describe("<CheckBoxInput />", () => {
  const PROPS = {
    value: "rock",
    name: "genre",
    size: "small",
    disabled: false,
    isChecked: false
  };

  const render = (Component, props) => {
    const { children } = props;

    return renderer.create(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    );
  };

  it("should render the correct markup", () => {
    expect(render(CheckBoxInput, PROPS)).toMatchSnapshot();
  });

  it("should render the correct markup when the size prop equals large", () => {
    expect(
      render(CheckBoxInput, { ...PROPS, size: "large" })
    ).toMatchSnapshot();
  });

  it("should render the correct markup when the disabled prop equals true", () => {
    expect(
      render(CheckBoxInput, { ...PROPS, disabled: true })
    ).toMatchSnapshot();
  });

  it("should render the correct markup when the isChecked prop equals true", () => {
    expect(
      render(CheckBoxInput, { ...PROPS, isChecked: true })
    ).toMatchSnapshot();
  });

  it("should render the correct markup when additional props are passed", () => {
    expect(
      render(CheckBoxInput, { ...PROPS, className: "input--check-box" })
    ).toMatchSnapshot();
  });
});
