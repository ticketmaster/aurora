### Accordion

Accordion Component

#### Example

```react
 state: {openSections: {}}
---
  <Accordion>
    <Accordion.Item label="foo">
        {(isOpen, toggle) => (
          <React.Fragment>
            <div onClick={toggle} label="foo">I'm an accordion</div>
            <Accordion.Panel isOpen={isOpen}>
              Some content goes here
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
  </Accordion>
```

### With Component Composition

```react
 responsive: true
---
  <Accordion>
      <Accordion.Item label="foobar" isOpen>
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label="foobar"
              title=""
              onClick={toggle}
            />
            <Accordion.Panel isOpen={isOpen}>
              <p>foo</p>
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>

  </Accordion>
```
