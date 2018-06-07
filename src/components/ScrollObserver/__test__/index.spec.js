/* global window */
import React from "react";
import { render } from "react-testing-library";

import Provider from "../Provider";
import Consumer from "../Consumer";

describe("ScrollObserver", () => {
  const addEventListener = jest.fn();
  const removeEventListener = jest.fn();
  beforeEach(() => {
    addEventListener.mockClear();
    removeEventListener.mockClear();
    Object.defineProperty(window, "addEventListener", {
      writable: true,
      value: addEventListener
    });
    Object.defineProperty(window, "removeEventListener", {
      writable: true,
      value: removeEventListener
    });
  });

  it("subscribes to scroll events on mount", () => {
    const { unmount } = render(
      <Provider>
        <Consumer>{() => {}}</Consumer>
      </Provider>
    );

    expect(addEventListener).toHaveBeenLastCalledWith(
      "scroll",
      expect.anything(),
      { passive: true }
    );

    unmount();
  });

  it("does not subscribe to scroll events on mount without `window`", () => {
    const { unmount } = render(
      <Provider hasWindow={false}>
        <Consumer>{() => {}}</Consumer>
      </Provider>
    );

    expect(addEventListener).not.toHaveBeenCalledWith("scroll");

    unmount();
  });

  it("unsubscribes from scroll events on unmount", () => {
    const { unmount } = render(
      <Provider>
        <Consumer />
      </Provider>
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalled();
  });
});
