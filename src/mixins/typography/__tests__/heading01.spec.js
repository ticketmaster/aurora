import HEADING_01 from "../heading01";

describe("HEADING_01", () => {
  it("should return the correct values", () => {
    expect(HEADING_01).toMatchSnapshot();
  });
});
