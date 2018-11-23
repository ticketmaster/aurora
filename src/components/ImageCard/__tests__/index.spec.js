import React from "react";
import renderer from "react-test-renderer";

import ImageCard from "../index";

describe("ImageCard", () => {
  const title = <ImageCard.Title>Title</ImageCard.Title>;
  const subTitle = <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>;
  const children = <div>Extra content</div>;

  it("renders standard card", () => {
    const component = renderer.create(
      <ImageCard src="http://localhost/img.png" alt="image" title="image" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with title & subtitle", () => {
    const component = renderer.create(
      <ImageCard
        src="http://localhost/img.png"
        cardTitle={title}
        cardSubtitle={subTitle}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with title & subtitle, extra content", () => {
    const component = renderer.create(
      <ImageCard
        src="http://localhost/img.png"
        cardTitle={title}
        cardSubtitle={subTitle}
      >
        {children}
      </ImageCard>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with custom image", () => {
    const image = <svg />;
    const component = renderer.create(
      <ImageCard image={image} cardTitle={title} cardSubtitle={subTitle}>
        {children}
      </ImageCard>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders type = half", () => {
    const component = renderer.create(
      <ImageCard
        type="half"
        src="http://localhost/img.png"
        cardTitle={title}
        cardSubtitle={subTitle}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with custom props", () => {
    const component = renderer.create(
      <ImageCard
        src="http://localhost/img.png"
        cardTitle={title}
        overlayProps={{ style: { display: "none" } }}
        containerProps={{ style: { display: "none" } }}
        captionContainerProps={{ style: { display: "none" } }}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with additional content when `cardTitle` and `cardSubtitle` prop values are not provided (old API support)", () => {
    const component = renderer.create(
      <ImageCard src="http://localhost/img.png">
        {title}
        {subTitle}
        {children}
      </ImageCard>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
