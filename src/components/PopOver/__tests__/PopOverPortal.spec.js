import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Portal from "../PopOverPortal";

describe("PopOverPortal", () => {
  let getTimeMock;
  beforeEach(() => {
    getTimeMock = jest.fn(() => 1234);
    global.Date = jest.fn(() => ({ getTime: getTimeMock }));
  });

  it("should match snapshot", () => {
    const component = renderer.create(<Portal>test</Portal>).getInstance();

    const result = component.render();

    expect(result).toMatchSnapshot();
    expect(getTimeMock).toHaveBeenCalledTimes(1);
  });

  it("componentWillUnmount should call remove child", () => {
    const spy = jest.spyOn(global.window.document.body, "removeChild");
    const tree = renderer.create(<Portal>test</Portal>).getInstance();

    tree.componentWillUnmount();

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });

  it("componentWillMount should not call create element when body is undefined", () => {
    const spy = jest.spyOn(global.window.document, "createElement");
    const tree = renderer.create(<Portal>test</Portal>).getInstance();

    Object.defineProperty(global.window.document, "body", {
      value: null,
      writable: true
    });

    tree.componentDidMount();

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
