import { throttle } from "..";

describe("throttle", () => {
  jest.useFakeTimers();

  it("should set throttle time to 1 second", () => {
    const throttled = throttle(() => {}, 1000);

    throttled();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it("should call the callback after 1 second", () => {
    const callback = jest.fn();
    const throttled = throttle(callback, 1000);

    throttled();

    expect(callback).not.toBeCalled();
    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should call the callback only once event if throttled after 1 second", () => {
    const callback = jest.fn();
    const throttled = throttle(callback, 1000);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      throttled();
    }

    expect(callback).not.toBeCalled();
    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should call the callback immediately if the third argument is true", () => {
    const callback = jest.fn();
    const throttled = throttle(callback, 1000, true);

    throttled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
