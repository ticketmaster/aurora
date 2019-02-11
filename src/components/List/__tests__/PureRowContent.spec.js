import React from "react";
import renderer from "react-test-renderer";

import PureListRowContent from "../PureRowContent";

describe("<PureListRowContent />", () => {
  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  const body = global.document.querySelector("body");
  body.appendChild(modalRoot);

  it("renders standard Pure Row Content correctly", () => {
    const component = renderer.create(
      <PureListRowContent index={0} onOverflowClick={jest.fn()}>
        content
      </PureListRowContent>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders standard Pure Row Content correctly with left triggers", () => {
    const component = renderer.create(
      <PureListRowContent
        index={0}
        rowTriggerPosition="left"
        onOverflowClick={jest.fn()}
      >
        content
      </PureListRowContent>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
