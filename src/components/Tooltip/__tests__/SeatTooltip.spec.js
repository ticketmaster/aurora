import React from "react";
import renderer from "react-test-renderer";

import Tooltip from "../index";
import SeatTooltip from "../SeatTooltip";

jest.mock("../../PopOver/PopOverPortal", () => ({ children }) => children);

jest.mock("react-transition-group", () => ({
  CSSTransition: ({ children }) => children
}));

describe("SeatTooltip", () => {
  it("should match snapshot when no children and dark", () => {
    const tree = renderer
      .create(<SeatTooltip row={5} section="" seat={25} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when small and dark", () => {
    const tree = renderer
      .create(
        <SeatTooltip size="small" variant="dark" row={5} section="B" seat={25}>
          <div>test</div>
        </SeatTooltip>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when has children", () => {
    const tree = renderer
      .create(
        <SeatTooltip row={5} section="B" seat={25}>
          <div>test</div>
        </SeatTooltip>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("getDimensionsFromEvent should call Tooltip.getDimensionsFromEvent and directly return the result", () => {
    const mockGetDimensions = jest.fn(() => ({ x: 5, y: 10 }));
    Tooltip.getDimensionsFromEvent = mockGetDimensions;

    SeatTooltip.getDimensionsFromEvent("hello");

    expect(mockGetDimensions).toHaveBeenCalledTimes(1);
    expect(mockGetDimensions).toHaveBeenCalledWith("hello", undefined);
    expect(SeatTooltip.getDimensionsFromEvent("hello")).toEqual({
      x: 5,
      y: 10
    });
  });
});
