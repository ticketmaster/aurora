import React from "react";
import renderer from "react-test-renderer";

import WarningIcon from "../Warning";

describe("<WarningIcon />", () => {
  const children = <title>Warning Icon</title>;

  it("renders correctly", () => {
    const component = renderer.create(
      <WarningIcon width={36} height={36}>
        {children}
      </WarningIcon>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
