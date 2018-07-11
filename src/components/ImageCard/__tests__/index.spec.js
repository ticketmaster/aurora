import React from "react";
import renderer from "react-test-renderer";

import ImageCard from "../index";

describe("ImageCard", () => {
  it("renders standard card", () => {
    const component = renderer.create(
      <ImageCard src="http://localhost/img.png" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with title & subtitle", () => {
    const component = renderer.create(
      <ImageCard
        src="http://localhost/img.png"
        title={<ImageCard.Title>Title</ImageCard.Title>}
        subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with title & subtitle, extra content", () => {
    const component = renderer.create(
      <ImageCard
        src="http://localhost/img.png"
        title={<ImageCard.Title>Title</ImageCard.Title>}
        subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
      >
        <div>Extra content</div>
      </ImageCard>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with custom image", () => {
    const image = <svg />;
    const component = renderer.create(
      <ImageCard
        image={image}
        title={<ImageCard.Title>Title</ImageCard.Title>}
        subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
      >
        <div>Extra content</div>
      </ImageCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders type = half", () => {
    const component = renderer.create(
      <ImageCard
        type="half"
        src="http://localhost/img.png"
        title={<ImageCard.Title>Title</ImageCard.Title>}
        subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
