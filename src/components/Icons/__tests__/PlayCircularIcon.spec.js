import React from "react";
import renderer from "react-test-renderer";

import { PlayCircularIcon } from "../";

describe("PlayCircularIcon", () => {
  const children = <title>Circular play icon</title>;

  it("renders correctly with default props", () => {
    const component = renderer.create(<PlayCircularIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when passed children", () => {
    const component = renderer.create(
      <PlayCircularIcon>{children}</PlayCircularIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when passed a size prop", () => {
    const component = renderer.create(<PlayCircularIcon size={24} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when passed a circleColor prop", () => {
    const component = renderer.create(
      <PlayCircularIcon circleColor="transparent" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when passed an arrowColor prop", () => {
    const component = renderer.create(<PlayCircularIcon arrowColor="black" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
