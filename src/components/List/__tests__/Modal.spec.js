import React from "react";
import { render, Simulate } from "react-testing-library";

import Modal from "../Modal";

describe("<Modal />", () => {
  beforeEach(() => {
    const modalRoot = global.document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    modalRoot.setAttribute("data-testid", "modal-root");
    const body = global.document.querySelector("body");
    body.appendChild(modalRoot);
  });

  afterEach(() => {
    const body = global.document.querySelector("body");
    const modalRoot = global.document.getElementById("modal-root");
    body.removeChild(modalRoot);
  });

  it("renders Modal correctly", () => {
    const { container } = render(
      <Modal>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </Modal>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("removes the Modal on clicking cancel button", () => {
    const { container } = render(
      <Modal>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </Modal>
    );
    Simulate.click(container.querySelector(".button--close"));
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should not display the cancel button", () => {
    const { container } = render(
      <Modal withCloseIcon={false}>
        <div>Europe</div>
        <div>Africa</div>
        <div>Asias</div>
      </Modal>
    );
    expect(container.querySelector(".button--close")).toEqual(null);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
