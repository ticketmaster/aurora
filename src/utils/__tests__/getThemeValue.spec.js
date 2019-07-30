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
  it("should return correct value when theme is passed as object", () => {
    expect(
      getThemeValue("primary", "base")({
        theme: {
          customValues: {
            primary: {
              base: "#000000"
            }
          }
        }
      })
    ).toBe("#000000");
  });
  it("should return color from global theme when theme passed as object but the color is not overwritten", () => {
    expect(
      getThemeValue("gray01")({
        theme: {
          customValues: {
            primary: {
              base: "#000000"
            }
          }
        }
      })
    ).toBe("#262626");
  });
});
