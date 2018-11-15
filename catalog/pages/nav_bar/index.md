### Default

```hint
The drawer is implemented using a React Portal. This requires a div with ID "modal-root" outside of the react root.
```

```react
responsive: false
span: 6
state: { invert: false }
---
<DrawerProvider>
    <DeviceSizeProvider cssOnly>
        <Header>
            <NavBar message="Hi there this is an optional message. There can be really really really long content here but we are going to try not to overflow this area" position="absolute" invert={state.invert}>
                <NavBar.LogoContainer>
                    Aurora
                </NavBar.LogoContainer>
                <DisplayFor large xLarge>
                    <NavBar.LinkRow>
                        <NavBar.Link href="/">Link 1</NavBar.Link>
                        <NavBar.Link>Link 2</NavBar.Link>
                        <NavBar.Link>Link 3</NavBar.Link>
                        <NavBar.Link>
                            More
                            <NavBar.LinkList style={{ width: "275px", top: '40px', left: 0}} renderAfter={<span>After Content</span>}>
                                <NavBar.LinkListItem href="/">Link 4</NavBar.LinkListItem>
                                <NavBar.LinkListItem>Link 5</NavBar.LinkListItem>
                                <NavBar.LinkListItem>Link 6</NavBar.LinkListItem>
                                <NavBar.LinkListItem>Link 7 With Really Long Content </NavBar.LinkListItem>
                            </NavBar.LinkList>
                        </NavBar.Link>
                    </NavBar.LinkRow>
                </DisplayFor>
                <NavBar.Right>
                    <NavBar.SearchButton />
                    <NavBar.UserButton />
                    <DisplayFor small medium>
                        <NavBar.DrawerMenu header="Content!" style={{ zIndex: "9999"}}>
                            <Spacing top={{xSmall: "moderate"}}>Some Menu Content</Spacing>
                        </NavBar.DrawerMenu>
                    </DisplayFor>
                </NavBar.Right>
            </NavBar>
        </Header>
        <Spacing top={{small: "cozy"}}>
            <Container>
                <Row>
                    <Column>
                        <Button variant="outline" onClick={() => setState({ invert: !state.invert })}>invert</Button>
                    </Column>
                </Row>
            </Container>
        </Spacing>
    </DeviceSizeProvider>
</DrawerProvider>
```
