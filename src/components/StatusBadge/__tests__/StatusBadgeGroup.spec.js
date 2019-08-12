import React from "react";
import renderer from "react-test-renderer";
import { StatusBadgeGroup } from "../";
import Tooltip from "../../Tooltip";

const badges = [
  { label: "error", color: "#d3d3d3" },
  { label: "caution", color: "#f0f0f0" }
];

jest.mock("../../Tooltip");

describe("StatusBadgeGroup", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <StatusBadgeGroup
          variant="dark"
          visibleBadges={badges}
          hiddenBadges={badges}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should close tooltip on mouse leave", () => {
    const mockEvent = {
      stopPropagation: jest.fn()
    };

    const inst = renderer
      .create(<StatusBadgeGroup visibleBadges={badges} hiddenBadges={badges} />)
      .getInstance();
    inst.state = { isOpen: true };
    inst.mouseLeave(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(inst.state).toEqual({ isOpen: false });
  });

  it("should open tooltip on mouse enter or touch", () => {
    Tooltip.getDimensionsFromEvent = jest.fn(() => ({
      test: "test data"
    }));

    const inst = renderer
      .create(<StatusBadgeGroup visibleBadges={badges} hiddenBadges={badges} />)
      .getInstance();

    inst.elementHovered({});
    expect(inst.state).toEqual({ isOpen: true, test: "test data" });
  });

  it("should NOT try to open tooltip on mouse enter or touch when it is already opened", () => {
    Tooltip.getDimensionsFromEvent = jest.fn(() => ({
      test: "test data"
    }));

    const inst = renderer
      .create(<StatusBadgeGroup visibleBadges={badges} hiddenBadges={badges} />)
      .getInstance();

    inst.elementHovered({});
    const openState = inst.state;
    inst.elementHovered({});
    expect(inst.state).toEqual(openState);
  });

  it("should do clean-up before unmount", () => {
    const mockRemoveListener = jest.fn();
    document.body.removeEventListener = mockRemoveListener;

    const el = renderer.create(
      <StatusBadgeGroup visibleBadges={badges} hiddenBadges={badges} />
    );

    el.unmount();

    expect(mockRemoveListener).toHaveBeenCalled();
  });
});
