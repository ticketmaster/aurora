/* global document */
import React from "react";
import { render, Simulate, fireEvent } from "react-testing-library";

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

  it("should show LinkItem children on click LinkItem if children are hidden and toggleChildrenOnClick passed", () => {
    const { container } = getContainer({ toggleChildrenOnClick: true });
    Simulate.click(container.querySelector(".list-container"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should hide LinkItem children on LinkItem click if children are shown and toggleChildrenOnClick passed", () => {
    const { container } = getContainer({ toggleChildrenOnClick: true });
    Simulate.click(container.querySelector(".list-container"));
    Simulate.click(container.querySelector(".list-container"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should show LinkItem children on mouse enter", () => {
    const { container } = getContainer();
    Simulate.mouseEnter(container.querySelector(".list-container"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should hide LinkItem children on document click if children are shown", () => {
    const { container } = getContainer({ toggleChildrenOnClick: true });
    Simulate.click(container.querySelector(".list-container"));
    fireEvent.click(document);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("should add/remove document event listener", () => {
    const addEventListener = jest.fn();
    const removeEventListener = jest.fn();
    beforeEach(() => {
      addEventListener.mockClear();
      removeEventListener.mockClear();
      Object.defineProperty(document, "addEventListener", {
        writable: true,
        value: addEventListener
      });
      Object.defineProperty(document, "removeEventListener", {
        writable: true,
        value: removeEventListener
      });
    });

    it("subscribes on document click event on mount", () => {
      const { unmount } = render(
        <LinkItem role="button" toggleChildrenOnClick>
          Button text
        </LinkItem>
      );
      expect(addEventListener).toHaveBeenLastCalledWith(
        "click",
        expect.anything()
      );
      unmount();
    });

    it("unsubscribes from document click event on unmount", () => {
      const { unmount } = render(
        <LinkItem role="button" toggleChildrenOnClick>
          Button text
        </LinkItem>
      );
      unmount();
      expect(addEventListener).toHaveBeenLastCalledWith(
        "click",
        expect.anything()
      );
    });
  });
});
