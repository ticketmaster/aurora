import { sluggify } from "..";

describe("sluggify", () => {
  it("Should return the same string with all lower case letter and no white spaces", () => {
    expect(sluggify("This is a Test Case")).toEqual("thisisatestcase");
  });

  it("should return undefind when givin undefined", () => {
    expect(sluggify(undefined)).toEqual("");
  });
});
