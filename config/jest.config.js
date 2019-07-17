import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import "jest-styled-components";
import "regenerator-runtime";

global.componentSnapshotWithTheme = (
  Component,
  { children = null, ...props } = {}
) =>
  expect(
    renderer.create(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  ).toMatchSnapshot();

global.componentSnapshot = (Component, { children = null, ...props } = {}) =>
  expect(
    renderer.create(<Component {...props}>{children}</Component>)
  ).toMatchSnapshot();
