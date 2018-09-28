import React from "react";
import { render, Simulate } from "react-testing-library";

import LinkList from "../List";
import LinkListItem from "../ListItem";

const mockFn = jest.fn();

const countries = [
  {
    value: "en-US",
    text: "USA (English)",
    label: "United States"
  },
  {
    value: "en-CA",
    text: "Canada (English)",
    label: "Canada"
  },
  {
    value: "fr-CA",
    text: "Canada (Français)",
    label: "Canada"
  }
];

describe("<LinkList />", () => {
  it("renders LinkList correctly when its open", () => {
    const { container } = render(
      <LinkList onItemClick={mockFn} selectedIndex={0}>
        {countries.map((option, index) => (
          <LinkListItem index={index} key={option.value}>
            {option.text}
          </LinkListItem>
        ))}
      </LinkList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders LinkList correctly with list items as links", () => {
    const { container } = render(
      <LinkList onItemClick={mockFn} selectedIndex={0}>
        {countries.map((option, index) => (
          <LinkListItem
            index={index}
            key={option.value}
            onClick={mockFn}
            href="/"
          >
            {option.text}
          </LinkListItem>
        ))}
      </LinkList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("onItemClick in LinkList is called when a list item is clicked", () => {
    const onOptionSelected = mockFn;
    const { container } = render(
      <LinkList onItemClick={onOptionSelected} selectedIndex={0}>
        {countries.map((option, index) => (
          <LinkListItem index={index} key={option.value}>
            {option.text}
          </LinkListItem>
        ))}
      </LinkList>
    );

    Simulate.click(container.querySelector(".links__list__item"));
    expect(onOptionSelected).toHaveBeenCalled();
  });

  it("renders content after container", () => {
    const { container } = render(
      <LinkList
        onItemClick={mockFn}
        selectedIndex={0}
        renderAfter={<span>after content</span>}
      >
        {countries.map((option, index) => (
          <LinkListItem
            index={index}
            key={option.value}
            onClick={mockFn}
            href="/"
          >
            {option.text}
          </LinkListItem>
        ))}
      </LinkList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
