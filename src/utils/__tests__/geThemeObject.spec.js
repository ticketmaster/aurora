import { getThemeObject } from "..";
import { themes } from "../../theme";

describe("getThemeObject", () => {
  it("should return global theme when themeName is not present in themes and customValues is not passed", () => {
    expect(getThemeObject("uknown")).toEqual(themes.global);
  });
  it("should return global theme merged with customValues when themeName is not present in themes and customValues is passed", () => {
    expect(getThemeObject("uknown", { brand: "#000000" })).toEqual({
      ...themes.global,
      brand: "#000000"
    });
  });

  it("should return theme when themeName is present in themes and customValues is not passed", () => {
    expect(getThemeObject("lne")).toEqual(themes.lne);
  });

  it("should return theme when themeName is present in themes and customValues is not object", () => {
    expect(getThemeObject("tm", ["brand", "#000000"])).toEqual(themes.tm);
  });

  it("should return merged object of theme and customValues when both are present and valid", () => {
    expect(getThemeObject("lne", { brand: "#000000" })).toEqual({
      ...themes.lne,
      brand: "#000000"
    });
  });
});
