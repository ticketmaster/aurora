import React from "react";
import renderer from "react-test-renderer";

import NavBar from "../index";

describe("NavBar", () => {
  it("renders with defaults", () =>
    expect(
      renderer
        .create(
          <NavBar>
            <NavBar.MenuButton isFirst />
            Content
            <NavBar.LinkRow>
              <NavBar.Link>Link 1</NavBar.Link>
              <NavBar.Link>Link 2</NavBar.Link>
              <NavBar.Link>Link 3</NavBar.Link>
              <NavBar.Link>
                Link 4
                <NavBar.LinkList style={{ minWidth: "258px" }}>
                  <NavBar.Link>Link 5</NavBar.Link>
                  <NavBar.Link>Link 6</NavBar.Link>
                  <NavBar.Link>Link 7 With Really Long Content </NavBar.Link>
                </NavBar.LinkList>
              </NavBar.Link>
            </NavBar.LinkRow>
            <NavBar.SearchButton />
            <NavBar.UserButton />
            <NavBar.TextButton isLast>Text Button!</NavBar.TextButton>
          </NavBar>
        )
        .toJSON()
    ).toMatchSnapshot());

  it("renders fixed", () =>
    expect(
      renderer
        .create(
          <NavBar fixed>
            <NavBar.MenuButton isFirst />
            Content
            <NavBar.LogoContainer href="http://localhost/new/">
              Logo
            </NavBar.LogoContainer>
            <NavBar.LinkRow>
              <NavBar.Link href="/">Link 1</NavBar.Link>
              <NavBar.Link>Link 2</NavBar.Link>
              <NavBar.Link>Link 3</NavBar.Link>
              <NavBar.Link>
                Link 4
                <NavBar.LinkList style={{ minWidth: "258px" }}>
                  <NavBar.Link>Link 5</NavBar.Link>
                  <NavBar.Link>Link 6</NavBar.Link>
                  <NavBar.Link>Link 7 With Really Long Content </NavBar.Link>
                </NavBar.LinkList>
              </NavBar.Link>
            </NavBar.LinkRow>
          </NavBar>
        )
        .toJSON()
    ).toMatchSnapshot());

  it("renders inverted", () =>
    expect(
      renderer
        .create(
          <NavBar invert>
            <NavBar.MenuButton isFirst invert />
            <NavBar.LogoContainer href="http://localhost/new/">
              Logo
            </NavBar.LogoContainer>
            <NavBar.LinkRow>
              <NavBar.Link>Link 1</NavBar.Link>
              <NavBar.Link>Link 2</NavBar.Link>
              <NavBar.Link>Link 3</NavBar.Link>
              <NavBar.Link>
                Link 4
                <NavBar.LinkList style={{ minWidth: "258px" }}>
                  <NavBar.Link>Link 5</NavBar.Link>
                  <NavBar.Link>Link 6</NavBar.Link>
                  <NavBar.Link>Link 7 With Really Long Content </NavBar.Link>
                </NavBar.LinkList>
              </NavBar.Link>
            </NavBar.LinkRow>
          </NavBar>
        )
        .toJSON()
    ).toMatchSnapshot());
});
