import React from "react";
import renderer from "react-test-renderer";
import {
  DayTile,
  DayTileDate,
  DayTileItem,
  DayTileButton,
  DayTileMoreButton,
  DayTileOverflowButton
} from "../";

describe("CalendarView", () => {
  it("should render without errors", () =>
    expect(
      renderer
        .create(
          <DayTile>
            <DayTile.Header>
              <DayTileDate accent>10</DayTileDate>
            </DayTile.Header>
            <DayTileItem.Group>
              <DayTileItem>
                <DayTileItem.Header>
                  <DayTileOverflowButton
                    aria-label="More Info"
                    onClick={() => {}}
                  />
                </DayTileItem.Header>
                <DayTileItem.Content>
                  <DayTileItem.ContentColumn>
                    <DayTileItem.Title>
                      Henderson, NV — Sunset Station Outdoor Amphitheater
                    </DayTileItem.Title>
                    <DayTileItem.SubTitle>
                      On Sale Starts Soon
                    </DayTileItem.SubTitle>
                  </DayTileItem.ContentColumn>
                </DayTileItem.Content>
                <DayTileItem.Footer>
                  <DayTileButton.Group>
                    <DayTileButton href="#">2:00 pm</DayTileButton>
                    <DayTileButton href="#">6:00 pm</DayTileButton>
                  </DayTileButton.Group>
                  <DayTileMoreButton onClick={() => {}}>
                    +4 More Times
                  </DayTileMoreButton>
                </DayTileItem.Footer>
              </DayTileItem>
              <DayTileItem>
                <DayTileItem.Header>
                  <DayTileOverflowButton
                    aria-label="More Info"
                    onClick={() => {}}
                  />
                </DayTileItem.Header>
                <DayTileItem.Content>
                  <DayTileItem.ContentColumn>
                    <DayTileItem.Title>
                      Henderson, NV — Sunset Station Outdoor Amphitheater
                    </DayTileItem.Title>
                  </DayTileItem.ContentColumn>
                </DayTileItem.Content>
                <DayTileItem.Footer>
                  <DayTileButton.Group>
                    <DayTileButton href="#">2:00 pm</DayTileButton>
                    <DayTileButton href="#">6:00 pm</DayTileButton>
                  </DayTileButton.Group>
                  <DayTileMoreButton onClick={() => {}}>
                    +4 More Times
                  </DayTileMoreButton>
                </DayTileItem.Footer>
              </DayTileItem>
            </DayTileItem.Group>
          </DayTile>
        )
        .toJSON()
    ).toMatchSnapshot());
});
