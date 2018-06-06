import React from "react";
import renderer from "react-test-renderer";

import ListRow from "../Row";
import { sections } from "../../../../catalog/pages/expandedRow/mock";

describe("<ListRow />", () => {
  it("renders standard List Row correctly", () => {
    const component = renderer.create(
      <ListRow
        rowId="567"
        title="Del Mar Fairgrounds"
        subTitle="Del Mar Fairgrounds"
        dateTitle="apr 23"
        dateSubTitle="Thu, 8:00 PM"
        buttonText="See Tickets"
        variant="standard"
        onClick={() => {}}
        onOverflowClick={() => {}}
        expandedSections={sections}
        onExpandOrCollapseClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders eventListRow with link correctly", () => {
    const component = renderer.create(
      <ListRow
        rowId="567"
        title="Del Mar Fairgrounds"
        subTitle="Del Mar Fairgrounds"
        dateTitle="apr 23"
        dateSubTitle="Thu, 8:00 PM"
        buttonText="See Tickets"
        variant="withLink"
        linkTitle="Ticket Options Available"
        linkUrl=""
        linkSubTitle="on Partner Site"
        onClick={() => {}}
        onOverflowClick={() => {}}
        expandedSections={sections}
        onExpandOrCollapseClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders eventListRow with colored date correctly", () => {
    const component = renderer.create(
      <ListRow
        rowId="567"
        title="Del Mar Fairgrounds"
        subTitle="KABOO 3-Day Pass"
        dateTitle="apr 23"
        dateSubTitle="Thu, 8:00 PM"
        buttonText="See Tickets"
        variant="standard"
        coloredDate
        onClick={() => {}}
        onOverflowClick={() => {}}
        expandedSections={sections}
        onExpandOrCollapseClick={() => {}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
