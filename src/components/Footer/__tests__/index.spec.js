import React from "react";
import { render } from "react-testing-library";

import Footer from "../index";

describe("<Footer />", () => {
  it("renders Footer correctly", () => {
    const { container } = render(
      <Footer>
        <div>Los Angeles</div>
        <div>New York</div>
        <div>Maimi</div>
      </Footer>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
