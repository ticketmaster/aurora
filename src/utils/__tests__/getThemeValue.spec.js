import { getThemeValue } from "..";

describe("getThemeValue", () => {
  it("should get correct value one level deep", () => {
    expect(getThemeValue("brand")({ theme: { themeName: "tm" } })).toBe(
      "#026cdf"
    );
  });
  it("should get correct value more than one level deep", () => {
    expect(
      getThemeValue("primary", "base")({ theme: { themeName: "tm" } })
    ).toBe("#026cdf");
  });
  it("should throw a reference error when value is not defined", () => {
    expect(() =>
      getThemeValue("primary", "base", "three")({ theme: { themeName: "tm" } })
    ).toThrowError(ReferenceError);
  });
});
