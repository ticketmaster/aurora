import React from "react";
import renderer from "react-test-renderer";

import HeaderWithImage from "../WithImage";
import Column from "../../Grid/Column";

describe("WithImage", () => {
  it("renders header with image", () =>
    expect(
      renderer
        .create(
          <HeaderWithImage>
            <Column>
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

  it("renders header background image", () =>
    expect(
      renderer
        .create(
          <HeaderWithImage backgroundImage="https://placekitten.com/g/2/2">
            <Column>
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

  it("renders header background image with overlay shadow", () =>
    expect(
      renderer
        .create(
          <HeaderWithImage
            backgroundImage="https://placekitten.com/g/2/2"
            withOverlayShadow
          >
            <Column>
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

  it("renders header background image correctly when a withOverlay prop equaling true is passed", () =>
    expect(
      renderer
        .create(
          <HeaderWithImage
            withOverlay
            backgroundImage="https://placekitten.com/g/2/2"
          >
            <Column>
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

  it("renders header background image correctly when a withUnderlay prop equaling true is passed", () =>
    expect(
      renderer
        .create(
          <HeaderWithImage
            withUnderlay
            backgroundImage="https://placekitten.com/g/2/2"
          >
            <Column>
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
