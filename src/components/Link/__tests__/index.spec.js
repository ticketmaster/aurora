import React from "react";
import { render, Simulate } from "react-testing-library";
import { LinkList, LinkItem as Link } from "../";

describe("<Link>", () => {
  it("opens <LinkList> on mouse enter", () => {
    const { container } = render(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    Simulate.mouseEnter(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("closes <LinkList> on mouse leave", () => {
    const { container } = render(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    Simulate.mouseEnter(container.querySelector(".list-container"));

    Simulate.mouseLeave(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("opens <LinkList> on touch start", () => {
    const { container } = render(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    Simulate.touchStart(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("closes <LinkList> on touch start", () => {
    const { container } = render(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    Simulate.touchStart(container.querySelector(".list-container"));

    Simulate.touchStart(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("does not open when link has no content", () => {
    const { container } = render(<Link href="/">Content</Link>);

    Simulate.touchStart(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("does not close when link has no content", () => {
    const { container } = render(<Link href="/">Content</Link>);

    Simulate.touchStart(container.querySelector(".list-container"));

    Simulate.touchEnd(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });
});
