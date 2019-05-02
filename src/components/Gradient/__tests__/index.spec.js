import React from "react";
import renderer from "react-test-renderer";

import Gradient from "../";
import {
  OVERLAY_DEG_NOT_SPOTLIGHT,
  OVERLAY_STOPS_NOT_SPOTLIGHT,
  OVERLAY_SHADOW_DEG,
  OVERLAY_SHADOW_STOPS,
  SPOTLIGHT_DEG,
  SPOTLIGHT_STOPS
} from "../constants";

describe("Gradient", () => {
  it("renders default", () => {
    const tree = renderer.create(<Gradient />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with overlay gradient", () => {
    const tree = renderer.create(
      <Gradient
        className="gradient--overlay"
        deg={OVERLAY_DEG_NOT_SPOTLIGHT}
        stops={OVERLAY_STOPS_NOT_SPOTLIGHT}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with spotlight elements", () => {
    const tree = renderer.create(
      <Gradient
        className="gradient--spotlight"
        deg={SPOTLIGHT_DEG}
        stops={SPOTLIGHT_STOPS}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with underlay gradient", () => {
    const tree = renderer.create(<Gradient className="gradient--underlay" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with overlay shadow gradient", () => {
    const tree = renderer.create(
      <Gradient
        className="gradient--overlay-shadow"
        deg={OVERLAY_SHADOW_DEG}
        stops={OVERLAY_SHADOW_STOPS}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with an img tag for SEO purposes", () => {
    const tree = renderer.create(
      <Gradient
        imageRef={{}}
        backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders with children", () => {
    const tree = renderer.create(<Gradient>Content</Gradient>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
