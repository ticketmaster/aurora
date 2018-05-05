import React from "react";
import renderer from "react-test-renderer";

import { Container, Row, Column } from "../";

describe("Grid", () => {
  it("renders with defaults", () => {
    const component = renderer.create(
      <Container>
        <Row>
          <Column>Content</Column>
        </Row>
      </Container>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders small size defined", () => {
    const component = renderer.create(
      <Container>
        <Row>
          <Column small={6}>Content</Column>
        </Row>
      </Container>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders medium and up when medium size defined", () => {
    const component = renderer.create(
      <Container>
        <Row>
          <Column medium={6}>Content</Column>
        </Row>
      </Container>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders multiple sizes defined", () => {
    const component = renderer.create(
      <Container>
        <Row>
          <Column small={12} medium={6} large={3} xLarge={1}>
            Content
          </Column>
        </Row>
      </Container>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
