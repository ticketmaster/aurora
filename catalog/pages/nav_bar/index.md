### Default

```react
responsive: true
span: 6
---
<Header>
    <NavBar fixed>
       <NavBar.MenuButton isFirst />
        Content
        <NavBar.LinkRow>
            <NavBar.Link>Link 1</NavBar.Link>
            <NavBar.Link>Link 2</NavBar.Link>
            <NavBar.Link>Link 3</NavBar.Link>
            <NavBar.Link>
                Link 4
                <NavBar.LinkList style={{ minWidth: '258px' }}>
                    <NavBar.Link>Link 5</NavBar.Link>
                    <NavBar.Link>Link 6</NavBar.Link>
                    <NavBar.Link>Link 7 With Really Long Content </NavBar.Link>
                </NavBar.LinkList>
            </NavBar.Link>
        </NavBar.LinkRow>
    </NavBar>
</Header>
```
