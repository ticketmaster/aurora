import React from "react";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

import Portal from "../PopOverPortal";

describe("PopOverPortal", () => {
  let getTimeMock;
  let mock;

  beforeEach(() => {
    getTimeMock = jest.fn(() => 1234);
    global.Date = jest.fn(() => ({ getTime: getTimeMock }));

    mock = jest
      .spyOn(ReactDOM, "createPortal")
      .mockImplementation((children, container) => (
        <test-portal container={container}>{children}</test-portal>
      ));
  });

  afterEach(() => {
    mock.mockRestore();
  });

  describe("with no shadow DOM", () => {
    let element;

    beforeEach(() => {
      element = renderer.create(<Portal>test</Portal>);
    });

    afterEach(() => {
      global.window.document.body.innerHTML = "";
    });

    describe("when rendering a portal", () => {
      it("should render the portal directly under the body element", () => {
        expect(element.toJSON()).toMatchSnapshot();
      });

      describe("when the ref callback is invoked", () => {
        beforeEach(() => {
          element.getInstance().refCallback({});
        });

        it("should remove the probe node and render a portal instead", () => {
          expect(element.toJSON()).toMatchSnapshot();
        });

        it("should attach the container directly on the body", () => {
          expect(element.toJSON().props.container.parentNode).toBe(
            document.body
          );
        });

        describe("unmounting", () => {
          beforeEach(() => {
            element.getInstance().componentWillUnmount();
          });

          it("should remove the container from document.body", () => {
            expect(global.window.document.body.innerHTML).toBe("");
          });
        });
      });
    });
  });

  describe("with shadow DOM", () => {
    let element;
    let getRootNode;
    let shadowRoot;

    beforeEach(() => {
      element = renderer.create(<Portal>test</Portal>);
      shadowRoot = { appendChild: jest.fn() };
      getRootNode = jest.fn().mockReturnValue(shadowRoot);
    });

    afterEach(() => {
      global.window.document.body.innerHTML = "";
    });

    describe("when rendering a portal", () => {
      it("should render the portal directly under the body element", () => {
        expect(element.toJSON()).toMatchSnapshot();
      });

      describe("when the ref callback is invoked", () => {
        beforeEach(() => {
          element.getInstance().refCallback({ getRootNode });
        });

        it("should remove the probe node and render a portal instead", () => {
          expect(element.toJSON()).toMatchSnapshot();
        });

        it("should attach the container directly on the body", () => {
          expect(shadowRoot.appendChild).toHaveBeenCalledWith(
            element.toJSON().props.container
          );
        });
      });
    });
  });
});
