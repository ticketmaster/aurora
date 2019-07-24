import React from "react";
import renderer from "react-test-renderer";

import Drawer from "../index";
import Gradient from "../../Gradient";

jest.mock("../Drawer.styles", () => ({
  DrawerContainer: "DrawerContainer",
  DrawerContent: "DrawerContent",
  HeaderContent: "HeaderContent",
  CloseButton: "CloseButton"
}));

jest.mock("../../Gradient", () => "Gradient");

describe("Drawer", () => {
  it("renders default drawer", () => {
    expect(renderer.create(<Drawer />).toJSON()).toMatchSnapshot();
  });

  it("renders multiple child elements", () => {
    expect(
      renderer
        .create(
          <Drawer>
            <span>Content</span>
            <span>Content</span>
            <span>Content</span>
          </Drawer>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("calls a function as child", () => {
    const children = jest.fn(() => "Content");
    renderer.create(<Drawer>{children}</Drawer>);

    expect(children).toHaveBeenCalled();
  });

  it("renders string header header", () => {
    expect(
      renderer.create(<Drawer header="Some Title">Content</Drawer>).toJSON()
    ).toMatchSnapshot();
  });

  it("renders header elements", () => {
    expect(
      renderer
        .create(
          <Drawer header={<span>Some Title Element</span>}>
            <span>Content</span>
          </Drawer>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("calls header as function", () => {
    const header = jest.fn(() => "Header Content");
    renderer.create(<Drawer header={header}>Content</Drawer>);

    expect(header).toHaveBeenCalled();
  });

  it("renders Header WITH Gradient by default", () => {
    const header = "Header";
    const wrapper = renderer.create(<Drawer header={header}>Content</Drawer>);

    expect(wrapper.root.findAllByType(Gradient)).toHaveLength(1);
  });

  it("renders Header WITH Gradient when the 'withSpotLight' is true", () => {
    const header = "Header";
    const wrapper = renderer.create(
      <Drawer withSpotLight header={header}>
        Content
      </Drawer>
    );

    expect(wrapper.root.findAllByType(Gradient)).toHaveLength(1);
  });

  it("renders Header WITHOUT Gradient when 'withSpotLight' is false", () => {
    const header = "Header";
    const wrapper = renderer.create(
      <Drawer withSpotLight={false} header={header}>
        Content
      </Drawer>
    );

    expect(wrapper.root.findAllByType(Gradient)).toHaveLength(0);
  });
});
