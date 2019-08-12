import React from "react";
import renderer from "react-test-renderer";

import PopOver from "..";

jest.mock("../PopOverPortal", () => ({ children }) => children);

jest.mock("react-transition-group", () => ({
  CSSTransition: ({ children }) => children
}));

describe("PopOver", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<PopOver />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visible", () => {
    const tree = renderer.create(<PopOver isVisible />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visible and without borders", () => {
    const tree = renderer.create(<PopOver isVisible noBorders />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("calculatePosition tests", () => {
    const reduce = {
      top: 0,
      bottom: 0
    };
    it("should render viewport left and bottom", () => {
      const position = {
        elBottom: 10,
        elTop: 0,
        offsetTop: 0,
        clientHeight: 1000,
        offsetLeft: 0,
        clientWidth: 500,
        elWidth: 10,
        elLeft: 0
      };
      const dimensions = {
        width: 100,
        windowScroll: 0,
        height: 100,
        windowWidth: 500,
        windowHeight: 400
      };

      const spaceFromMouse = 4;

      expect(
        PopOver.calculatePosition({
          position,
          dimensions,
          reduce,
          spaceFromMouse
        })
      ).toEqual({
        x: 16,
        y: 14
      });
    });

    it("should render viewport left and bottom on wide screen", () => {
      const position = {
        elBottom: 510,
        elTop: 500,
        elLeft: 0,
        elWidth: 10,
        offsetTop: 0,
        clientHeight: 1000,
        offsetLeft: 0,
        clientWidth: 10000
      };

      const dimensions = {
        width: 100,
        windowScroll: 100,
        height: 100,
        windowWidth: 1000,
        windowHeight: 400
      };
      const spaceFromMouse = 4;

      expect(
        PopOver.calculatePosition({
          position,
          dimensions,
          reduce,
          spaceFromMouse
        })
      ).toEqual({
        x: 24,
        y: 496
      });
    });

    it("should position PopOver near toggle to the right", () => {
      const position = {
        elBottom: 510,
        elTop: 500,
        elLeft: 30,
        elWidth: 150,
        offsetTop: 0,
        clientHeight: 1000,
        offsetLeft: 0,
        clientWidth: 1000
      };
      const dimensions = {
        width: 100,
        windowScroll: 100,
        height: 100,
        windowWidth: 1000,
        windowHeight: 400
      };
      const spaceFromMouse = 4;

      expect(
        PopOver.calculatePosition({
          position,
          dimensions,
          reduce,
          inlineWithTarget: true,
          spaceFromMouse
        })
      ).toEqual({
        x: 188,
        y: 600
      });
    });

    it("should position PopOver near toggle to the left", () => {
      const position = {
        elBottom: 510,
        elTop: 500,
        elLeft: 900,
        elWidth: 150,
        offsetTop: 0,
        clientHeight: 1000,
        offsetLeft: 0,
        clientWidth: 1000
      };
      const dimensions = {
        width: 100,
        windowScroll: 100,
        height: 100,
        windowWidth: 1000,
        windowHeight: 400
      };
      const spaceFromMouse = 4;

      expect(
        PopOver.calculatePosition({
          position,
          dimensions,
          reduce,
          inlineWithTarget: true,
          spaceFromMouse
        })
      ).toEqual({
        x: 792,
        y: 600
      });
    });
  });

  it("popoverEnter should calculate position again and set it", () => {
    const setDimensionsMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer.create(<PopOver isVisible />).getInstance();

    tree.setDimensions = setDimensionsMock;
    PopOver.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.popoverEnter();

    expect(setDimensionsMock).toHaveBeenCalledTimes(1);
    expect(calculatePositionMock).toHaveBeenCalledTimes(1);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
  });

  it("popoverEnter should not calculate position again and set old pos values", () => {
    const setDimensionsMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer.create(<PopOver />).getInstance();

    tree.setDimensions = setDimensionsMock;
    PopOver.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.pos = {
      x: 5,
      y: 10
    };
    tree.popoverEnter();

    expect(setDimensionsMock).toHaveBeenCalledTimes(0);
    expect(calculatePositionMock).toHaveBeenCalledTimes(0);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
  });

  it("componentDidUpdate should calculate position again and set it", () => {
    const setDimensionsMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const position = {
      elTop: 20,
      elBottom: 40
    };
    const tree = renderer.create(<PopOver isVisible />).getInstance();

    tree.setDimensions = setDimensionsMock;
    PopOver.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.componentDidUpdate({ position, isVisible: true });

    expect(setDimensionsMock).toHaveBeenCalledTimes(1);
    expect(calculatePositionMock).toHaveBeenCalledTimes(1);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
  });

  it("componentDidUpdate should not do anything if not visible", () => {
    const setDimensionsMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const position = {
      elTop: 20,
      elBottom: 40
    };
    const tree = renderer
      .create(<PopOver isVisible position={position} />)
      .getInstance();

    tree.setDimensions = setDimensionsMock;
    PopOver.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.componentDidUpdate({ position });

    expect(setDimensionsMock).toHaveBeenCalledTimes(0);
    expect(calculatePositionMock).toHaveBeenCalledTimes(0);
    expect(tree.myRef.current.style.top).toEqual(0);
    expect(tree.myRef.current.style.left).toEqual(0);
  });

  it("setDimensions should not call setState and return false", () => {
    const tree = renderer.create(<PopOver isVisible />).getInstance();

    tree.setDimensions();

    expect(tree.setDimensions()).toBeFalsy();
  });

  it("setDimensions should not call setState and return false when pop over dimensions are 0, 0 pop over isn ot visible", () => {
    const tree = renderer.create(<PopOver />).getInstance();

    tree.dimensions.width = 100;
    tree.dimensions.height = 100;
    tree.myRef = {
      current: {
        clientWidth: 0,
        clientHeight: 0
      }
    };
    tree.setDimensions();

    expect(tree.setDimensions()).toBeFalsy();
  });

  describe("getDimensionsFromEvent", () => {
    const event = {
      target: {
        getBoundingClientRect: () => ({
          y: 20,
          height: 1000,
          x: 30,
          width: 150
        })
      }
    };
    const wrapper = {
      getBoundingClientRect: () => ({
        y: 50,
        height: 200,
        x: 100,
        width: 300
      })
    };
    it("without wrapper", () => {
      expect(PopOver.getDimensionsFromEvent(event)).toEqual({
        elTop: 20,
        elLeft: 30,
        elWidth: 150,
        elBottom: 1020,
        offsetTop: 0,
        clientHeight: 100000,
        offsetLeft: 0,
        clientWidth: 100000
      });
    });

    it("plus wrapper", () => {
      expect(PopOver.getDimensionsFromEvent(event, wrapper)).toEqual({
        elTop: 20,
        elLeft: 30,
        elWidth: 150,
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
      const tree = renderer.create(<PopOver isVisible />).getInstance();

      tree.myRef = {
        current: {
          clientWidth: 200,
          clientHeight: 200
        }
      };

      expect(tree.setDimensions()).toBeTruthy();
      expect(tree.dimensions).toEqual({
        windowScroll: 100,
        windowWidth: 1000,
        windowHeight: 1000,
        width: 200,
        height: 200
      });
    });
  });
});
