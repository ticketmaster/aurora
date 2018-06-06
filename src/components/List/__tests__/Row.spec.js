import React from "react";
import renderer from "react-test-renderer";

import ListRow from "../Row";
import ListRowContainer from "../Container";
import { listItems } from "../../../../catalog/pages/list_row/mock";
import { colors } from "../../../theme";

const onOverflowButtonClick = ({ scope, index }) => ({ event }) => ev => {}; // eslint-disable-line

describe("<ListRow />", () => {
  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  const body = global.document.querySelector("body");
  body.appendChild(modalRoot);

  it("renders standard List Row correctly", () => {
    const component = renderer.create(
      <ListRowContainer>
        <ListRow rowItem={listItems[0]} index={0} onOverflowClick={jest.fn()} />
      </ListRowContainer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders List Row with link correctly", () => {
    const component = renderer.create(
      <ListRowContainer>
        <ListRow
          rowItem={{
            ...listItems[0],
            variant: "withLink",
            linkTitle: "Ticket Options Available",
            linkUrl: "",
            linkSubTitle: "on Partner Site"
          }}
          index={0}
          onOverflowClick={jest.fn()}
        />
      </ListRowContainer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders List Row with colored date correctly", () => {
    const component = renderer.create(
      <ListRowContainer>
        <ListRow
          rowItem={{
            ...listItems[0],
            variant: "standard",
            dateColor: colors.heliotrope.bases
          }}
          index={0}
          onOverflowClick={jest.fn()}
        />
      </ListRowContainer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
