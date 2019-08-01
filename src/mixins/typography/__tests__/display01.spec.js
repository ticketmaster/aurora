import DISPLAY_01 from "../display01";

describe("DISPLAY_01", () => {
  it("should return the correct values", () => {
    expect(DISPLAY_01).toMatchSnapshot();
  });
});
