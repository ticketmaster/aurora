import React from "react";
import renderer from "react-test-renderer";

import VenueSearchIcon from "../VenueSearch";

describe("VenueSearchIcon", () => {
  const children = <title>Venue Search Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <VenueSearchIcon color="#000">{children}</VenueSearchIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
