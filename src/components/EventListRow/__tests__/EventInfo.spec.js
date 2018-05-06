import React from "react";
import renderer from "react-test-renderer";

import EventInfo from "../EventInfo";

describe("<EventInfo />", () => {
  it("renders EventInfo correctly", () => {
    const component = renderer.create(
      <EventInfo eventName="Dave Mathews Band" venueName="Hollywood Bowl" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
