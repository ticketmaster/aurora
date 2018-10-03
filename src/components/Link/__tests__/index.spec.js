import React from "react";
import { render, Simulate } from "react-testing-library";
import { create } from "react-test-renderer";
import { LinkList, LinkItem as Link } from "../";

describe("<Link>", () => {
  describe("touch events exist", () => {
    global.document.documentElement.ontouchstart = jest.fn();

    afterAll(() => {
      delete global.document.documentElement.ontouchstart;
    });

    it("sets state.touchEventsExist to true", () => {
      const container = create(
        <Link href="/">
          Content{" "}
          <LinkList>
            <Link href="/page/">Sub Content</Link>
          </LinkList>
        </Link>
      );

      const {
        state: { touchEventsExist }
      } = container.getInstance();

      expect(touchEventsExist).toBeTruthy();
    });

    it("does not open <LinkList> on mouse enter", () => {
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
  });

  it("sets state.touchEventsExist to false", () => {
    const container = create(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    const {
      state: { touchEventsExist }
    } = container.getInstance();

    expect(touchEventsExist).not.toBeTruthy();
  });

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

  it("opens <LinkList> on click", () => {
    const { container } = render(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    Simulate.click(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("closes <LinkList> on click", () => {
    const { container } = render(
      <Link href="/">
        Content{" "}
        <LinkList>
          <Link href="/page/">Sub Content</Link>
        </LinkList>
      </Link>
    );

    Simulate.click(container.querySelector(".list-container"));

    Simulate.click(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("does not open when link has no content", () => {
    const { container } = render(<Link href="/">Content</Link>);

    Simulate.click(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("does not close when link has no content", () => {
    const { container } = render(<Link href="/">Content</Link>);

    Simulate.click(container.querySelector(".list-container"));

    expect(container.firstChild).toMatchSnapshot();
  });
});
