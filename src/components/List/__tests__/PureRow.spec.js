import React from "react";
import renderer from "react-test-renderer";

import PureListRow from "../PureRow";
import ListRowContainer from "../Container";

describe("<PureListRow />", () => {
  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  const body = global.document.querySelector("body");
  body.appendChild(modalRoot);

  it("renders standard Pure List Row correctly", () => {
    const component = renderer.create(
      <ListRowContainer>
        <PureListRow index={0} onOverflowClick={jest.fn()} />
      </ListRowContainer>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Pure List Row with title correctly when expanded", () => {
    const component = renderer.create(
      <ListRowContainer>
        <PureListRow
          isOpen
          onExpandShow="title"
          index={0}
          onOverflowClick={jest.fn()}
        />
      </ListRowContainer>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Pure List Row with triggers on the left side", () => {
    const component = renderer.create(
      <ListRowContainer>
        <PureListRow
          rowTriggerPosition="left"
          index={0}
          onOverflowClick={jest.fn()}
        />
      </ListRowContainer>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Pure List Row unmounts correctly", () => {
    const component = renderer.create(
      <ListRowContainer>
        <PureListRow isOpen index={0} onOverflowClick={jest.fn()} />
      </ListRowContainer>
    );
    component.unmount();
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
