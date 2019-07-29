import { isValidThemeColorVariant } from "../";
import { THEME_TM } from "../../theme/constants";

describe("isValidThemeColorVariant", () => {
  it("should return true when the color and variant passed are valid for the theme provided", () => {
    expect(isValidThemeColorVariant(THEME_TM, "accent01", "dark")).toEqual(
      true
    );
  });

  it("should return false when the color passed does not have variants for the theme provided", () => {
    expect(isValidThemeColorVariant(THEME_TM, "brand", "dark")).toEqual(false);
  });

  it("should return false when an invalid variant is passed", () => {
    expect(isValidThemeColorVariant(THEME_TM, "accent01", "awesome")).toEqual(
      false
    );
  });

  it("should return false when no variant is passed", () => {
    expect(isValidThemeColorVariant(THEME_TM, "brand")).toEqual(false);
  });

  it("should return false when an invalid color is passed", () => {
    expect(isValidThemeColorVariant(THEME_TM, "fakecolor")).toEqual(false);
  });

  it("should use the tm theme by default", () => {
    expect(isValidThemeColorVariant(undefined, "accent01", "dark")).toEqual(
      true
    );
  });

  describe("when object is passed as theme", () => {
    let themeObject;

    beforeEach(() => {
      themeObject = {
        customValues: {
          primary: {
            base: "#000000"
          }
        }
      };
    });

    it("should return true when the color and variant passed are valid for the theme object provided", () => {
      expect(isValidThemeColorVariant(themeObject, "primary", "base")).toEqual(
        true
      );
    });
    it("should return true when the color and variant passed are valid for the result of merging global styles with the object styles passed", () => {
      expect(isValidThemeColorVariant(themeObject, "special", "base")).toEqual(
        true
      );
    });

    it("should return false when the color passed does not have variants for the theme object provided", () => {
      expect(isValidThemeColorVariant(themeObject, "brand", "dark")).toEqual(
        false
      );
    });

    it("should return false when an invalid variant is passed", () => {
      expect(
        isValidThemeColorVariant(themeObject, "accent01", "awesome")
      ).toEqual(false);
    });

    it("should return false when no variant is passed to a color with variants", () => {
      expect(isValidThemeColorVariant(themeObject, "brand")).toEqual(false);
    });

    it("should return false when an invalid color is passed", () => {
      expect(isValidThemeColorVariant(themeObject, "fakecolor")).toEqual(false);
    });
  });
});
