import { backgroundImage } from "../";

describe("backgroundImage", () => {
  it("should return a background-image style rule when a backgroundImage arg is passed", () => {
    expect(
      backgroundImage({
        backgroundImage: "https://placekitten.com/g/826/465"
      })
    ).toMatchSnapshot();
  });

  it("should return a background-image style rule when deg and stops args are passed", () => {
    expect(
      backgroundImage({
        deg: "256deg",
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return a background-image style rule when backgroundImage, deg, and stops args are passed", () => {
    expect(
      backgroundImage({
        backgroundImage: "https://placekitten.com/g/826/465",
        deg: "256deg",
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return no rule when only a deg arg is passed", () => {
    expect(
      backgroundImage({
        deg: "256deg"
      })
    ).toMatchSnapshot();
  });

  it("should return no rule when only a stops arg is passed", () => {
    expect(
      backgroundImage({
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });
});
