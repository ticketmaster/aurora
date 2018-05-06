import React from "react";
import renderer from "react-test-renderer";

import TicketOptions from "../TicketOptions";

describe("<TicketOptions />", () => {
  it("renders TicketOptions correctly", () => {
    const component = renderer.create(<TicketOptions />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
