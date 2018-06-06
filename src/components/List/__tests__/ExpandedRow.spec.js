import React from "react";
import renderer from "react-test-renderer";

import { sections } from "../../../../catalog/pages/expandedRow/mock";
import ExpandedRow from "../ExpandedRow";

describe("<ExpandedRow />", () => {
  it("renders expandedItem correctly", () => {
    const component = renderer.create(
      <ExpandedRow sections={sections} buttonText="See Tickets" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
