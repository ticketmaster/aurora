/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";

import { DownIcon } from "../";

describe("DownIcon", () => {
  const children = <title>Down Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(<DownIcon>{children}</DownIcon>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders large correctly", () => {
    const component = renderer.create(
      <DownIcon size="large">{children}</DownIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
