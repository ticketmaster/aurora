import React from "react";
import { render, Simulate } from "react-testing-library";
import renderer from "react-test-renderer";

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

  it("renders LinkItem as button when disableHoverEvents equals true", () => {
    const { container } = render(
      <LinkItem role="button" disableHoverEvents>
        Button text
      </LinkItem>
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

  it("renders LinkItem as link when disableHoverEvents equals true", () => {
    const { container } = render(
      <LinkItem
        role="link"
        target="_blank"
        href="http://localhost/new/"
        disableHoverEvents
      >
        Link text
      </LinkItem>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders LinkItem children correctly", () => {
    const { container } = getContainer();
    expect(container).toMatchSnapshot();
  });

  it("opens onMouseEnter and closes onMouseLeave when disableHoverEvents equals false", () => {
    const { container } = getContainer();
    const linkItem = container.querySelector(".list-container");

    Simulate.mouseEnter(linkItem);
    expect(linkItem.classList.contains("list-container--open")).toEqual(true);

    Simulate.mouseLeave(linkItem);
    expect(linkItem.classList.contains("list-container--closed")).toEqual(true);
  });

  it("does not open onMouseEnter when disableHoverEvents equals true", () => {
    const { container } = getContainer({ disableHoverEvents: true });
    const linkItem = container.querySelector(".list-container");

    Simulate.mouseEnter(linkItem);
    expect(linkItem.classList.contains("list-container--closed")).toEqual(true);
  });

  it("toggles onClick", () => {
    const { container } = getContainer();
    const linkItem = container.querySelector(".list-container");

    Simulate.click(linkItem);
    expect(linkItem.classList.contains("list-container--open")).toEqual(true);

    Simulate.click(linkItem);
    expect(linkItem.classList.contains("list-container--closed")).toEqual(true);
  });

  it.skip("closes using handleOutsideClick when disableHoverEvents equals true", async () => {
    const component = renderer.create(
      <div>
        <LinkItem role="button" disableHoverEvents>
          Button text
          <LinkList onItemClick={mockFn}>
            {countries.map((option, index) => (
              <LinkItem index={index} key={option.value} href="/" role="link">
                {option.text}
              </LinkItem>
            ))}
          </LinkList>
        </LinkItem>
        <span className="span--outside">Outside Span</span>
      </div>
    );

    const linkItem = component.querySelector(".list-container");

    Simulate.click(linkItem);
    expect(linkItem.classList.contains("list-container--open")).toEqual(true);

    const outsideSpan = component.querySelector(".span--outside");

    Simulate.click(outsideSpan);
    expect(linkItem.classList.contains("list-container--closed")).toEqual(true);
  });
});
