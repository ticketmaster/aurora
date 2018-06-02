import React from "react";
import renderer from "react-test-renderer";
import { render, Simulate } from "react-testing-library";

import { RatingBadge } from "../";

describe("RatingBadge />", () => {
  it("renders standard RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        variant="standard"
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard disabled RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        variant="standard"
        disabled
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        variant="outline"
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline disabled RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        variant="outline"
        disabled
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        variant="transparent"
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent disabled RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        variant="transparent"
        disabled
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders link RatingBadge correctly", () => {
    const component = renderer.create(
      <RatingBadge
        href="/"
        variant="standard"
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
      >
        RatingBadge
      </RatingBadge>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should invoke an onClick handler when passed", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <RatingBadge
        variant="standard"
        ratingValue="4.8"
        bestRating="5"
        ratingCount="20"
        onClick={onClick}
      >
        RatingBadge
      </RatingBadge>
    );

    Simulate.click(getByText("RatingBadge"));
    expect(onClick).toHaveBeenCalled();
  });
});
