import React from "react";
import renderer from "react-test-renderer";

import Link from "../Link";

describe("Link", () => {
  it("renders a default link", () => {
    expect(
      renderer
        .create(<Link href="http://localhost/">I am a link</Link>)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders a button when only onclick is provided", () => {
    expect(
      renderer.create(<Link onClick={() => {}}>I am a link</Link>).toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });

  it("renders a span when no href or onClick provided", () => {
    expect(
      renderer.create(<Link>I am a link</Link>).toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });
});
