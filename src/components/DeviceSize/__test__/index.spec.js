import React from "react";
import { render } from "react-testing-library";
import DisplayFor from "../";

jest.mock("../Context", () => ({
  Consumer: ({ children }) => children({ cssOnly: true })
}));

describe("DisplayFor", () => {
  describe("cssOnly", () => {
    it("renders nothing when value is null", () => {
      const { container } = render(<DisplayFor small>Content</DisplayFor>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it("renders custom display prop", () => {
      const { container } = render(
        <DisplayFor display="flex" medium large xLarge>
          Content
        </DisplayFor>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
