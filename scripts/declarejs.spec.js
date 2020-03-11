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

  describe("for a class export", () => {
    it("should generate a single export", () => {
      const code = `
        import React from 'react';

        export class Modal extends React.Component {
          state = {
            open: false
          }
        }
      `;

      expect(cleanLines(generateStub(code))).toEqual([
        "export const Modal: any;"
      ]);
    });
  });

  describe("for a function export", () => {
    it("should generate a single export", () => {
      const code = `
        import React from 'react';

        export function test() {
          const state = {
            open: false
          };
        }
      `;

      expect(cleanLines(generateStub(code))).toEqual([
        "export const test: any;"
      ]);
    });
  });

  describe("for a export default of literal object", () => {
    it("should generate a single export", () => {
      const code = `
          export default {
          Link,
          LinkList,
          LinkListItem,
          LinkRow
        };
        `;

      expect(cleanLines(generateStub(code))).toEqual([
        "declare const component: any;",
        "export default component;"
      ]);
    });
  });
});
