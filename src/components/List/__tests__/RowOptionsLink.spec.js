import React from "react";
import renderer from "react-test-renderer";
import RowOptionsLink from "../RowOptionsLink";

describe("<RowOptionsLink />", () => {
  it("renders RowOptionsLink", () => {
    const component = renderer.create(<RowOptionsLink variant="withLink" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
