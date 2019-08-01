import BASE_STYLE_HEADER from "../baseStyleHeader";

describe("BASE_STYLE_HEADER", () => {
  it("should return the correct values", () => {
    expect(BASE_STYLE_HEADER).toMatchSnapshot();
  });
});
