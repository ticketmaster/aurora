import React from "react";
import renderer from "react-test-renderer";

import PopOver from "../../PopOver";
import Tooltip from "../index";
import { BOTTOM, TOP, LEFT, RIGHT } from "../../constants";
import { constants } from "../../../theme";

jest.mock("../../PopOver/PopOverPortal", () => ({ children }) => children);

jest.mock("react-transition-group", () => ({
  CSSTransition: ({ children }) => children
}));

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

  it("tooltipExit should update tooltip transition prop", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    instance.myRef.current = {
      style: {
        transition: ""
      }
    };

    instance.tooltipExit();

    expect(instance.myRef.current.style.transition).toBe(
      `opacity 0.1s ${constants.easing.easeInQuad}`
    );
  });

  it("tooltipEntering should update tooltip transition and transform props", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    instance.myRef.current = {
      style: {
        transition: "",
        transform: ""
      }
    };

    instance.tooltipEntering();

    expect(instance.myRef.current.style.transition).toBe(`opacity 0.3s ${
      constants.easing.easeOutQuad
    },
      transform 0.3s ${constants.easing.easeOutQuad}`);
    expect(instance.myRef.current.style.transform).toBe("translate(0)");
  });

  it("getTranslateByDirection direction top", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    expect(instance.getTranslateByDirection(TOP)).toBe("translate(0, 10px)");
  });
  it("getTranslateByDirection direction bottom", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    expect(instance.getTranslateByDirection(BOTTOM)).toBe(
      "translate(0, -10px)"
    );
  });
  it("getTranslateByDirection direction left", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    expect(instance.getTranslateByDirection(LEFT)).toBe("translate(10px, 0)");
  });
  it("getTranslateByDirection direction right", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    expect(instance.getTranslateByDirection(RIGHT)).toBe("translate(-10px, 0)");
  });
  it("getTranslateByDirection direction no direction", () => {
    const instance = renderer.create(<Tooltip />).getInstance();

    expect(instance.getTranslateByDirection()).toBe("translate(-10px, 0)");
  });

  describe("calculatePosition tests", () => {
    const size = {
      width: 100,
      height: 100,
      windowScroll: 100
    };
    const position = {
      elBottom: 300,
      elTop: 250,
      elLeft: 400,
      elRight: 450,
      elHorizontalCenter: 425
    };

    it("should return tooltip coordinates on top", () => {
      const tree = renderer.create(<Tooltip />).getInstance();
      expect(
        tree.calculatePosition({ direction: "top", position, dimensions: size })
      ).toEqual({
        x: 375,
        y: 230
      });
    });

    it("should return tooltip coordinates on bottom", () => {
      const tree = renderer.create(<Tooltip />).getInstance();
      expect(
        tree.calculatePosition({
          direction: "bottom",
          position,
          dimensions: size
        })
      ).toEqual({
        x: 375,
        y: 420
      });
    });

    it("should return tooltip coordinates on left", () => {
      const tree = renderer.create(<Tooltip />).getInstance();
      expect(
        tree.calculatePosition({
          direction: "left",
          position,
          dimensions: size
        })
      ).toEqual({
        x: 280,
        y: 350
      });
    });

    it("should return tooltip coordinates on right", () => {
      const tree = renderer.create(<Tooltip />).getInstance();
      expect(
        tree.calculatePosition({
          direction: "right",
          position,
          dimensions: size
        })
      ).toEqual({
        x: 470,
        y: 350
      });
    });

    it("should return tooltip coordinates on invalid", () => {
      const spy = jest
        .spyOn(PopOver, "calculatePosition")
        .mockImplementation(() => ({
          x: 375,
          y: 130
        }));

      const tree = renderer.create(<Tooltip />).getInstance();
      const result = tree.calculatePosition({
        direction: "invalid",
        position,
        dimensions: size
      });
      expect(spy).toHaveBeenCalledTimes(1);
      expect(result).toEqual({
        x: 375,
        y: 130
      });
      spy.mockRestore();
    });

    describe("tooltip preferTop prop", () => {
      const tooltipDimensions = {
        width: 100,
        height: 100,
        windowScroll: 100,
        windowWidth: 1000,
        windowHeight: 1000
      };

      const parentElementPosition = {
        elBottom: 300,
        elTop: 250,
        elLeft: 250,
        elRight: 300,
        elHorizontalCenter: 325,
        elWidth: 50,
        offsetTop: 0,
        clientHeight: 1000,
        offsetLeft: 0,
        clientWidth: 1000
      };

      const reduce = {
        top: 0,
        bottom: 0
      };

      it("calculate position for tooltip should be ABOVE parent element when preferTop = true", () => {
        const tree = renderer.create(<Tooltip preferTop />).getInstance();
        expect(
          tree.calculatePosition({
            direction: "auto",
            position: parentElementPosition,
            reduce,
            spaceFromMouse: 10,
            dimensions: tooltipDimensions
          })
        ).toEqual({
          x: 225,
          y: 240
        });
      });

      it("Tooltip should be BELOW parent element when preferTop = true and there isn't enough space above", () => {
        const parentElementPositionAbove = {
          elBottom: 75,
          elTop: 25,
          elLeft: 250,
          elRight: 300,
          elHorizontalCenter: 325,
          elWidth: 50,
          offsetTop: 0,
          clientHeight: 1000,
          offsetLeft: 0,
          clientWidth: 1000
        };

        const tree = renderer.create(<Tooltip preferTop />).getInstance();
        expect(
          tree.calculatePosition({
            direction: "auto",
            position: parentElementPositionAbove,
            reduce,
            spaceFromMouse: 10,
            dimensions: tooltipDimensions
          })
        ).toEqual({
          x: 225,
          y: 185
        });
      });

      it("calculate position for tooltip should be ABOVE parent element when preferTop = true", () => {
        const tree = renderer.create(<Tooltip preferTop />).getInstance();
        expect(
          tree.calculatePosition({
            direction: "auto",
            position: parentElementPosition,
            reduce,
            spaceFromMouse: 10,
            dimensions: tooltipDimensions
          })
        ).toEqual({
          x: 225,
          y: 240
        });
      });

      it("calculate position for tooltip should be BELOW parent element when preferTop = false", () => {
        const tree = renderer.create(<Tooltip />).getInstance();
        expect(
          tree.calculatePosition({
            direction: "auto",
            position: parentElementPosition,
            reduce,
            spaceFromMouse: 10,
            dimensions: tooltipDimensions
          })
        ).toEqual({
          x: 225,
          y: 410
        });
      });
    });
  });

  it("getDimensionsFromEvent should return calculated position props from event target", () => {
    const event = {
      target: {
        getBoundingClientRect: () => ({
          top: 100,
          height: 50,
          width: 50,
          left: 200
        })
      }
    };

    expect(Tooltip.getDimensionsFromEvent(event)).toEqual({
      elHorizontalCenter: 225,
      elVerticalCenter: 125,
      elTop: 100,
      elBottom: 150,
      elLeft: 200,
      elRight: 250,
      clientHeight: 100000,
      clientWidth: 100000,
      elWidth: 50,
      offsetLeft: 0,
      offsetTop: 0
    });
  });

  it("getDimensionsFromEvent should return calculated position props from event target and parent", () => {
    const event = {
      target: {
        getBoundingClientRect: () => ({
          top: 100,
          height: 50,
          width: 50,
          left: 200
        })
      }
    };

    const parent = {
      getBoundingClientRect: () => ({
        top: 100,
        height: 50,
        width: 50,
        left: 200
      })
    };

    expect(Tooltip.getDimensionsFromEvent(event, parent)).toEqual({
      elHorizontalCenter: 225,
      elVerticalCenter: 125,
      elTop: 100,
      elBottom: 150,
      elLeft: 200,
      elRight: 250,
      clientHeight: 50,
      clientWidth: 50,
      elWidth: 50,
      offsetLeft: 200,
      offsetTop: 100
    });
  });

  it("tooltipEnter should calculate position again and set it", () => {
    const updateSizeMock = jest.fn();
    const mock = jest.fn(() => "test");
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer
      .create(<Tooltip direction="left" isVisible />)
      .getInstance();

    tree.updateSize = updateSizeMock;
    tree.getTranslateByDirection = mock;
    tree.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0,
          transition: "",
          transform: ""
        }
      }
    };
    tree.tooltipEnter();

    expect(updateSizeMock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("left");
    expect(calculatePositionMock).toHaveBeenCalledTimes(1);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
    expect(tree.myRef.current.style.transition).toEqual(
      `opacity 0.3s ${constants.easing.easeOutQuad}`
    );
    expect(tree.myRef.current.style.transform).toEqual("test");
  });

  it("tooltipEnter should calculate position when auto is set", () => {
    const updateSizeMock = jest.fn();
    const mock = jest.fn(() => "test");
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer
      .create(<Tooltip direction="auto" isVisible />)
      .getInstance();

    tree.updateSize = updateSizeMock;
    tree.getTranslateByDirection = mock;
    tree.calculatePosition = calculatePositionMock;
    tree.myRef = {
      current: {
        style: {
          top: 0,
          left: 0,
          transition: "",
          transform: ""
        }
      }
    };
    tree.tooltipEnter();

    expect(updateSizeMock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("auto");
    expect(calculatePositionMock).toHaveBeenCalledTimes(1);
    expect(tree.myRef.current.style.top).toEqual("10px");
    expect(tree.myRef.current.style.left).toEqual("5px");
    expect(tree.myRef.current.style.transition).toEqual(
      `opacity 0.3s ${constants.easing.easeOutQuad}`
    );
    expect(tree.myRef.current.style.transform).toEqual("test");
  });

  it("tooltipEnter should not calculate position again and set old pos values", () => {
    const updateSizeMock = jest.fn();
    const calculatePositionMock = jest.fn(() => ({ x: 5, y: 10 }));
    const tree = renderer.create(<Tooltip />).getInstance();

    tree.updateSize = updateSizeMock;
    tree.calculatePosition = calculatePositionMock;
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
    const tree = renderer.create(<Tooltip />).getInstance();

    tree.updateSize();

    expect(tree.updateSize()).toBeFalsy();
  });

  it("updateSize should not update class propsa and should return false when tooltip zise are 0, 0 tooltip is not visible", () => {
    const tree = renderer.create(<Tooltip isVisible />).getInstance();

    tree.dimensions.width = 100;
    tree.dimensions.height = 100;
    tree.dimensions.windowScroll = 0;
    tree.dimensions.windowHeight = 0;
    tree.dimensions.windowWidth = 0;
    tree.myRef = {
      current: {
        clientWidth: 0,
        clientHeight: 0
      }
    };
    tree.updateSize();

    expect(tree.updateSize()).toBeFalsy();
    expect(tree.dimensions).toEqual({
      width: 100,
      height: 100,
      windowHeight: 0,
      windowScroll: 0,
      windowWidth: 0
    });
  });

  it("updateSize return true and change size prop", () => {
    const tree = renderer.create(<Tooltip isVisible />).getInstance();

    tree.dimensions.width = 0;
    tree.dimensions.height = 0;
    tree.dimensions.windowScroll = 100;
    tree.dimensions.windowHeight = 100;
    tree.dimensions.windowWidth = 100;
    tree.myRef = {
      current: {
        clientWidth: 100,
        clientHeight: 100
      }
    };

    expect(tree.updateSize()).toBeTruthy();
    expect(tree.dimensions).toEqual({
      width: 100,
      height: 100,
      windowHeight: 0,
      windowScroll: 0,
      windowWidth: 0
    });
  });

  it("getPositionAndUpdateDirection should set position top and change adjustment when direction is different", () => {
    const tree = renderer.create(<Tooltip />).getInstance();
    PopOver.calculatePosition = jest.fn(() => ({ x: 10, y: 0 }));
    tree.adjustArrow = jest.fn(() => 0);
    tree.setState({
      actualDirection: BOTTOM
    });

    const spy = jest.spyOn(tree, "setState").mockImplementation(() => {});
    tree.getPositionAndUpdateDirection({
      position: {
        elTop: 10
      },
      dimensions: {
        windowScroll: 100
      }
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      actualDirection: TOP,
      arrowAdjustment: 0
    });

    spy.mockRestore();
  });

  it("getPositionAndUpdateDirection should set position top and change adjustment when adjustment is different", () => {
    const tree = renderer.create(<Tooltip />).getInstance();
    PopOver.calculatePosition = jest.fn(() => ({ x: 10, y: 0 }));
    tree.adjustArrow = jest.fn(() => 100);
    tree.setState({
      actualDirection: TOP
    });

    const spy = jest.spyOn(tree, "setState").mockImplementation(() => {});
    tree.getPositionAndUpdateDirection({
      position: {
        elTop: 10
      },
      dimensions: {
        windowScroll: 100
      }
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      actualDirection: TOP,
      arrowAdjustment: 100
    });

    spy.mockRestore();
  });

  it("getPositionAndUpdateDirection should set position bottom and change adjustment when position is different", () => {
    const tree = renderer.create(<Tooltip />).getInstance();
    PopOver.calculatePosition = jest.fn(() => ({ x: 10, y: 1000 }));
    tree.adjustArrow = jest.fn(() => 0);
    tree.setState({
      actualDirection: TOP
    });

    const spy = jest.spyOn(tree, "setState").mockImplementation(() => {});
    tree.getPositionAndUpdateDirection({
      position: {
        elTop: 10
      },
      dimensions: {
        windowScroll: 100
      }
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      actualDirection: BOTTOM,
      arrowAdjustment: 0
    });

    spy.mockRestore();
  });

  it("getPositionAndUpdateDirection should set position bottom and change adjustment when adjustment is different", () => {
    const tree = renderer.create(<Tooltip />).getInstance();
    PopOver.calculatePosition = jest.fn(() => ({ x: 10, y: 1000 }));
    tree.adjustArrow = jest.fn(() => 10);
    tree.setState({
      actualDirection: BOTTOM
    });

    const spy = jest.spyOn(tree, "setState").mockImplementation(() => {});
    tree.getPositionAndUpdateDirection({
      position: {
        elTop: 10
      },
      dimensions: {
        windowScroll: 100
      }
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      actualDirection: BOTTOM,
      arrowAdjustment: 10
    });

    spy.mockRestore();
  });

  it("getPositionAndUpdateDirection should not call set state", () => {
    const tree = renderer.create(<Tooltip />).getInstance();
    PopOver.calculatePosition = jest.fn(() => ({ x: 10, y: 1000 }));
    tree.adjustArrow = jest.fn(() => 0);
    tree.setState({
      actualDirection: BOTTOM
    });

    const spy = jest.spyOn(tree, "setState").mockImplementation(() => {});
    tree.getPositionAndUpdateDirection({
      position: {
        elTop: 10
      },
      dimensions: {
        windowScroll: 100
      }
    });

    expect(spy).toHaveBeenCalledTimes(0);

    spy.mockRestore();
  });

  describe("tooltip refresh", () => {
    let element;

    beforeEach(() => {
      const tooltip = renderer.create(<Tooltip isVisible>test</Tooltip>);

      element = {
        style: {}
      };

      tooltip.getInstance().myRef.current = element;

      tooltip.getInstance().refresh();
    });

    it("should force a update the position", () => {
      expect(element.style.top).toBeTruthy();
      expect(element.style.left).toBeTruthy();
    });
  });
});
