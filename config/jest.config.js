import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import "jest-styled-components";

global.snapshotWithTheme = (Component, { children = null, ...props } = {}) =>
  expect(
    renderer.create(
      <ThemeProvider theme={{ themeName: "tm" }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  ).toMatchSnapshot();
