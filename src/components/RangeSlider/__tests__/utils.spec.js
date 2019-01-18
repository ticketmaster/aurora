import * as utils from "../utils";

describe("trimAlignValue", () => {
  it("trimAlignValue should return result from ensureValuePrecision", () => {
    const result = utils.trimAlignValue(10, 1, { min: 0, max: 100, step: 1 });

    expect(result).toBe(10);
  });

  it("getClosestPoint should be 0 when step is invalid", () => {
    expect(utils.getClosestPoint(10, {})).toBe(0);
  });
  it("getClosestPoint should be 0 when step is invalid", () => {
    expect(utils.getClosestPoint(10.3, { step: 1, min: 0 })).toBe(10);
  });

  it("ensureValuePrecision should return 0 when step is not defined", () => {
    expect(utils.ensureValuePrecision(10, {})).toBe(0);
  });

  it("ensureValueNotConflict should return value when handle is null", () => {
    const result = utils.ensureValueNotConflict(null, 30, [30, 60], 5);

    expect(result).toBe(30);
  });

  it("ensureValueNotConflict should return second handle value and increase with treshold", () => {
    const result = utils.ensureValueNotConflict(1, 30, [30, 60], 5);

    expect(result).toBe(35);
  });
  it("ensureValueNotConflict should return second handle value and decrease with treshold", () => {
    const result = utils.ensureValueNotConflict(0, 30, [0, 20], 5);

    expect(result).toBe(15);
  });

  it("shallowEqual should return true when objects are identical", () => {
    const obj = { test: 3 };

    expect(utils.shallowEqual(obj, obj)).toBe(true);
  });
  it("shallowEqual should return false when one is not an object", () => {
    const obj = { test: 3 };

    expect(utils.shallowEqual(obj, 3)).toBe(false);
  });
  it("shallowEqual should return false when objects have different amount of keys", () => {
    const obj = { test: 3 };

    expect(utils.shallowEqual(obj, {})).toBe(false);
  });
  it("shallowEqual should return true when object has same key and values", () => {
    const obj = { test: 3 };
    const obj1 = { test: 3 };

    expect(utils.shallowEqual(obj, obj1)).toBe(true);
  });

  it("pauseEvent should call preventDefault and stopPropagation", () => {
    const preventDefault = jest.fn();
    const stopPropagation = jest.fn();
    utils.pauseEvent({ preventDefault, stopPropagation });

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(1);
  });

  it("ensureValueInRange should return min when value is less than min", () => {
    expect(utils.ensureValueInRange(-1, { min: 0 })).toBe(0);
  });
  it("ensureValueInRange should return max when value is more than max", () => {
    expect(utils.ensureValueInRange(100, { min: 0, max: 50 })).toBe(50);
  });
  it("ensureValueInRange should return value when it is in range", () => {
    expect(utils.ensureValueInRange(10, { min: 0, max: 50 })).toBe(10);
  });

  it("getHandleCenterPosition", () => {
    const mock = jest.fn(() => ({ left: 10, width: 10 }));
    Object.defineProperty(global.window, "pageXOffset", {
      value: 100,
      writable: false
    });

    const result = utils.getHandleCenterPosition({
      getBoundingClientRect: mock
    });

    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toBe(115);
  });

  it("getPrecision should return 1 when step is 1.5", () => {
    expect(utils.getPrecision(1.5)).toBe(1);
  });

  it("isEventFromHandle should return false when handles is not an object", () => {
    expect(utils.isEventFromHandle({}, null)).toBe(false);
  });
  it("isEventFromHandle should return true event is from handle", () => {
    expect(utils.isEventFromHandle({ target: 4 }, { a: 4, b: 3 })).toBe(true);
  });

  it("isNotTouchEvent should return false when touches length is 0 and event is touch end", () => {
    expect(utils.isNotTouchEvent({ touches: [], type: "touchend" })).toBe(
      false
    );
  });
  it("isNotTouchEvent should return false when touches length is 1 and event is not touch end", () => {
    expect(utils.isNotTouchEvent({ touches: [1], type: "touchstart" })).toBe(
      false
    );
  });
  it("isNotTouchEvent should return true when touches length is 1 and event is touchend", () => {
    expect(utils.isNotTouchEvent({ touches: [1], type: "touchend" })).toBe(
      true
    );
  });
  it("isNotTouchEvent should return true when touches length is more than 1", () => {
    expect(utils.isNotTouchEvent({ touches: [1, 2] })).toBe(true);
  });
});
