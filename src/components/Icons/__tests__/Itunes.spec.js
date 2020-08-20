import React from "react";
import renderer from "react-test-renderer";

import ItunesIcon from "../Spotify";
import themes from "../../../theme/colorThemes";

const { tm } = themes;

describe("ItunesIcon", () => {
  const children = <title>Itunes Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <ItunesIcon size={22}>{children}</ItunesIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when a color prop is passed", () => {
    const component = renderer.create(
      <ItunesIcon color={tm.primary.base} size={22}>
        {children}
      </ItunesIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
