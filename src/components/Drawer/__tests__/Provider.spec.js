/* global window: true */
import React from "react";
import { render, Simulate } from "react-testing-library";

import DrawerProvider from "../Provider";
import { Consumer } from "../Context";

describe("DrawerProvider", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
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
  it("renders child elements", () => {
    const { container } = render(
      <DrawerProvider>
        <div>Content</div>
      </DrawerProvider>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("sets content", () => {
    const { getByTestId, container } = render(
      <DrawerProvider>
        <div>
          <Consumer>
            {({ setContent }) => (
              <button
                data-testid="button"
                onClick={() => {
                  setContent(
                    <div data-testid="drawer-content">Drawer Content</div>
                  );
                }}
              >
                ClickMe!
              </button>
            )}
          </Consumer>
          Content
        </div>
      </DrawerProvider>
    );

    Simulate.click(getByTestId("button"));

    expect(container).toMatchSnapshot();
  });

  it("toggles drawer", () => {
    const { getByTestId, container } = render(
      <DrawerProvider>
        <div>
          <Consumer>
            {({ setContent, toggleDrawer }) => (
              <button
                data-testid="button"
                onClick={() => {
                  setContent(
                    <div data-testid="drawer-content">Drawer Content</div>
                  );
                  toggleDrawer();
                }}
              >
                ClickMe!
              </button>
            )}
          </Consumer>
          Content
        </div>
      </DrawerProvider>
    );

    Simulate.click(getByTestId("button"));

    expect(container).toMatchSnapshot();
  });
});
