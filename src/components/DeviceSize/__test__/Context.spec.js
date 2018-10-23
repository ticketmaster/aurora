import React from "react";
import { render } from "react-testing-library";
import { withDeviceSize } from "../Context";

describe("withDeviceSize", () => {
  it("should render an underlying component and pass the deviceSize", () => {
    const ComponentUnderTest = ({ deviceSize, ...props }) => {
      expect(deviceSize).toMatchSnapshot();

      return <div {...props}>Component under test</div>;
    };

    const Component = withDeviceSize(props => (
      <ComponentUnderTest {...props} />
    ));

    const { container } = render(<Component demo="prop" />);

    expect(container).toMatchSnapshot();
  });
});
