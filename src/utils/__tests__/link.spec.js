import { getRelByTarget, getAsProp } from "..";

describe("getRelByTarget", () => {
  it('should return "noopener" when target equals "_blank"', () => {
    expect(getRelByTarget("_blank")).toEqual("noopener");
  });

  it('should return rel when target does not equal "_blank"', () => {
    expect(getRelByTarget("_self", "tag")).toEqual("tag");
  });
});

describe("getAsProp", () => {
  [
    {
      href: "https://ticketmaster.com",
      expected: { as: "a" }
    },
    {
      href: "",
      onClick: () => {},
      expected: { as: "button" }
    },
    {
      expected: { as: "span" }
    }
  ].forEach(({ href, onClick, expected }) => {
    it(`should return ${expected} when href equals ${href} and onClick equals ${onClick}`, () => {
      expect(getAsProp({ href, onClick })).toEqual(expected);
    });
  });
});
