import React from "react";
import { render, cleanup } from "react-testing-library";

import Provider from "../Provider";
import { Consumer } from "../Context";

describe("DeviceConnectionProvider", () => {
  const addEventListener = jest.fn();
  const removeEventListener = jest.fn();
  const createConnection = jest.fn((data = {}) => ({
    ...data,
    addEventListener,
    removeEventListener
  }));

  beforeEach(() => {
    createConnection.mockClear();
    addEventListener.mockClear();
    removeEventListener.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  it("should pass the effectiveType to the Consumer's children", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ effectiveType: "4g" })
    });

    const { container } = render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should listen for a connection change once mounted when the effectiveType API is available", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ effectiveType: "4g" })
    });

    render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(addEventListener).toHaveBeenCalled();
  });

  it("should pass the type to the Consumer's children", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ type: "2g" })
    });

    const { container } = render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should listen for a connection change once mounted when the type API is available", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ type: "4g" })
    });

    render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(addEventListener).toHaveBeenCalled();
  });

  it("should not listen for a connection change once mounted when if the browser does not support the API", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection()
    });

    render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(addEventListener).not.toHaveBeenCalled();
  });

  it("should remove listener for a connection change once unmounted when the effectiveType API is available", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ effectiveType: "4g" })
    });

    const { unmount } = render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(addEventListener).toHaveBeenCalled();
    unmount();
    expect(removeEventListener).toHaveBeenCalled();
  });

  it("should remove listener for a connection change once unmounted when the type API is available", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ type: "4g" })
    });

    const { unmount } = render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(addEventListener).toHaveBeenCalled();
    unmount();
    expect(removeEventListener).toHaveBeenCalled();
  });

  it("should update when the connection changes", () => {
    Object.defineProperty(global.navigator, "connection", {
      writable: true,
      value: createConnection({ effectiveType: "4g" })
    });

    const { container, rerender } = render(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    Object.defineProperty(global.navigator.connection, "effectiveType", {
      writable: true,
      value: "3g"
    });

    rerender(
      <Provider>
        <Consumer>{val => JSON.stringify(val)}</Consumer>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
