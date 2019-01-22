import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import RangeSlider from "../";
import * as utils from "../utils";

jest.mock("../Handle", () => "Handle");
jest.mock("../Track", () => "Track");

describe("RangeSlider", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<RangeSlider />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when disabled", () => {
    const tree = renderer.create(<RangeSlider disabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when min and max are matching", () => {
    const tree = renderer.create(<RangeSlider min={0} max={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("removeDocumentEvents should call removeEventListener", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    const spy = jest.spyOn(global.window, "removeEventListener");

    instance.removeDocumentEvents();

    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).toHaveBeenCalledWith("touchmove", instance.onTouchMove);
    expect(spy).toHaveBeenCalledWith("touchend", instance.onEnd);
    expect(spy).toHaveBeenCalledWith("mousemove", instance.onMouseMove);
    expect(spy).toHaveBeenCalledWith("mouseup", instance.onEnd);

    spy.mockRestore();
  });

  it("addDocumentMouseEvents should call addEventListener", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    const spy = jest.spyOn(global.window, "addEventListener");

    instance.addDocumentMouseEvents();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith("mousemove", instance.onMouseMove);
    expect(spy).toHaveBeenCalledWith("mouseup", instance.onEnd);

    spy.mockRestore();
  });

  it("addDocumentTouchEvents should call addEventListener", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    const spy = jest.spyOn(global.window, "addEventListener");

    instance.addDocumentTouchEvents();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith("touchmove", instance.onTouchMove);
    expect(spy).toHaveBeenCalledWith("touchend", instance.onEnd);

    spy.mockRestore();
  });

  it("calcValueByPos should return position decreased by slider start and then trimmed from utils", () => {
    const spy = jest
      .spyOn(RangeSlider.prototype, "getSliderStart")
      .mockImplementation(() => 10);
    const spyCalc = jest
      .spyOn(RangeSlider.prototype, "calcValue")
      .mockImplementation(a => a);
    const trimMock = jest.fn(a => a);
    const instance = renderer.create(<RangeSlider />).getInstance();

    utils.trimAlignValue = trimMock;
    const result = instance.calcValueByPos(20);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyCalc).toHaveBeenCalledTimes(1);
    expect(trimMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(10);

    spy.mockRestore();
    spyCalc.mockRestore();
  });

  it("calcValue should return calculated value", () => {
    const spy = jest
      .spyOn(RangeSlider.prototype, "getSliderLength")
      .mockImplementation(() => 100);
    const instance = renderer.create(<RangeSlider />).getInstance();

    const result = instance.calcValue(10);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toBe(10);

    spy.mockRestore();
  });

  it("moveTo should call onChange", () => {
    const spy = jest.spyOn(RangeSlider.prototype, "onChange");
    const instance = renderer.create(<RangeSlider />).getInstance();

    instance.setState({ handle: 0 });
    instance.moveTo(10);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      handle: 0,
      bounds: [10, 100]
    });

    spy.mockRestore();
  });

  it("getSliderLength should return 0 when slider ref is 0", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();

    instance.sliderRef = null;
    const result = instance.getSliderLength();

    expect(result).toBe(0);
  });

  it("getSliderLength should return width of sliders getBoundingClientRect method", () => {
    const mock = jest.fn(() => ({ width: 10 }));
    const instance = renderer.create(<RangeSlider />).getInstance();

    instance.sliderRef = { getBoundingClientRect: mock };
    const result = instance.getSliderLength();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toBe(10);
  });

  it("getSliderStart should return slider left + pageXOffset", () => {
    const mock = jest.fn(() => ({ left: 10 }));
    const instance = renderer.create(<RangeSlider />).getInstance();

    instance.sliderRef = { getBoundingClientRect: mock };
    Object.defineProperty(global.window, "pageXOffset", {
      value: 100,
      writable: false
    });
    const result = instance.getSliderStart();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toBe(110);
  });

  it("getPoints should return cached points", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();

    instance.getPointsCache = {
      points: [1, 2, 3],
      step: 1
    };
    const result = instance.getPoints();

    expect(result).toEqual([1, 2, 3]);
  });

  it("getPoints should return calculated points", () => {
    const instance = renderer.create(<RangeSlider max={3} />).getInstance();
    const result = instance.getPoints();

    expect(result).toEqual([0, 1, 2, 3]);
  });

  it("getBoundNeedMoving should return same handle when closest is the second one", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    const result = instance.getBoundNeedMoving(10, 1);

    expect(result).toBe(1);
  });

  it("getBoundNeedMoving should return recent handle when handles are at the same place", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.setState({ bounds: [10, 10], recent: 1 });
    const result = instance.getBoundNeedMoving(10, 0);

    expect(result).toBe(1);
  });

  it("getBoundNeedMoving should return first handle when value on the left", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.setState({ bounds: [10, 10], recent: 1 });
    const result = instance.getBoundNeedMoving(5, 0);

    expect(result).toBe(0);
  });

  it("getBoundNeedMoving should return second handle when value on the right", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.setState({ bounds: [10, 10], recent: 1 });
    const result = instance.getBoundNeedMoving(51, 0);

    expect(result).toBe(1);
  });

  it("getClosestBound should return first handle", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    const result = instance.getClosestBound(10);

    expect(result).toBe(0);
  });

  it("getClosestBound should return second handle", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    const result = instance.getClosestBound(90);

    expect(result).toBe(1);
  });

  it("getValue should return bounds", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.setState({ bounds: [10, 20] });
    const result = instance.getValue();

    expect(result).toEqual([10, 20]);
  });

  it("onMove should pause the event calculate the value and call moveTo", () => {
    const mock = jest.fn();
    const spy = jest
      .spyOn(RangeSlider.prototype, "calcValueByPos")
      .mockImplementation(() => 15);
    const spyMoveTo = jest.spyOn(RangeSlider.prototype, "moveTo");
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.setState({ bounds: [10, 20], handle: 0 });
    utils.pauseEvent = mock;
    instance.onMove();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyMoveTo).toHaveBeenCalledTimes(1);
    expect(spyMoveTo).toHaveBeenCalledWith(15);

    spy.mockRestore();
    spyMoveTo.mockRestore();
  });

  it("onMove should return undefined when trying to move to same position", () => {
    const spy = jest
      .spyOn(RangeSlider.prototype, "calcValueByPos")
      .mockImplementation(() => 15);
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.setState({ bounds: [15, 20], handle: 0 });
    utils.pauseEvent = jest.fn();
    const result = instance.onMove();

    expect(result).toBe(undefined);

    spy.mockRestore();
  });

  it("onEnd should call onAfterChange prop", () => {
    const onAfterChange = jest.fn();
    const instance = renderer
      .create(<RangeSlider onAfterChange={onAfterChange} />)
      .getInstance();

    instance.onEnd();

    expect(onAfterChange).toHaveBeenCalledTimes(1);
  });

  it("onStart should return undefined", () => {
    const spyCalc = jest
      .spyOn(RangeSlider.prototype, "calcValueByPos")
      .mockImplementation(() => 0);
    const spyBound = jest
      .spyOn(RangeSlider.prototype, "getBoundNeedMoving")
      .mockImplementation(() => 0);
    const instance = renderer.create(<RangeSlider />).getInstance();

    const result = instance.onStart(0);

    expect(spyCalc).toHaveBeenCalledTimes(1);
    expect(spyBound).toHaveBeenCalledTimes(1);
    expect(result).toBe(undefined);

    spyCalc.mockRestore();
    spyBound.mockRestore();
  });

  it("onStart should call onChange and onBeforeChange prop", () => {
    const spyCalc = jest
      .spyOn(RangeSlider.prototype, "calcValueByPos")
      .mockImplementation(() => 10);
    const spyBound = jest
      .spyOn(RangeSlider.prototype, "getBoundNeedMoving")
      .mockImplementation(() => 0);
    const spyOnChange = jest
      .spyOn(RangeSlider.prototype, "onChange")
      .mockImplementation(() => 0);
    const onBeforeChange = jest.fn();
    const instance = renderer
      .create(<RangeSlider onBeforeChange={onBeforeChange} />)
      .getInstance();

    instance.onStart(10);

    expect(spyCalc).toHaveBeenCalledTimes(1);
    expect(spyBound).toHaveBeenCalledTimes(1);
    expect(spyOnChange).toHaveBeenCalledTimes(1);
    expect(spyOnChange).toHaveBeenCalledWith({ bounds: [10, 100] });
    expect(onBeforeChange).toHaveBeenCalledTimes(1);
    expect(onBeforeChange).toHaveBeenCalledWith([0, 100]);

    spyCalc.mockRestore();
    spyBound.mockRestore();
    spyOnChange.mockRestore();
  });

  it("onChange should call onChange prop when controlled", () => {
    const onChange = jest.fn();
    const instance = renderer
      .create(<RangeSlider onChange={onChange} value={[10, 100]} />)
      .getInstance();

    instance.onChange({ handle: 0, bounds: [10, 100] });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([10, 100]);
  });
  it("onChange should call onChange prop when not controlled", () => {
    const onChange = jest.fn();
    const instance = renderer
      .create(<RangeSlider onChange={onChange} />)
      .getInstance();

    instance.onChange({ handle: 0, bounds: [10, 100] });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([10, 100]);
  });
  it("onChange should not call setState", () => {
    const mockState = jest.fn();
    const instance = renderer
      .create(<RangeSlider value={[0, 10]} />)
      .getInstance();
    instance.setState = mockState;

    instance.onChange({ bounds: [10, 100] });

    expect(mockState).toHaveBeenCalledTimes(0);
  });

  it("onBlur should call onBlur prop", () => {
    const mock = jest.fn();
    const instance = renderer
      .create(<RangeSlider onBlur={mock} />)
      .getInstance();

    instance.onBlur({ test: 3 });

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith({ test: 3 });
  });

  it("onFocus should call onFocus prop and onStart", () => {
    const mock = jest.fn();
    const spy = jest
      .spyOn(RangeSlider.prototype, "onStart")
      .mockImplementation(() => {});
    const instance = renderer
      .create(<RangeSlider onFocus={mock} />)
      .getInstance();

    utils.isEventFromHandle = jest.fn(() => true);
    utils.getHandleCenterPosition = jest.fn(() => "test");
    utils.pauseEvent = jest.fn();

    instance.onFocus("event");

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("event");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("test");

    spy.mockRestore();
  });

  it("onFocus should do nothing when isEventFromHandle is false", () => {
    const mock = jest.fn();
    const spy = jest
      .spyOn(RangeSlider.prototype, "onStart")
      .mockImplementation(() => {});
    const instance = renderer
      .create(<RangeSlider onFocus={mock} />)
      .getInstance();

    utils.isEventFromHandle = jest.fn(() => false);

    instance.onFocus("event");

    expect(mock).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(0);

    spy.mockRestore();
  });

  it("onTouchMove should return undefined when event is not touch", () => {
    utils.isNotTouchEvent = jest.fn(() => true);
    const instance = renderer.create(<RangeSlider />).getInstance();

    const result = instance.onTouchMove();

    expect(result).toBe(undefined);
  });
  it("onTouchMove should return undefined when slider ref is undefined", () => {
    utils.isNotTouchEvent = jest.fn(() => false);
    const instance = renderer.create(<RangeSlider />).getInstance();

    const result = instance.onTouchMove();

    expect(result).toBe(undefined);
  });
  it("onTouchMove should call onMove", () => {
    utils.isNotTouchEvent = jest.fn(() => false);
    const spy = jest
      .spyOn(RangeSlider.prototype, "onMove")
      .mockImplementation(() => {});
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.sliderRef = true;
    instance.dragOffset = 5;

    instance.onTouchMove({ touches: [{ pageX: 10 }] });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ touches: [{ pageX: 10 }] }, 5);

    spy.mockRestore();
  });

  it("onTouchStart should return undefined when event is not touch", () => {
    utils.isNotTouchEvent = jest.fn(() => true);
    const instance = renderer.create(<RangeSlider />).getInstance();

    const result = instance.onTouchStart();

    expect(result).toBe(undefined);
  });
  it("onTouchStart should call onStart, addEventListeners and pause event when event is touch", () => {
    const mockPause = jest.fn();
    utils.isNotTouchEvent = jest.fn(() => false);
    const spyStart = jest
      .spyOn(RangeSlider.prototype, "onStart")
      .mockImplementation(() => {});
    const spyAddListeners = jest
      .spyOn(RangeSlider.prototype, "addDocumentTouchEvents")
      .mockImplementation(() => {});
    const instance = renderer.create(<RangeSlider />).getInstance();
    utils.pauseEvent = mockPause;
    utils.isEventFromHandle = jest.fn(() => true);
    utils.getHandleCenterPosition = jest.fn(() => 3);

    instance.onTouchStart({ touches: [{ pageX: 10 }] });

    expect(mockPause).toHaveBeenCalledTimes(1);
    expect(mockPause).toHaveBeenCalledWith({ touches: [{ pageX: 10 }] });
    expect(spyStart).toHaveBeenCalledTimes(1);
    expect(instance.dragOffset).toBe(7);
    expect(spyStart).toHaveBeenCalledWith(3);
    expect(spyAddListeners).toHaveBeenCalledTimes(1);

    spyStart.mockRestore();
    spyAddListeners.mockRestore();
  });
  it("onTouchStart should call onStart, addEventListeners and pause event when event is touch", () => {
    const mockPause = jest.fn();
    utils.isNotTouchEvent = jest.fn(() => false);
    const spyStart = jest
      .spyOn(RangeSlider.prototype, "onStart")
      .mockImplementation(() => {});
    const spyAddListeners = jest
      .spyOn(RangeSlider.prototype, "addDocumentTouchEvents")
      .mockImplementation(() => {});
    const instance = renderer.create(<RangeSlider />).getInstance();
    utils.pauseEvent = mockPause;
    utils.isEventFromHandle = jest.fn(() => false);
    utils.getHandleCenterPosition = jest.fn(() => 3);

    instance.onTouchStart({ touches: [{ pageX: 10 }] });

    expect(mockPause).toHaveBeenCalledTimes(1);
    expect(mockPause).toHaveBeenCalledWith({ touches: [{ pageX: 10 }] });
    expect(spyStart).toHaveBeenCalledTimes(1);
    expect(instance.dragOffset).toBe(0);
    expect(spyStart).toHaveBeenCalledWith(10);
    expect(spyAddListeners).toHaveBeenCalledTimes(1);

    spyStart.mockRestore();
    spyAddListeners.mockRestore();
  });

  it("onMouseMove should return undefined when slider ref is undefined", () => {
    const instance = renderer.create(<RangeSlider />).getInstance();

    const result = instance.onMouseMove();

    expect(result).toBe(undefined);
  });
  it("onMouseMove should call onMove", () => {
    const spy = jest
      .spyOn(RangeSlider.prototype, "onMove")
      .mockImplementation(() => {});
    const instance = renderer.create(<RangeSlider />).getInstance();
    instance.sliderRef = true;
    instance.dragOffset = 3;

    instance.onMouseMove({ pageX: 10 });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ pageX: 10 }, 7);

    spy.mockRestore();
  });

  it("onMouseDown should remove doc event, call onStart and add mouse events when event is from handle", () => {
    const spyStart = jest
      .spyOn(RangeSlider.prototype, "onStart")
      .mockImplementation(() => {});
    const spyRemoveEvents = jest
      .spyOn(RangeSlider.prototype, "removeDocumentEvents")
      .mockImplementation(() => {});
    const spyAddEvents = jest
      .spyOn(RangeSlider.prototype, "addDocumentMouseEvents")
      .mockImplementation(() => {});
    const instance = renderer.create(<RangeSlider />).getInstance();
    utils.isEventFromHandle = jest.fn(() => true);
    utils.getHandleCenterPosition = jest.fn(() => 3);

    instance.onMouseDown({ pageX: 10 });

    expect(instance.dragOffset).toBe(7);
    expect(spyStart).toHaveBeenCalledTimes(1);
    expect(spyStart).toHaveBeenCalledWith(3);
    expect(spyRemoveEvents).toHaveBeenCalledTimes(1);
    expect(spyAddEvents).toHaveBeenCalledTimes(1);

    spyStart.mockRestore();
    spyRemoveEvents.mockRestore();
    spyAddEvents.mockRestore();
  });
  it("onMouseDown should set dragOffset to 0 when event is not from handle", () => {
    jest.spyOn(RangeSlider.prototype, "onStart").mockImplementation(() => {});
    const instance = renderer.create(<RangeSlider />).getInstance();
    utils.isEventFromHandle = jest.fn(() => false);

    instance.onMouseDown({ pageX: 10 });

    expect(instance.dragOffset).toBe(0);
  });

  it("getDerivedStateFromProps should return null when value, min and max are invalid", () => {
    const result = RangeSlider.getDerivedStateFromProps({});

    expect(result).toBe(null);
  });
  it("getDerivedStateFromProps should return null when bounds are not changed", () => {
    const result = RangeSlider.getDerivedStateFromProps(
      { min: 0, max: 10 },
      { bounds: [0, 10] }
    );

    expect(result).toBe(null);
  });
  it("getDerivedStateFromProps should return the new bounds", () => {
    const result = RangeSlider.getDerivedStateFromProps(
      { value: [0, 5], min: 0, max: 10 },
      { bounds: [0, 10] }
    );

    expect(result).toEqual({ bounds: [0, 5] });
  });

  it("componentWillUnmount shoudl remove events", () => {
    const spy = jest.spyOn(RangeSlider.prototype, "removeDocumentEvents");
    const instance = renderer.create(<RangeSlider />).getInstance();

    instance.componentWillUnmount();

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
