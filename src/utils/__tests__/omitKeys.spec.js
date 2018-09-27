import omitKeys from "../omitKeys";

describe("omitKeys", () => {
  it("removes specified keys from object", () =>
    expect(omitKeys(["foo", "baz"], { foo: 1, bar: 2, baz: 3 })).toEqual({
      bar: 2
    }));
});
