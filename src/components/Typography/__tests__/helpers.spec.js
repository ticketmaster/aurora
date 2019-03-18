import typographyClassnames from "../helpers";

describe("typographyClassnames", () => {
  it("should return empty string when no elem is passed", () => {
    expect(typographyClassnames()).toEqual("");
  });

  it("should return elem className when elem is passed", () => {
    expect(typographyClassnames("h1")).toEqual("h1");
  });

  it("should return elem and weight modifier classNames when elem and weight are passed", () => {
    expect(typographyClassnames("h1", { weight: "extraBold" })).toEqual(
      "h1 h1--extraBold"
    );
  });

  it("should return elem and textTransform modifier classNames when elem and textTransform are passed", () => {
    expect(typographyClassnames("h1", { textTransform: "uppercase" })).toEqual(
      "h1 h1--uppercase"
    );
  });

  it("should return elem and color/variant modifier classNames when elem and color/variant are passed", () => {
    expect(
      typographyClassnames("h1", { color: "accent01", variant: "dark" })
    ).toEqual("h1 h1--accent01-dark");
  });

  it("should return elem, weight, and color/variant modifier classNames when elem, weight and color/variant are passed", () => {
    expect(
      typographyClassnames("h1", {
        weight: "semiBold",
        color: "accent01",
        variant: "dark"
      })
    ).toEqual("h1 h1--semiBold h1--accent01-dark");
  });
});
