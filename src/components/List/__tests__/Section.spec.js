import React from "react";
import { render } from "react-testing-library";

import Section from "../Section";

describe("<Section />", () => {
  it("should render correctly", () => {
    // GIVEN
    // WHEN
    const { container } = render(
      <Section title="Some title">
        <div>content</div>
      </Section>
    );

    // THEN
    expect(container.firstChild).toMatchSnapshot();
  });
});
