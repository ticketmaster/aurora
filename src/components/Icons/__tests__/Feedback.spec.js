/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { FeedbackIcon } from "../";

describe("FeedbackIcon", () => {
  const children = <title>Feedback Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<FeedbackIcon>{children}</FeedbackIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
