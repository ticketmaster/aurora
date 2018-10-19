import React from "react";
import renderer from "react-test-renderer";

import Tooltip from "../index";

describe("Tooltip", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Tooltip />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("dark should match snapshot", () => {
    const tree = renderer.create(<Tooltip isVisible variant="dark" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visisble and direction is bottom", () => {
    const tree = renderer
      .create(<Tooltip isVisible direction="bottom" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visisble and direction is top", () => {
    const tree = renderer
      .create(<Tooltip isVisible direction="top" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visisble and direction is left", () => {
    const tree = renderer
      .create(<Tooltip isVisible direction="left" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visisble and direction is right", () => {
    const tree = renderer
      .create(<Tooltip isVisible direction="right" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when visisble and direction is invalid", () => {
    const tree = renderer
      .create(<Tooltip isVisible direction="invalid" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("calculatePosition tests", () => {
    const size = {
      width: 100,
      height: 100
    };
    const position = {
      elBottom: 300,
      elTop: 250,
      elLeft: 400,
      elRight: 450,
      elHorizontalCenter: 425
    };

    it("should return tooltip coordinates on top", () => {
      expect(Tooltip.calculatePosition("top", position, size)).toEqual({
        x: 375,
        y: 130
      });
    });

    it("should return tooltip coordinates on bottom", () => {
      expect(Tooltip.calculatePosition("bottom", position, size)).toEqual({
        x: 375,
        y: 320
      });
    });

    it("should return tooltip coordinates on left", () => {
      expect(Tooltip.calculatePosition("left", position, size)).toEqual({
        x: 280,
        y: 250
      });
    });

    it("should return tooltip coordinates on right", () => {
      expect(Tooltip.calculatePosition("right", position, size)).toEqual({
        x: 470,
        y: 250
      });
    });

    it("should return tooltip coordinates on invalid", () => {
      expect(Tooltip.calculatePosition("invalid", position, size)).toEqual({
        x: 375,
        y: 130
      });
    });
  });

  it("getDimensionsFromEvent should return calculated position props from event currentTarget", () => {
    const event = {
      currentTarget: {
        offsetTop: 100,
        clientHeight: 50,
        clientWidth: 50,
        offsetLeft: 200
      }
    };

    expect(Tooltip.getDimensionsFromEvent(event)).toEqual({
      elHorizontalCenter: 225,
      elVerticalCenter: 125,
      elTop: 100,
      elBottom: 150,
      elLeft: 200,
      elRight: 250
    });
  });

  it("tooltipEnter should calculate position again and set it", () => {
    const updateSizeMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer.create(<Tooltip isVisible />).getInstance();

    tree.updateSize = updateSizeMock;
    Tooltip.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.tooltipEnter();

    expect(updateSizeMock).toHaveBeenCalledTimes(1);
    expect(calculatePositionMock).toHaveBeenCalledTimes(1);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
  });

  it("tooltipEnter should not calculate position again and set old pos values", () => {
    const updateSizeMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer.create(<Tooltip />).getInstance();

    tree.updateSize = updateSizeMock;
    Tooltip.calculatePosition = calculatePositionMock;
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
    tree.tooltipEnter();

    expect(updateSizeMock).toHaveBeenCalledTimes(0);
    expect(calculatePositionMock).toHaveBeenCalledTimes(0);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
  });

  it("updateSize should not change class props and should return false", () => {
    const tree = renderer.create(<Tooltip isVisible />).getInstance();

    tree.updateSize();

    expect(tree.updateSize()).toBeFalsy();
  });

  it("updateSize should not update class propsa and should return false when tooltip zise are 0, 0 tooltip is not visible", () => {
    const tree = renderer.create(<Tooltip />).getInstance();

    tree.size.width = 100;
    tree.size.height = 100;
    tree.myRef = {
      current: {
        clientWidth: 0,
        clientHeight: 0
      }
    };
    tree.updateSize();

    expect(tree.updateSize()).toBeFalsy();
  });

  it("updateSize return true and change size prop", () => {
    const tree = renderer.create(<Tooltip />).getInstance();

    tree.size.width = 0;
    tree.size.height = 0;
    tree.myRef = {
      current: {
        clientWidth: 100,
        clientHeight: 100
      }
    };

    expect(tree.updateSize()).toBeTruthy();
    expect(tree.size).toEqual({
      width: 100,
      height: 100
    });
  });

  it("componentDidUpdate should calculate position again and set it", () => {
    const updateSizeMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const position = {
      elHorizontalCenter: 30,
      elVerticalCenter: 20
    };
    const tree = renderer.create(<Tooltip isVisible />).getInstance();

    tree.updateSize = updateSizeMock;
    Tooltip.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.componentDidUpdate({ position, isVisible: true });

    expect(updateSizeMock).toHaveBeenCalledTimes(1);
    expect(calculatePositionMock).toHaveBeenCalledTimes(1);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
  });

  it("componentDidUpdate should not do anything if not visible", () => {
    const updateSizeMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const position = {
      elHorizontalCenter: 30,
      elVerticalCenter: 20
    };
    const tree = renderer
      .create(<Tooltip isVisible position={position} />)
      .getInstance();

    tree.updateSize = updateSizeMock;
    Tooltip.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0
        }
      }
    };
    tree.componentDidUpdate({ position });

    expect(updateSizeMock).toHaveBeenCalledTimes(0);
    expect(calculatePositionMock).toHaveBeenCalledTimes(0);
    expect(tree.myRef.current.style.top).toEqual(0);
    expect(tree.myRef.current.style.left).toEqual(0);
  });
});
