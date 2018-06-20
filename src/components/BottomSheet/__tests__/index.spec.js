import React from "react";
import { render, Simulate } from "react-testing-library";

import BottomSheet from "../";

const mockfn = jest.fn();

describe("<BottomSheet />", () => {
  it("renders BottomSheet Container correctly", () => {
    const { container, unmount } = render(
      <BottomSheet visible onCloseRequest={mockfn}>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheet>
    );
    unmount();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("Calls the onClose function in BottomSheet on clicking cancel", () => {
    const { container } = render(
      <BottomSheet visible onCloseRequest={mockfn}>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheet>
    );
    Simulate.click(container.querySelector(".cancel"));
    expect(mockfn).toBeCalled();
  });
});
