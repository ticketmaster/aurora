import React from "react";
import { render, Simulate } from "react-testing-library";

import { ModalActionBar } from "../DefaultActionBar";

describe("<DefaultActionBar />", () => {
  it("should render without errors", () => {
    const modal = {
      closeModal: () => {}
    };

    const { container } = render(
      <ModalActionBar
        iconButtonProps={{ "data-testid": "close-button" }}
        modal={modal}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should call closeModal on the close button click", () => {
    const clickSpy = jest.fn();

    const modal = {
      closeModal: clickSpy
    };

    const { getByTestId } = render(
      <ModalActionBar
        iconButtonProps={{ "data-testid": "close-button" }}
        modal={modal}
      />
    );

    Simulate.click(getByTestId("close-button"));

    expect(clickSpy).toHaveBeenCalled();
  });
});
