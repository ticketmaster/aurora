import React from "react";
import renderer from "react-test-renderer";

import HeaderWithImage from "../WithImage";
import Heading from "../Heading";
import Column from "../../Grid/Column";

describe("WithImage", () => {
  it("renders header with image", () =>
    expect(
      renderer
        .create(
          <HeaderWithImage>
            <Column medium={8}>
              <Heading level={1}>
                <Heading.Strong>Generic</Heading.Strong>{" "}
                <Heading.Span>Header</Heading.Span>
              </Heading>
            </Column>
            <Column medium={4}>
              <HeaderWithImage.ImageWrapper>
                <img
                  src="https://placekitten.com/g/400/242"
                  alt="place holder"
                />
              </HeaderWithImage.ImageWrapper>
            </Column>
          </HeaderWithImage>
        )
        .toJSON()
    ).toMatchSnapshot());
});
