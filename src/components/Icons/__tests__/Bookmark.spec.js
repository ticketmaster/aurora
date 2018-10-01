/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { BookmarkIcon } from "../";

describe("BookmarkIcon", () => {
  const children = <title>Bookmark Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<BookmarkIcon>{children}</BookmarkIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
