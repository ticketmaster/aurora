import React from "react";
import { render } from "react-testing-library";
import { withModal, ModalProvider } from "../context";

describe("withModal", () => {
  it("should render an underlying component and pass modal props", () => {
    const ComponentUnderTest = ({ modal, ...props }) => {
      expect(modal).toMatchSnapshot();

      return <div {...props}>Component Under Test</div>;
    };

    const Component = withModal(ComponentUnderTest);

    const { container } = render(
      <ModalProvider value={{ modal: "options" }}>
        <Component demo="prop" />
      </ModalProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
