import React from "react";
import renderer from "react-test-renderer";

import Typography from "../";
import MOCK_STRING from "../__mocks__/string.mocks";

describe("Typography.H4", () => {
  it("should render default markup when no props are passed", () => {
    expect(
      renderer.create(<Typography.H4>{MOCK_STRING}</Typography.H4>)
    ).toMatchSnapshot();
  });

  it("should render with a custom weight prop", () => {
    expect(
      renderer.create(
        <Typography.H4 weight="semiBold">{MOCK_STRING}</Typography.H4>
      )
    ).toMatchSnapshot();
  });

  it("should render with custom color and variant props", () => {
    expect(
      renderer.create(
        <Typography.H4 color="accent01" variant="dark">
          {MOCK_STRING}
        </Typography.H4>
      )
    ).toMatchSnapshot();
  });

  it("should render with a custom color prop that lacks variants", () => {
    expect(
      renderer.create(
        <Typography.H4 color="brand" variant="">
          {MOCK_STRING}
        </Typography.H4>
      )
    ).toMatchSnapshot();
  });

  it("should render without children", () => {
    expect(renderer.create(<Typography.H4 />)).toMatchSnapshot();
  });
});
