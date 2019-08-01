import BODY_01 from "../body01";

describe("BODY_01", () => {
  it("should return the correct values", () => {
    expect(BODY_01).toMatchSnapshot();
  });
});
