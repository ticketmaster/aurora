import { getFontColor, getFontHue } from "..";
import { colors } from "../../theme";

describe("getFontColor", () => {
  it("should return the primary dark color when variant equals dark and primary equals true", () => {
    expect(getFontColor({ variant: "dark", primary: true })).toEqual(
      colors.onyx.base
    );
  });

  it("should return the secondary dark color when variant equals dark and secondary equals true", () => {
    expect(getFontColor({ variant: "dark", secondary: true })).toEqual(
      colors.onyx.light
    );
  });

  it("should return the disabled dark color when variant equals dark and disabled equals true", () => {
    expect(getFontColor({ variant: "dark", disabled: true })).toEqual(
      colors.onyx.muted
    );
  });

  it("should return the primary light color when variant equals light and primary equals true", () => {
    expect(getFontColor({ variant: "light", primary: true })).toEqual(
      colors.white.base
    );
  });

  it("should return the secondary light color when variant equals light and secondary equals true", () => {
    expect(getFontColor({ variant: "light", secondary: true })).toEqual(
      colors.white.light
    );
  });

  it("should return the disabled light color when variant equals light and disabled equals true", () => {
    expect(getFontColor({ variant: "light", disabled: true })).toEqual(
      colors.white.muted
    );
  });

  it("should return the primary accent color when variant equals accent and primary equals true", () => {
    expect(
      getFontColor({ variant: "accent", accent: "azure", primary: true })
    ).toEqual(colors.azure.dark);
  });

  it("should return the secondary accent color when variant equals accent and secondary equals true", () => {
    expect(
      getFontColor({ variant: "accent", accent: "azure", secondary: true })
    ).toEqual(colors.azure.light);
  });

  it("should return the disabled accent color when variant equals accent and disabled equals true", () => {
    expect(
      getFontColor({ variant: "accent", accent: "azure", disabled: true })
    ).toEqual(colors.azure.muted);
  });
});

describe("getFontHue", () => {
  it("should return the primary dark color when fontColor equals onyx and primary equals true", () => {
    expect(getFontHue({ fontColor: colors.onyx, primary: true })).toEqual(
      colors.onyx.base
    );
  });

  it("should return the secondary dark color when fontColor equals onyx and secondary equals true", () => {
    expect(getFontHue({ fontColor: colors.onyx, secondary: true })).toEqual(
      colors.onyx.light
    );
  });

  it("should return the disabled dark color when fontColor equals onyx and disabled equals true", () => {
    expect(getFontHue({ fontColor: colors.onyx, disabled: true })).toEqual(
      colors.onyx.muted
    );
  });

  it("should return the primary light color when fontColor equals white and primary equals true", () => {
    expect(getFontHue({ fontColor: colors.white, primary: true })).toEqual(
      colors.white.base
    );
  });

  it("should return the secondary light color when fontColor equals white and secondary equals true", () => {
    expect(getFontHue({ fontColor: colors.white, secondary: true })).toEqual(
      colors.white.light
    );
  });

  it("should return the disabled light color when fontColor equals white and disabled equals true", () => {
    expect(getFontHue({ fontColor: colors.white, disabled: true })).toEqual(
      colors.white.muted
    );
  });

  it("should return the primary accent color when fontColor equals an accent with multiple shades and primary equals true", () => {
    expect(
      getFontHue({ fontColor: colors.azure, accent: "azure", primary: true })
    ).toEqual(colors.azure.dark);
  });

  it("should return the secondary accent color when fontColor equals an accent with multiple shades and secondary equals true", () => {
    expect(
      getFontHue({ fontColor: colors.azure, accent: "azure", secondary: true })
    ).toEqual(colors.azure.light);
  });

  it("should return the disabled accent color when fontColor equals an accent with multiple shades and disabled equals true", () => {
    expect(
      getFontHue({ fontColor: colors.azure, accent: "azure", disabled: true })
    ).toEqual(colors.azure.muted);
  });

  it("should return the singular accent color when fontColor equals an accent with a singular shade and primary equals true", () => {
    expect(
      getFontHue({
        fontColor: colors.aquamarine,
        accent: "aquamarine",
        primary: true
      })
    ).toEqual(colors.aquamarine);
  });

  it("should return the singular accent color when fontColor equals an accent with a singular shade and secondary equals true", () => {
    expect(
      getFontHue({
        fontColor: colors.aquamarine,
        accent: "aquamarine",
        secondary: true
      })
    ).toEqual(colors.aquamarine);
  });

  it("should return the singular accent color when fontColor equals an accent with a singular shade and disabled equals true", () => {
    expect(
      getFontHue({
        fontColor: colors.aquamarine,
        accent: "aquamarine",
        disabled: true
      })
    ).toEqual(colors.aquamarine);
  });
});
