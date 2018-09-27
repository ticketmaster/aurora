import React from "react";
import { render, Simulate } from "react-testing-library";
import RowToggler from "../RowToggler";

describe("<RowToggler />", () => {
  it("should render without errors when open", () => {
    const { container } = render(<RowToggler isOpen index={1} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render without errors when closed", () => {
    const { container } = render(<RowToggler isOpen={false} index={3} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call the expand callback with correct params", () => {
    const expandSpy = jest.fn();

    const { container } = render(
      <RowToggler isOpen={false} index={2} onExpandItem={expandSpy} />
    );

    Simulate.click(container.firstChild);

    expect(expandSpy).toHaveBeenCalledWith({ index: 2 });
  });

  it("should call the collapse callback with correct params", () => {
    const collapseSpy = jest.fn();

    const { container } = render(
      <RowToggler isOpen index={3} onCollapseItem={collapseSpy} />
    );

    Simulate.click(container.firstChild);

    expect(collapseSpy).toHaveBeenCalledWith({ index: 3 });
  });
});
