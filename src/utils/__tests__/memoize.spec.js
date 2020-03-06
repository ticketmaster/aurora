import { memoize } from "..";

describe("memoize", () => {
  let functionMock;
  let memoizedMock;

  beforeEach(() => {
    functionMock = jest.fn((a, obj) => a + obj.a.b);
    memoizedMock = memoize(functionMock);
  });

  it("should call function mock with respective variables when the call is not memoed", () => {
    memoizedMock(2, { a: { b: 4 } });
    expect(functionMock).toHaveBeenCalledTimes(1);
    expect(functionMock).toHaveBeenCalledWith(2, { a: { b: 4 } });
  });

  it("should call function mock with respective variables only once when momoed function is called twice with the same args", () => {
    const initialResult = memoizedMock(2, { a: { b: 4 } });
    const secondaryResult = memoizedMock(2, { a: { b: 4 } });
    expect(functionMock).toHaveBeenCalledTimes(1);
    expect(functionMock).toHaveBeenCalledWith(2, { a: { b: 4 } });
    expect(initialResult).toBe(6);
    expect(secondaryResult).toBe(6);
  });

  describe("when one of the parameters is nested object and memoed function called multiple times with different object", () => {
    it("should call the function multiple times", () => {
      const initialResult = memoizedMock(2, { a: { b: 4 } });
      const secondaryResult = memoizedMock(2, { a: { b: 5 } });
      expect(functionMock).toHaveBeenCalledTimes(2);
      expect(functionMock).toHaveBeenCalledWith(2, { a: { b: 4 } });
      expect(functionMock).toHaveBeenCalledWith(2, { a: { b: 5 } });
      expect(initialResult).toBe(6);
      expect(secondaryResult).toBe(7);
    });
  });
});
