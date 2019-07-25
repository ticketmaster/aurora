import { memoize } from "..";

describe("memoize", () => {
  let functionMock;
  let memoizedMock;

  beforeEach(() => {
    functionMock = jest.fn((a, b) => a + b);
    memoizedMock = memoize(functionMock);
  });

  it("should call function mock with respective variables when the call is not memoed", () => {
    memoizedMock(2, 3);
    expect(functionMock).toHaveBeenCalledTimes(1);
    expect(functionMock).toHaveBeenCalledWith(2, 3);
  });

  it("should call function mock with respective variables only once when momoed function is called twice with the same args", () => {
    const initialResult = memoizedMock(2, 3);
    const secondaryResult = memoizedMock(2, 3);
    expect(functionMock).toHaveBeenCalledTimes(1);
    expect(functionMock).toHaveBeenCalledWith(2, 3);
    expect(initialResult).toBe(5);
    expect(secondaryResult).toBe(5);
  });
});
