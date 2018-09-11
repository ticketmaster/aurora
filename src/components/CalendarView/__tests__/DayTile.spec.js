import React from "react";
import renderer from "react-test-renderer";
import DayTile from "../DayTile";

const DEFAULT_PROPS = {
  dateLabel: "10",
  title: "Henderson, NV — Sunset Station Outdoor Amphitheater",
  subTitle: "On Sale: Fri, 08/17/18 10:00 AM",
  ctaButtons: [
    <DayTile.Button>2:00 pm</DayTile.Button>,
    <DayTile.Button>6:00 pm</DayTile.Button>
  ],
  moreButton: <DayTile.MoreButton>+4 More Times</DayTile.MoreButton>,
  onOverflowClick: () => {},
  withOverflow: true
};

describe("DayTile", () => {
  it("should render without errors", () =>
    expect(
      renderComponent({
        ...DEFAULT_PROPS
      })
    ).toMatchSnapshot());

  function renderComponent(props = {}) {
    return renderer.create(<DayTile {...props} />).toJSON();
  }
});
