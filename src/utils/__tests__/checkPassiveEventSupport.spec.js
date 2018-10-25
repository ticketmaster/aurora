import checkPassiveEventSupport from "../checkPassiveEventSupport";

describe("checkPassiveEventSupport", () => {
  const mockFn = (event, cb, opt) =>
    typeof opt === "object" && opt !== null ? opt.passive : opt;
  const mockThrowFn = () => {
    throw new Error("Test error");
  };

  beforeEach(() => {
    global.addEventListener = mockFn;
    global.removeEventListener = mockFn;
  });

  it("should return true if passive option is supported", () => {
    const isPassiveSupported = checkPassiveEventSupport(true);
    expect(isPassiveSupported).toBe(true);
  });

  it("should return true if passive option is NOT supported", () => {
    global.addEventListener = jest.fn();
    global.removeEventListener = jest.fn();
    const isPassiveSupported = checkPassiveEventSupport(true);
    expect(isPassiveSupported).toBe(false);
  });

  it("should return a cached value", () => {
    const isPassiveSupported = checkPassiveEventSupport(true);
    global.addEventListener = jest.fn();
    global.removeEventListener = jest.fn();
    const isPassiveSupportedCached = checkPassiveEventSupport();
    expect(isPassiveSupported).toBe(isPassiveSupportedCached);
  });

  it("should return false if an error occurred", () => {
    global.addEventListener = mockThrowFn;
    const isPassiveSupported = checkPassiveEventSupport(true);
    expect(isPassiveSupported).toBe(false);
  });
});
