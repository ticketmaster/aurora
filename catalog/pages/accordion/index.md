### Accordion

Accordion Component

#### Example

```react
 state: {openSections: {}}
---
  <Accordion>
    <Accordion.Item label="foo">
        {(isOpen, toggle) => (
          <div label="foo">
            <Chevron
              label="foo"
              onClick={toggle}
              size={15}
              color="#000"
              isOpen={isOpen}
            />
            <Section label="foo"/>
            <Accordion.Panel
              isOpen={isOpen}
            >
              foo content
            </Accordion.Panel>
          </div>
        )}
      </Accordion.Item>
  </Accordion>
```

### With Component Composition

```react
 state: {openSections: {}}
---
  <Accordion>
    <Accordion.Item label="foo">
        {(isOpen, toggle) => (
          <div label="foo">
            <Chevron
              label="foo"
              onClick={toggle}
              size={15}
              color="#000"
              isOpen={isOpen}
            />
            <Section label="foo"/>
            <Accordion.Panel
              isOpen={isOpen}
            >
              <p>
                Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.
              </p>
            </Accordion.Panel>
          </div>
        )}
      </Accordion.Item>
  </Accordion>
```
