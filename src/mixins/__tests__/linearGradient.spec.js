import { linearGradient } from "../";

describe("linearGradient", () => {
  it("should return a background-image style rule when deg and stops args are passed", () => {
    expect(
      linearGradient({
        deg: "256deg",
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return no rule when only deg is passed", () => {
    expect(
      linearGradient({
        deg: "256deg"
      })
    ).toMatchSnapshot();
  });

  it("should return no rule when only stops is passed", () => {
    expect(
      linearGradient({
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });
});
