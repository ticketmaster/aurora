import React from "react";
import renderer from "react-test-renderer";

import BaseText from "../Base";

describe("BaseText", () => {
  it("should render primary text with a div tag in the dark variant by default", () => {
    const component = renderer.create(<BaseText>Text</BaseText>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render secondary text with a div tag in the dark variant when the secondary prop equals true", () => {
    const component = renderer.create(<BaseText secondary>Text</BaseText>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled text with a div tag in the dark variant when the disabled prop equals true", () => {
    const component = renderer.create(<BaseText disabled>Text</BaseText>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a div tag in the light variant when the variant prop equals light", () => {
    const component = renderer.create(
      <BaseText variant="light">Text</BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render secondary text with a div tag in the light variant when the variant prop equals light and the secondary prop equals true", () => {
    const component = renderer.create(
      <BaseText variant="light" secondary>
        Text
      </BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled text with a div tag in the light variant when the variant prop equals light and the disabled prop equals true", () => {
    const component = renderer.create(
      <BaseText variant="light" disabled>
        Text
      </BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a div tag in an accent variant when the variant prop equals accent and a valid accent prop is passed", () => {
    const component = renderer.create(
      <BaseText variant="accent" accent="azure">
        Text
      </BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render secondary text with a div tag in an accent variant when the variant prop equals accent, a valid accent prop is passed, and the secondary prop equals true", () => {
    const component = renderer.create(
      <BaseText variant="accent" accent="azure" secondary>
        Text
      </BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled text with a div tag in an accent variant when the variant prop equals accent, a valid accent prop is passed, and the disabled prop equals true", () => {
    const component = renderer.create(
      <BaseText variant="accent" accent="azure" disabled>
        Text
      </BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a div tag in an accent variant that has only one shade when the variant prop equals accent and a valid accent prop is passed", () => {
    const component = renderer.create(
      <BaseText variant="accent" accent="aquamarine">
        Text
      </BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a tag prop in the dark variant by default", () => {
    const component = renderer.create(<BaseText tag="span">Text</BaseText>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a div tag of the size prop passed in the dark variant by default", () => {
    const component = renderer.create(<BaseText size="giga">Text</BaseText>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a div tag of the weight prop passed in the dark variant by default", () => {
    const component = renderer.create(
      <BaseText weight="semiBold">Text</BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render primary text with a div tag in the dark variant with a className prop when passed by default", () => {
    const component = renderer.create(
      <BaseText className="text--custom">Text</BaseText>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
