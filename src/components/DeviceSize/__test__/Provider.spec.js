/* global window */
import React from "react";
import { render } from "react-testing-library";

import Provider from "../Provider";
import { Consumer } from "../Context";

describe("DeviceSize", () => {
  describe("with fallbacks", () => {
    it("calls fallback function", () => {
      const fallbackDetection = jest.fn();
      render(
        <Provider fallbackDetection={fallbackDetection}>
          <Consumer>{() => "content"}</Consumer>
        </Provider>
      );

      expect(fallbackDetection).toHaveBeenCalled();
    });
  });

  describe("with matchMedia", () => {
    const addListener = jest.fn();
    const removeListener = jest.fn();
    const matchMedia = jest.fn(() => ({ addListener, removeListener }));
    beforeEach(() => {
      matchMedia.mockClear();
      addListener.mockClear();
      removeListener.mockClear();

      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: matchMedia
      });
    });

    it("adds mediaqueries to matchMedia", () => {
      render(
        <Provider>
          <Consumer>{() => "content"}</Consumer>
        </Provider>
      );

      expect(matchMedia).toHaveBeenCalled();
    });

    it("does not add listeners when cssOnly is true", () => {
      render(
        <Provider cssOnly>
          <Consumer>{() => "content"}</Consumer>
        </Provider>
      );

      expect(matchMedia).not.toHaveBeenCalled();
    });

    it("adds listeners to matchMedia", () => {
      render(
        <Provider>
          <Consumer>{() => "content"}</Consumer>
        </Provider>
      );

      expect(addListener).toHaveBeenCalled();
    });

    it("cleans up when unmounted", () => {
      const { unmount } = render(
        <Provider>
          <Consumer>{() => "content"}</Consumer>
        </Provider>
      );

      unmount();

      expect(removeListener).toHaveBeenCalled();
    });
  });

  describe("getDerivedStateFromProps()", () => {
    it("should use fallbackDetection data to populate derived state", () => {
      const fallbackDevices = { isSmall: false, isLarge: true };
      const fallbackDetection = jest
        .fn()
        .mockImplementation(() => fallbackDevices);

      const derivedState = Provider.getDerivedStateFromProps(
        {
          fallbackDetection
        },
        {
          isInitialized: false
        }
      );

      expect(fallbackDetection).toHaveBeenCalled();
      expect(derivedState).toEqual(fallbackDevices);
    });
  });
});
