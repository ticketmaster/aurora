import React from "react";
import renderer from "react-test-renderer";

import Drawer from "../index";

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
});
