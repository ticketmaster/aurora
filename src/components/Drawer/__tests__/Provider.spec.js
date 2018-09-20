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

  it("calls window scroll when closed", () => {
    window.scrollTo = jest.fn();
    const { getByTestId } = render(
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
    Simulate.click(getByTestId("button"));

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("calls does not  call window scroll with children change", () => {
    window.scrollTo = jest.fn();
    const { getByTestId } = render(<MockComponent />);

    Simulate.click(getByTestId("button"));
    Simulate.click(getByTestId("button"));

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});

class MockComponent extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <DrawerProvider>
        <div>
          <Consumer>
            {() => (
              <button
                data-testid="button"
                onClick={() =>
                  this.setState(({ count }) => ({ count: count + 1 }))
                }
              >
                ClickMe!
              </button>
            )}
          </Consumer>
          Content {this.state.count}
        </div>
      </DrawerProvider>
    );
  }
}
