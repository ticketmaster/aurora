import React from "react";
import { render, Simulate } from "react-testing-library";

import listItems from "../../../../catalog/pages/listRow/mock";
import ListContainer from "../Container";

describe("<ListContainer />", () => {
  it("renders ListContainer correctly", () => {
    const { container } = render(<ListContainer listItems={listItems} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("expands the listRow when clicked on expand button", () => {
    const { container } = render(<ListContainer listItems={listItems} />);
    Simulate.click(container.querySelector(".expandOrCollapse"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("collapses the listRow when clicked on collapse button", () => {
    const { container } = render(<ListContainer listItems={listItems} />);
    Simulate.click(container.querySelector(".expandOrCollapse"));
    Simulate.click(container.querySelector(".expandOrCollapse"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("open the bottomSheet for the row when clicked on overflow button", () => {
    const { container } = render(<ListContainer listItems={listItems} />);
    Simulate.click(container.querySelector(".moreInfo"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
