import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import RadioInput from "../RadioButton/RadioInput";

describe("<RadioInput />", () => {
  const PROPS = {
    value: "rock",
    name: "genre",
    size: "small",
    checked: false,
    isActive: false,
    isFocused: false,
    index: 0,
    focused: 0
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
    expect(render(RadioInput, PROPS)).toMatchSnapshot();
  });

  it("should render the correct markup when the size prop equals large", () => {
    expect(render(RadioInput, { ...PROPS, size: "large" })).toMatchSnapshot();
  });

  it("should render the correct markup when the disabled prop equals true", () => {
    expect(render(RadioInput, { ...PROPS, disabled: true })).toMatchSnapshot();
  });

  it("should render the correct markup when the isActive prop equals true", () => {
    expect(render(RadioInput, { ...PROPS, isActive: true })).toMatchSnapshot();
  });

  it("should render the correct markup when the isFocused prop equals true", () => {
    expect(render(RadioInput, { ...PROPS, isFocused: true })).toMatchSnapshot();
  });

  it("should render the correct markup when the checked prop equals true", () => {
    expect(render(RadioInput, { ...PROPS, checked: true })).toMatchSnapshot();
  });

  it("should render the correct markup when additional props are passed", () => {
    expect(
      render(RadioInput, { ...PROPS, className: "input--radio-button" })
    ).toMatchSnapshot();
  });

  it("should render the correct markup when description is supplied", () => {
    expect(
      render(RadioInput, { ...PROPS, isTopAligned: true })
    ).toMatchSnapshot();
  });
});
