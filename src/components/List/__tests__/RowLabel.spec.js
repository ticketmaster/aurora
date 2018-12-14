import React from "react";
import renderer from "react-test-renderer";
import RowLabel from "../RowLabel";

describe("<RowLabel />", () => {
  it("renders RowLabel", () => {
    const component = renderer.create(
      <RowLabel index={0}>test label</RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders opened RowLabel", () => {
    const component = renderer.create(
      <RowLabel isOpen index={0}>
        test label
      </RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders RowLabel variant `positive`", () => {
    const component = renderer.create(
      <RowLabel index={0} variant="positive">
        test label
      </RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders RowLabel variant `alert`", () => {
    const component = renderer.create(
      <RowLabel index={0} variant="alert">
        test label
      </RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders RowLabel variant `accent`", () => {
    const component = renderer.create(
      <RowLabel index={0} variant="alert">
        test label
      </RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders RowLabel variant `caution`", () => {
    const component = renderer.create(
      <RowLabel index={0} variant="alert">
        test label
      </RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders RowLabel variant `neutral`", () => {
    const component = renderer.create(
      <RowLabel index={0} variant="alert">
        test label
      </RowLabel>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders RowLabel without children", () => {
    const component = renderer.create(<RowLabel index={0} />);
    const instance = component.getInstance();
    expect(instance).toBe(null);
  });
});
