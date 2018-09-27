/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { CalendarIcon } from "../";

describe("CalendarIcon", () => {
  const children = <title>Calendar Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<CalendarIcon>{children}</CalendarIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderer.create(
      <CalendarIcon size="large">{children}</CalendarIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
