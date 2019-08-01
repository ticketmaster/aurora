import MICRO_01 from "../micro01";

describe("MICRO_01", () => {
  it("should return the correct values", () => {
    expect(MICRO_01).toMatchSnapshot();
  });
});
