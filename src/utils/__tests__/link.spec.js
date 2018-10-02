import { getRelByTarget } from "..";

describe("getRelByTarget", () => {
  it('should return "noopener" when target equals "_blank"', () => {
    expect(getRelByTarget("_blank")).toEqual("noopener");
  });

  it('should return rel when target does not equal "_blank"', () => {
    expect(getRelByTarget("_self", "tag")).toEqual("tag");
  });
});
