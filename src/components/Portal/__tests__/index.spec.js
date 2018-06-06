import React from "react";
import { render } from "react-testing-library";

import Portal from "../index";
import BottomSheet from "../../BottomSheet";

describe("<Portal />", () => {
  beforeEach(() => {
    const modalRoot = global.document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    const body = global.document.querySelector("body");
    body.appendChild(modalRoot);
  });

  afterEach(() => {
    const body = global.document.querySelector("body");
    const modalRoot = global.document.getElementById("modal-root");
    body.removeChild(modalRoot);
  });

  it("renders Portal correctly", () => {
    const { container, unmount } = render(
      <Portal>
        <BottomSheet>
          <div>Europe</div>
          <div>Africa</div>
          <div>Asias</div>
        </BottomSheet>
      </Portal>
    );
    unmount();
    expect(container.innerHTML).toMatchSnapshot();
  });
});
