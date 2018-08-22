### Default

```react
responsive: true
span: 6
state: { invert: false }
---
<DeviceSizeProvider cssOnly>
    <Header>
        <NavBar message="Hi there this is an optional message. There can be really really really long content here but we are going to try not to overflow this area" position="fixed" invert={state.invert}>
            <DisplayFor small medium>
                <NavBar.MenuButton isFirst />
            </DisplayFor>
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
                        <NavBar.LinkList style={{ width: "265px" }}>
                            <NavBar.Link href="/">Link 4</NavBar.Link>
                            <NavBar.Link>Link 5</NavBar.Link>
                            <NavBar.Link>Link 6</NavBar.Link>
                            <NavBar.Link>Link 7 With Really Long Content </NavBar.Link>
                        </NavBar.LinkList>
                    </NavBar.Link>
                </NavBar.LinkRow>
            </DisplayFor>
            <NavBar.Right>
                <NavBar.SearchButton />
                <NavBar.UserButton isLast />
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
```
