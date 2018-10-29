import React from "react";
import renderer from "react-test-renderer";

import { ActionBar, BottomActionBar } from "../index.styles";

describe("<ActionBar />", () => {
  it("should omit shadow and gutters", () => {
    const wrapper = renderer.create(
      <ActionBar shadow={false} gutters={false} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should add shadow and gutters", () => {
    const wrapper = renderer.create(<ActionBar shadow gutters />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("<BottomActionBar />", () => {
  it("should omit shadow and gutters", () => {
    const wrapper = renderer.create(
      <BottomActionBar shadow={false} gutters={false} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should add shadow and gutters", () => {
    const wrapper = renderer.create(<BottomActionBar shadow gutters />);

    expect(wrapper).toMatchSnapshot();
  });
});
