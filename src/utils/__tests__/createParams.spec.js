import createParams from "../createParams";

describe("createParams", () => {
  it("should return an empty string when an empty obj is passed", () => {
    expect(createParams({})).toEqual("");
  });

  it("should return a query string when a populated obj is passed", () => {
    const qs = createParams({
      width: 100,
      height: 100,
      fit: "crop"
    });

    expect(qs.startsWith("?"));
    expect(qs.includes("width=100"));
    expect(qs.includes("height=100"));
    expect(qs.includes("fit=crop"));
  });

  it("should encode values when required", () => {
    const qs = createParams({
      width: 100,
      height: 100,
      fit: "top center"
    });

    expect(qs.startsWith("?"));
    expect(qs.includes("width=100"));
    expect(qs.includes("height=100"));
    expect(qs.includes("fit=top%20center"));
  });

  it("should ignore keys that have a value of undefined", () => {
    const qs = createParams({
      width: 100,
      height: 100,
      fit: undefined
    });

    expect(qs.startsWith("?"));
    expect(qs.includes("width=100"));
    expect(qs.includes("height=100"));
    expect(!qs.includes("fit"));
  });
});
