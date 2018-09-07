import React from "react";
import renderer from "react-test-renderer";
import { render, Simulate } from "react-testing-library";

import { Button } from "../";
import { blur } from "../Base";

describe("<Button />", () => {
  it("renders standard small size button correctly", () => {
    const component = renderer.create(
      <Button size="small">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard regular size button correctly", () => {
    const component = renderer.create(<Button>Dummy Label</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard large size button correctly", () => {
    const component = renderer.create(
      <Button size="large">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard regular size disabled button correctly", () => {
    const component = renderer.create(<Button disabled>Dummy Label</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special small size button correctly", () => {
    const component = renderer.create(
      <Button variant="special" size="small">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special regular size button correctly", () => {
    const component = renderer.create(
      <Button variant="special">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special large size button correctly", () => {
    const component = renderer.create(
      <Button variant="special" size="large">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special regular size disabled button correctly", () => {
    const component = renderer.create(
      <Button variant="special" disabled>
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline small size button correctly", () => {
    const component = renderer.create(
      <Button variant="outline" size="small">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline regular size button correctly", () => {
    const component = renderer.create(
      <Button variant="outline">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline large size button correctly", () => {
    const component = renderer.create(
      <Button variant="outline" size="large">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline regular size disabled button correctly", () => {
    const component = renderer.create(
      <Button variant="outline" disabled>
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent small size button correctly", () => {
    const component = renderer.create(
      <Button variant="transparent" size="small">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent regular size button correctly", () => {
    const component = renderer.create(
      <Button variant="transparent">Dummy Label</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent large size button correctly", () => {
    const component = renderer.create(
      <Button variant="transparent" size="large">
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent regular size disabled button correctly", () => {
    const component = renderer.create(
      <Button variant="transparent" disabled>
        Dummy Label
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders link button correctly", () => {
    const component = renderer.create(<Button href="/">Dummy Label</Button>);
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

  it("should execute blur method on event target", () => {
    const mockFn = jest.fn();
    const mockEventObj = {
      target: {
        blur: mockFn
      }
    };
    blur(mockEventObj);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
