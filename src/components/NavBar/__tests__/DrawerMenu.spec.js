import React from "react";
import renderer from "react-test-renderer";

import MobileMenu from "../DrawerMenu";

describe("MobileMenu", () => {
  it("renders default", () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
  });

  it("accepts children as menu content", () => {
    expect(
      renderComponent({ children: <div>Some Content</div> }).toJSON()
    ).toMatchSnapshot();
  });

  function renderComponent(props = {}, render = renderer.create) {
    return render(<MobileMenu {...props} />);
  }
});
