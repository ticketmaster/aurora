import React from "react";
import renderer from "react-test-renderer";

import ListRow from "../";

describe("<ListRow />", () => {
  it("renders standard eventListRow correctly", () => {
    const component = renderer.create(
      <ListRow
        title="Del Mar Fairgrounds"
        subTitle="KABOO 3-Day Pass"
        dateTitle="apr 23"
        dateSubTitle="Thu, 8:00 PM"
        buttonText="See Tickets"
        variant="standard"
        onClick={() => {}}
        onOverflowClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders eventListRow with link correctly", () => {
    const component = renderer.create(
      <ListRow
        title="Del Mar Fairgrounds"
        subTitle="KABOO 3-Day Pass"
        dateTitle="apr 23"
        dateSubTitle="Thu, 8:00 PM"
        buttonText="See Tickets"
        variant="withLink"
        linkTitle="Ticket Options Available"
        linkUrl=""
        onClick={() => {}}
        onOverflowClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
