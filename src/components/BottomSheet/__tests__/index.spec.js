import React from "react";
import { render, Simulate } from "react-testing-library";

import BottomSheet from "../";

describe("<BottomSheet />", () => {
  it("renders BottomSheet Container correctly", () => {
    const { container } = render(
      <BottomSheet>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheet>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("removes the BottomSheet on clicking cancel", () => {
    const { container } = render(
      <BottomSheet>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheet>
    );
    Simulate.click(container.querySelector(".button--cancel"));
    expect(container.innerHTML).toMatchSnapshot();
  });
});
