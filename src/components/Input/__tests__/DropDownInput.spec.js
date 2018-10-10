import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import DropDownInput from "../DropDown/DropDownInput";

describe("<DropDownInput />", () => {
  const PROPS = {
    value: "rock",
    children: "Rock & Roll",
    index: 0,
    isSelected: false
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
    expect(render(DropDownInput, PROPS)).toMatchSnapshot();
  });

  it("should render the correct markup when the className prop is valid", () => {
    expect(
      render(DropDownInput, { ...PROPS, className: "input--drop-down" })
    ).toMatchSnapshot();
  });

  it("should render the correct markup when the isSelected prop equals true", () => {
    expect(
      render(DropDownInput, { ...PROPS, isSelected: true })
    ).toMatchSnapshot();
  });

  it("should render the correct markup when additional props are passed", () => {
    expect(
      render(DropDownInput, { ...PROPS, "data-index": 0 })
    ).toMatchSnapshot();
  });
});
