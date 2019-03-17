import { isValidThemeColorVariant } from "../";
import { themeTm } from "../getThemeValue";

describe("isValidThemeColorVariant", () => {
  it("should return true when the color and variant passed are valid for the theme provided", () => {
    expect(isValidThemeColorVariant(themeTm, "accent01", "dark")).toEqual(true);
  });

  it("should return false when the color passed does not have variants for the theme provided", () => {
    expect(isValidThemeColorVariant(themeTm, "brand", "dark")).toEqual(false);
  });

  it("should return false when an invalid variant is passed", () => {
    expect(isValidThemeColorVariant(themeTm, "accent01", "awesome")).toEqual(
      false
    );
  });

  it("should return false when no variant is passed", () => {
    expect(isValidThemeColorVariant(themeTm, "brand")).toEqual(false);
  });

  it("should return false when an invalid color is passed", () => {
    expect(isValidThemeColorVariant(themeTm, "fakecolor")).toEqual(false);
  });

  it("should use the tm theme by default", () => {
    expect(isValidThemeColorVariant(undefined, "accent01", "dark")).toEqual(
      true
    );
  });
});
