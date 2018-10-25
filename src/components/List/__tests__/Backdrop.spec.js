import React from "react";
import { render, fireEvent } from "react-testing-library";

import Backdrop from "../Backdrop";
import BottomSheet from "../../BottomSheet";

jest.mock("../../List/Context", () => ({
  ItemContainerConsumer: jest
    .fn()
    .mockImplementation(({ children }) =>
      children({ onCloseRequest: jest.fn() })
    )
}));

describe("<Backdrop />", () => {
  it("renders Backdrop correctly", () => {
    const { container } = render(
      <Backdrop>
        <BottomSheet>
          <div>Europe</div>
          <div>Africa</div>
          <div>Asias</div>
        </BottomSheet>
      </Backdrop>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls the onKeyPress function on pressing the ESC key", () => {
    const { container } = render(
      <Backdrop>
        <BottomSheet>
          <div>Europe</div>
          <div>Africa</div>
          <div>Asias</div>
        </BottomSheet>
      </Backdrop>
    );

    fireEvent.keyDown(global.document, {
      key: "Escape",
      keyCode: 27
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls the handleOutsideClick function on clicking overlay", () => {
    const { container } = render(
      <Backdrop data-testid="container--overlay">
        <div>Europe</div>
      </Backdrop>
    );

    fireEvent.click(global.document);
    expect(container.firstChild).toMatchSnapshot();
  });
});
