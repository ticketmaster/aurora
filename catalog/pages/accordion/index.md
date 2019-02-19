### Accordion

Accordion Component

### Basic Example

```react
 state: {openSections: {}}
---
<Accordion>
  <Accordion.Item id="foo">
    {(isOpen, handleToggle) => (
      <React.Fragment>
        <div id="foo" onClick={() => handleToggle("foo")}>click me</div>
        <Accordion.Panel isOpen={isOpen}>
          body
        </Accordion.Panel>
      </React.Fragment>
    )}
  </Accordion.Item>
</Accordion>
```
