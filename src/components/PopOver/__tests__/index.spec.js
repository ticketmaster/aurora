import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import PopOver from "..";

describe("PopOver", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<PopOver />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("setDimensions should not call setState and return false", () => {
    const setStateMock = jest.fn();
    const tree = renderer.create(<PopOver isVisible />).getInstance();

    tree.setState = setStateMock;
    tree.setDimensions();

    expect(setStateMock).toHaveBeenCalledTimes(0);
    expect(tree.setDimensions()).toBeFalsy();
  });

  it("setDimensions should not call setState and return false when pop over dimensions are 0, 0 pop over isn ot visible", () => {
    const setStateMock = jest.fn();
    const tree = renderer.create(<PopOver />).getInstance();

    tree.setState({ width: 100, height: 100 });
    tree.myRef = {
      current: {
        clientWidth: 0,
        clientHeight: 0
      }
    };

    tree.setState = setStateMock;
    tree.setDimensions();

    expect(setStateMock).toHaveBeenCalledTimes(0);
    expect(tree.setDimensions()).toBeFalsy();
  });

  it("componentDidUpdate should call setDimensions", () => {
    const setDimensionsMock = jest.fn();
    const tree = renderer.create(<PopOver />).getInstance();

    tree.setDimensions = setDimensionsMock;
    tree.myRef = {
      current: {}
    };
    tree.componentDidUpdate();

    expect(setDimensionsMock).toHaveBeenCalledTimes(1);
  });

  it("getDerivedStateFromProps should reset width and height", () => {
    expect(PopOver.getDerivedStateFromProps({ isVisible: true })).toBe(null);
  });
  it("getDerivedStateFromProps should return null", () => {
    expect(PopOver.getDerivedStateFromProps({ isVisible: false })).toEqual({
      width: 0,
      height: 0
    });
  });

  describe("getDimensionsFromEvent", () => {
    const event = {
      clientX: 100,
      currentTarget: {
        offsetTop: 20,
        clientHeight: 1000
      }
    };
    const wrapper = {
      offsetTop: 50,
      clientHeight: 200,
      offsetLeft: 100,
      clientWidth: 300
    };
    it("without wrapper", () => {
      expect(PopOver.getDimensionsFromEvent(event)).toEqual({
        mouseX: 100,
        elTop: 20,
        elBottom: 1020,
        offsetTop: 0,
        clientHeight: 100000,
        offsetLeft: 0,
        clientWidth: 100000
      });
    });

    it("plus wrapper", () => {
      expect(PopOver.getDimensionsFromEvent(event, wrapper)).toEqual({
        mouseX: 100,
        elTop: 20,
        elBottom: 1020,
        offsetTop: 50,
        clientHeight: 200,
        offsetLeft: 100,
        clientWidth: 300
      });
    });
  });

  describe("when define global window", () => {
    it("setDimensions should call setState and return true", () => {
      Object.defineProperty(
        global.window.document.documentElement,
        "clientHeight",
        {
          value: 1000,
          writable: true
        }
      );
      Object.defineProperty(
        global.window.document.documentElement,
        "clientWidth",
        {
          value: 1000,
          writable: true
        }
      );
      Object.defineProperty(
        global.window.document.documentElement,
        "scrollTop",
        {
          value: 100,
          writable: true
        }
      );
      const setStateMock = jest.fn();
      const tree = renderer.create(<PopOver isVisible />).getInstance();

      tree.setState = setStateMock;
      tree.myRef = {
        current: {
          clientWidth: 200,
          clientHeight: 200
        }
      };
      tree.setDimensions();

      expect(setStateMock).toHaveBeenCalledTimes(1);
      expect(setStateMock).toHaveBeenCalledWith({
        windowScroll: 100,
        windowWidth: 1000,
        windowHeight: 1000,
        width: 200,
        height: 200
      });
      expect(tree.setDimensions()).toBeTruthy();
    });
  });
});
