import React from "react";
import renderer from "react-test-renderer";

import LinkCta from "../LinkCta";

describe("LinkCta", () => {
  it("renders a default LinkCta", () => {
    expect(
      renderer
        .create(<LinkCta href="http://localhost/">I am a link</LinkCta>)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders a button when only onclick is provided", () => {
    expect(
      renderer
        .create(<LinkCta onClick={() => {}}>I am a link</LinkCta>)
        .toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });

  it("renders a span when no href or onClick provided", () => {
    expect(
      renderer.create(<LinkCta>I am a link</LinkCta>).toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });
});
