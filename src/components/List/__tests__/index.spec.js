import React from "react";
import renderer from "react-test-renderer";

import ListRow from "../Row";
import ListContainer from "../Container";

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
        href="http://localhost/new/"
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
        href="http://localhost/new/"
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

  it("renders eventListRow with container", () => {
    const component = renderer.create(
      <ListContainer>
        <ListRow
          title="Del Mar Fairgrounds"
          subTitle="KABOO 3-Day Pass"
          dateTitle="apr 23"
          dateSubTitle="Thu, 8:00 PM"
          buttonText="See Tickets"
          variant="withLink"
          href="http://localhost/new/"
          linkTitle="Ticket Options Available"
          linkUrl=""
          onClick={() => {}}
          onOverflowClick={() => {}}
        />
      </ListContainer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
