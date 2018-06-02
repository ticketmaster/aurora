import React from "react";
import renderer from "react-test-renderer";
import { render, Simulate } from "react-testing-library";

import { Button } from "../";

describe("<Button />", () => {
  it("renders standard button correctly", () => {
    const component = renderer.create(
      <Button variant="standard">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard disabled button correctly", () => {
    const component = renderer.create(
      <Button variant="standard" disabled>
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline button correctly", () => {
    const component = renderer.create(
      <Button variant="outline">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline disabled button correctly", () => {
    const component = renderer.create(
      <Button variant="outline" disabled>
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent button correctly", () => {
    const component = renderer.create(
      <Button variant="transparent">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent disabled button correctly", () => {
    const component = renderer.create(
      <Button variant="transparent" disabled>
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders link button correctly", () => {
    const component = renderer.create(
      <Button href="/" variant="standard">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should invoke an onClick handler when passed", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button variant="standard" onClick={onClick}>
        Dummy Label
      </Button>
    );

    Simulate.click(getByText("Dummy Label"));
    expect(onClick).toHaveBeenCalled();
  });
});
