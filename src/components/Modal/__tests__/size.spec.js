import { getDeviceSize, getModalSize } from "../size";

describe("getDeviceSize", () => {
  it("should return default device size", () => {
    const deviceSize = getDeviceSize({ deviceSize: {} });

    expect(deviceSize).toBe("isXSmall");
  });

  it("should return correct size (isSmall)", () => {
    const deviceSize = getDeviceSize({
      deviceSize: { isXSmall: false, isSmall: true, isMedium: true }
    });

    expect(deviceSize).toBe("isSmall");
  });

  it("should return correct size (isLarge)", () => {
    const deviceSize = getDeviceSize({
      deviceSize: {
        isXSmall: false,
        isSmall: false,
        isMedium: false,
        isLarge: true
      }
    });

    expect(deviceSize).toBe("isLarge");
  });
});

describe("getModalSize", () => {
  it("should return correct column size for isXSmall", () => {
    const size = getModalSize({
      deviceSize: { isXSmall: true },
      preferredSize: "small"
    });

    expect(size).toBe(12);
  });

  it("should return correct column size for isLarge", () => {
    const size = getModalSize({
      deviceSize: { isLarge: true },
      preferredSize: "large"
    });

    expect(size).toBe(10);
  });
});
