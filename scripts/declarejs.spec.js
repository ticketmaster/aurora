import { generateStub } from "./declarejs";

const cleanLines = input =>
  input
    .split("\n")
    .filter(s => s !== "")
    .map(s => s.trim());

describe("declarejs, when generating types", () => {
  describe("for a simple default export", () => {
    it("should generate a single default export of type 'any'", () => {
      expect(cleanLines(generateStub("export default Card;"))).toEqual([
        "declare const component: any;",
        "export default component;"
      ]);
    });
  });

  describe("for a complex named export", () => {
    it("should generate a single named export", () => {
      const complexInput = `export const withDeviceSize = Component => props => (
                <Consumer>{value => <Component deviceSize={value} {...props} />}</Consumer>
              );`;
      expect(cleanLines(generateStub(complexInput))).toEqual([
        "export const withDeviceSize: any;"
      ]);
    });
  });

  describe("for a complex export with multiple names", () => {
    it("should generate multiple named exports", () => {
      expect(
        cleanLines(
          generateStub(
            "export const { Provider, Consumer } = React.createContext({ isSmall: true });"
          )
        )
      ).toEqual(["export const Provider: any;", "export const Consumer: any;"]);
    });
  });
});
