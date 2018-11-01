import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { StatusBadgeGroup } from "../";
import Tooltip from "../../Tooltip";

const badges = [
  { label: "error", color: "#d3d3d3" },
  { label: "caution", color: "#f0f0f0" }
];

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

  it("mouseLeave should set state to isOpen: false", () => {
    const setStateMock = jest.fn();
    const instance = renderer
      .create(
        <StatusBadgeGroup
          variant="dark"
          visibleBadges={badges}
          hiddenBadges={badges}
        />
      )
      .getInstance();

    instance.setState = setStateMock;
    instance.mouseLeave();

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith({
      isOpen: false
    });
  });

  it("elementHovered should set state to isOpen: true and position data", () => {
    const setStateMock = jest.fn();
    Tooltip.getDimensionsFromEvent = jest.fn(() => ({
      test: "test data"
    }));
    const instance = renderer
      .create(
        <StatusBadgeGroup
          variant="dark"
          visibleBadges={badges}
          hiddenBadges={badges}
        />
      )
      .getInstance();

    instance.setState = setStateMock;
    instance.elementHovered();

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(Tooltip.getDimensionsFromEvent).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith({
      isOpen: true,
      test: "test data"
    });
  });
});
