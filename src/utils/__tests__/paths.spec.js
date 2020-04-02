import { pathOr, path } from "../paths";

describe("pathOr", () => {
  const PATH_TO_TEST = ["unit", "user", "name"];

  it("should get the object value by path it has a valid object", () => {
    const USER_NAME = "Jack";
    expect(
      pathOr("Unknown", PATH_TO_TEST, {
        unit: { user: { name: USER_NAME } }
      })
    ).toEqual(USER_NAME);
  });

  it("should return default value when the object is NULL", () => {
    const DEFAULT_VALUE = "Unknown";
    expect(pathOr(DEFAULT_VALUE, PATH_TO_TEST, null)).toEqual(DEFAULT_VALUE);
  });

  it("should return default value when the object is UNDEFINED", () => {
    const DEFAULT_VALUE = "Unknown";
    expect(pathOr(DEFAULT_VALUE, PATH_TO_TEST, undefined)).toEqual(
      DEFAULT_VALUE
    );
  });

  it("should return default value when the is no object", () => {
    const DEFAULT_VALUE = "Unknown";
    expect(pathOr(DEFAULT_VALUE, PATH_TO_TEST)).toEqual(DEFAULT_VALUE);
  });
});

describe("path", () => {
  const PATH_TO_TEST = ["unit", "user", "name"];

  it("should get the object value by path it has a valid object", () => {
    const USER_NAME = "Jack";
    expect(
      path(PATH_TO_TEST, {
        unit: { user: { name: USER_NAME } }
      })
    ).toEqual(USER_NAME);
  });

  it("should return UNDEFINED for invalid path", () => {
    const USER_NAME = "Jack";
    expect(
      path(["invalid", "path"], {
        unit: { user: { name: USER_NAME } }
      })
    ).not.toBeDefined();
  });
});
