### BottomSheet

```react
responsive: true
state: {visible:  true}
---

<Row>
    <BottomSheet visible={state.visible} onCloseRequest={() => setState({visible: false})}>
      <ExpandedRow sections={sections} buttonText="See Tickets" />

  </BottomSheet>
</Row>
```
