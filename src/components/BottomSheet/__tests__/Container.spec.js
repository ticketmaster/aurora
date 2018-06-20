import React from "react";
import { render, Simulate } from "react-testing-library";

import BottomSheetContainer from "../Container";

const mockfn = jest.fn();

describe("<BottomSheetContainer />", () => {
  it("renders BottomSheet Container correctly", () => {
    const { container } = render(
      <BottomSheetContainer visible onClose={mockfn}>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheetContainer>
    );

    Simulate.click(container.getElementsByTagName("button"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders BottomSheet Container correctly with visibility turned off", () => {
    const { container } = render(
      <BottomSheetContainer visible={false} onClose={mockfn}>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheetContainer>
    );

    Simulate.click(container.querySelector(".cancel"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Invokes the onClose function in BottomSheet on clicking cancel", () => {
    const { container } = render(
      <BottomSheetContainer visible onClose={mockfn}>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </BottomSheetContainer>
    );
    Simulate.click(container.querySelector(".cancel"));
    expect(mockfn).toBeCalled();
  });
});
