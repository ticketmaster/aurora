import React from "react";
import renderer from "react-test-renderer";
import { render, Simulate } from "react-testing-library";

import { Button } from "../";

describe("<Button />", () => {
  it("renders standard small size button correctly", () => {
    const component = renderButton({ size: "small" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard regular size button correctly", () => {
    const component = renderButton();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard large size button correctly", () => {
    const component = renderButton({ size: "large" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders standard regular size disabled button correctly", () => {
    const component = renderButton({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special small size button correctly", () => {
    const component = renderButton({ variant: "special", size: "small" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special regular size button correctly", () => {
    const component = renderButton({ variant: "special" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special large size button correctly", () => {
    const component = renderButton({ variant: "special", size: "large" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders special regular size disabled button correctly", () => {
    const component = renderButton({ variant: "special", disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline small size button correctly", () => {
    const component = renderButton({ variant: "outline", size: "small" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline regular size button correctly", () => {
    const component = renderButton({ variant: "outline" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline large size button correctly", () => {
    const component = renderButton({ variant: "outline", size: "large" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders outline regular size disabled button correctly", () => {
    const component = renderButton({ variant: "outline", disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent small size button correctly", () => {
    const component = renderButton({ variant: "transparent", size: "small" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent regular size button correctly", () => {
    const component = renderButton({ variant: "transparent" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent large size button correctly", () => {
    const component = renderButton({ variant: "transparent", size: "large" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders transparent regular size disabled button correctly", () => {
    const component = renderButton({ variant: "transparent", disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders link button correctly", () => {
    const component = renderButton({ href: "/" });
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

function renderButton(props = {}) {
  return renderer.create(<Button {...props}>Dummy Label</Button>, {
    createNodeMock: () => ({
      addEventListener: () => {}
    })
  });
}
