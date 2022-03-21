### AdaptiveModal

```table
span: 6
rows:
  - Prop: actionBar
    Type: node
    Notes: Optional. Renders an action bar at the top of the modal. Close button will be rendered by default.
  - Prop: actionBarProps
    Type: object
    Notes: extra props passed to the actionBar wrapper
  - Prop: overlayProps
    Type: object
    Notes: extra props passed to the modal overlay (e.g. to pass custom style props)
  - Prop: containerProps
    Type: object
    Notes: extra props passed to the modal container
  - Prop: contentProps
    Type: object
    Notes: extra props passed to the content wrapper
  - Prop: bottomActionBar
    Type: node
    Notes: Optional. Renders an action bar at the bottom of the modal
  - Prop: bottomActionBarProps
    Type: object
    Notes: extra props passed to the bottomActionBar wrapper
  - Prop: children
    Type: node
    Notes: The modal's children
  - Prop: deviceSize
    Type: object
    Notes: An object provided by the DeviceSize component
  - Prop: displayTop
    Type: bool
    Notes: Optional. Default false. Indicates, if the modal should open at the top of the page or in the center (default)
  - Prop: isFullscreen
    Type: bool
    Notes: Optional. Default false. Allows to render the modal fullscreen if has a 'true' value. All the responsive sizes ('size') options will be ignored if this prop has a 'true' value.
  - Prop: isOpened
    Type: bool
    Notes: Optional. Default true. Indicates, if the modal is opened by default
  - Prop: size
    Type: small, medium, large
    Notes: Optional. Default medium. The preferred size of the modal, adaptive for each screen size
  - Prop: onRequestClose
    Type: "() => Promise<bool>"
    Notes: Optional. Allows to set custom close callback handler. May return false indicating that it is not allowed to close the modal
  - Prop: onScroll
    Type: func(Event)
    Notes: Optional. Callback is fired when the user scrolls modal's content
  - Prop: focusElement
    Type: React ref
    Notes: Optional. Focuses on referenced element when modal is opened.
  - Prop: modalId
    Type: string
    Notes: Optional. Sets ids of modal's title and content elements as modalId followed by '-title' and '-content' respectively.
```

```react
<ModalDemo />
```

### Default AdaptiveModal with default action bars

```react
responsive: true
---
<DeviceSizeProvider>
    <AdaptiveModal
        onRequestClose={() => console.log('You shall not pass!')}
    >
        {Array(1000).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}
    </AdaptiveModal>
</DeviceSizeProvider>
```

### AdaptiveModal with custom action bars and long content

```react
responsive: true
---
<DeviceSizeProvider>
    <AdaptiveModal
        actionBar={
            <div style={{ backgroundColor: 'white' }}>
                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>
            </div>
        }
        bottomActionBar={
            <div style={{ backgroundColor: 'white' }}>
                <Button style={{ width: 'auto' }}>See Tickets</Button>
            </div>
        }
    >
        {Array(1000).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}
    </AdaptiveModal>
</DeviceSizeProvider>
```

### Fullscreen AdaptiveModal with custom action bars and long content

```react
responsive: true
---
<DeviceSizeProvider>
    <AdaptiveModal
        isFullscreen
        actionBar={
            <div style={{ backgroundColor: 'white' }}>
                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>
            </div>
        }
        bottomActionBar={
            <div style={{ backgroundColor: 'white' }}>
                <Button style={{ width: 'auto' }}>See Tickets</Button>
            </div>
        }
    >
        {Array(1000).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}
    </AdaptiveModal>
</DeviceSizeProvider>
```

### AdaptiveModal with custom action bars and short content

```react
responsive: true
---
<DeviceSizeProvider>
    <AdaptiveModal
        actionBar={
            <div style={{ backgroundColor: 'white' }}>
                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>
            </div>
        }
        bottomActionBar={
            <div style={{ backgroundColor: 'white' }}>
                <Button style={{ width: 'auto' }}>See Tickets</Button>
            </div>
        }
    >
        {Array(8).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}
    </AdaptiveModal>
</DeviceSizeProvider>
```

### Fullscreen AdaptiveModal with custom action bars and short content

```react
responsive: true
---
<DeviceSizeProvider>
    <AdaptiveModal
        isFullscreen
        actionBar={
            <div style={{ backgroundColor: 'white' }}>
                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>
            </div>
        }
        bottomActionBar={
            <div style={{ backgroundColor: 'white' }}>
                <Button style={{ width: 'auto' }}>See Tickets</Button>
            </div>
        }
    >
        {Array(8).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}
    </AdaptiveModal>
</DeviceSizeProvider>
```
