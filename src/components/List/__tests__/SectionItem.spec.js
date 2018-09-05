import React from "react";
import { render, Simulate } from "react-testing-library";

import { sections } from "../../../../catalog/pages/list_row/mock";
import SectionItem from "../SectionItem";
import ListContainer from "../Container";

describe("<SectionItem />", () => {
  beforeEach(() => {
    const modalRoot = global.document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    modalRoot.setAttribute("data-testid", "modal-root");
    const body = global.document.querySelector("body");
    body.appendChild(modalRoot);
  });

  afterEach(() => {
    const body = global.document.querySelector("body");
    const modalRoot = global.document.getElementById("modal-root");
    body.removeChild(modalRoot);
  });

  it('renders SectionItem without "url" correctly', () => {
    const { container } = render(
      <SectionItem
        item={sections[0].items[0]}
        key={sections[0].items[0].title}
      />
    );
    Simulate.click(container.querySelector(".section-item"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders SectionItem with "url" correctly', () => {
    const { container } = render(
      <SectionItem
        item={{ ...sections[0].items[0], url: "https://ticketmaster.com/" }}
        key={sections[0].items[0].title}
      />
    );
    Simulate.click(container.querySelector(".section-item"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders SectionItem with children correctly", () => {
    const { container } = render(
      <ListContainer onRowCollapse={() => {}} onModalClose={() => {}}>
        <SectionItem
          item={sections[0].items[0]}
          key={sections[0].items[0].title}
        >
          <div>Asia</div>
          <div>Africa</div>
          <div>North America</div>
        </SectionItem>
      </ListContainer>
    );
    Simulate.click(container.querySelector(".section-item"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
