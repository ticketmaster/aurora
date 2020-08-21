import React from "react";
import renderer from "react-test-renderer";

import SpotifyIcon from "../Spotify";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("SpotifyIcon", () => {
  const children = <title>Spotify Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <SpotifyIcon size={22}>{children}</SpotifyIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <SpotifyIcon color={tm.primary.base} size={22}>
        {children}
      </SpotifyIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
