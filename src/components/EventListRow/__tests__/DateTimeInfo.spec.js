import React from "react";
import renderer from "react-test-renderer";

import DateTimeInfo from "../DateTimeInfo";

const mockDate = { dateTitle: "APR 23", dateSubTitle: "Thu, 8:00PM" };

describe("<DateTimeInfo />", () => {
  it("renders DateTimeInfo correctly", () => {
    const component = renderer.create(<DateTimeInfo date={mockDate} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
