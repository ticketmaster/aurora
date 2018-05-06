import React from "react";
import renderer from "react-test-renderer";

import EventListRow from "../";

const mockDate = { dateTitle: "APR 23", dateSubTitle: "Thu, 8:00PM" };

describe("<Button />", () => {
  it("renders standard eventListRow correctly", () => {
    const component = renderer.create(
      <EventListRow
        url=""
        variant="standard"
        icon="down"
        date={mockDate}
        venueName="Del Mar Fairgrounds"
        eventName="KABOO 3-Day Pass"
        onClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders variant eventListRow correctly", () => {
    const component = renderer.create(
      <EventListRow
        url=""
        u
        variant="ticketOptions"
        icon="down"
        date={mockDate}
        venueName="Del Mar Fairgrounds"
        eventName="KABOO 3-Day Pass"
        onClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
