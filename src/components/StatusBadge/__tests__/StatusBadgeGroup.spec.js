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

  it("call mouse leave event should call mouseLeave function and call setState", () => {
    const spy = jest.spyOn(StatusBadgeGroup.prototype, "mouseLeave");
    const spyState = jest.spyOn(StatusBadgeGroup.prototype, "setState");
    const element = renderer.create(
      <StatusBadgeGroup
        variant="dark"
        visibleBadges={badges}
        hiddenBadges={badges}
      />
    );

    const hiddenBadgesLabel = element.root.findByProps({ children: "+2 more" });
    hiddenBadgesLabel.props.onMouseLeave();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledWith({
      isOpen: false
    });
  });

  it("call mouse enter event should call elementHovered function and call setState", () => {
    const spy = jest.spyOn(StatusBadgeGroup.prototype, "elementHovered");
    const spyState = jest
      .spyOn(StatusBadgeGroup.prototype, "setState")
      .mockImplementation(() => {});
    Tooltip.getDimensionsFromEvent = jest.fn(() => ({
      test: "test data"
    }));
    const element = renderer.create(
      <StatusBadgeGroup
        variant="dark"
        visibleBadges={badges}
        hiddenBadges={badges}
      />
    );

    spyState.mockClear();

    const hiddenBadgesLabel = element.root.findByProps({ children: "+2 more" });
    hiddenBadgesLabel.props.onMouseEnter();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledWith({
      isOpen: true,
      test: "test data"
    });
  });
});
