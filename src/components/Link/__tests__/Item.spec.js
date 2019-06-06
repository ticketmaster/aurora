import React from "react";
import { render } from "react-testing-library";

import LinkList from "../List";
import LinkItem from "../Item";

const mockFn = jest.fn();

const countries = [
  {
    value: "en-US",
    text: "USA (English)"
  },
  {
    value: "en-CA",
    text: "Canada (English)"
  },
  {
    value: "fr-CA",
    text: "Canada (Français)"
  }
];

describe("<LinkItem />", () => {
  const getContainer = props =>
    render(
      <LinkItem role="button" {...props}>
        Button text
        <LinkList onItemClick={mockFn}>
          {countries.map((option, index) => (
            <LinkItem index={index} key={option.value} href="/" role="link">
              {option.text}
            </LinkItem>
          ))}
        </LinkList>
      </LinkItem>
    );

  it("renders LinkItem as button ", () => {
    const { container } = render(
      <LinkItem role="button">Button text</LinkItem>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders LinkItem as link", () => {
    const { container } = render(
      <LinkItem role="link" target="_blank" href="http://localhost/new/">
        Link text
      </LinkItem>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders LinkItem children correctly", () => {
    const { container } = getContainer();
    expect(container).toMatchSnapshot();
  });
});
