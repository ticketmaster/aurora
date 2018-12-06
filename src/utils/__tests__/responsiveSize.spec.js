import { getResponsiveSize } from "../responsiveSize";

describe("getResponsiveSize", () => {
  [
    [{}, "hecto"],
    [{ size: "uno" }, "uno"],
    [
      { size: "uno", responsiveSize: { xSmall: "hecto" } },
      {
        xSmall: "hecto"
      }
    ],
    [
      { size: "uno", responsiveSize: { xLarge: "hecto" } },
      {
        xSmall: "uno",
        xLarge: "hecto"
      }
    ],
    [
      {
        size: "mini",
        responsiveSize: {
          xSmall: "mini",
          small: "uno",
          medium: "hecto",
          large: "kilo",
          xLarge: "giga"
        }
      },
      {
        xSmall: "mini",
        small: "uno",
        medium: "hecto",
        large: "kilo",
        xLarge: "giga"
      }
    ]
  ].forEach(([args, expected]) => {
    it(`should return ${JSON.stringify(
      expected
    )} when args equal ${JSON.stringify(args)}`, () => {
      expect(getResponsiveSize(args)).toEqual(expected);
    });
  });
});
