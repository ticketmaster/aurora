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

            <Section>
              <button className="chevron" label="foo" onClick={toggle}>
                <Chevron
                  color="#000"
                  isOpen={isOpen}
                  size={15}
                />
              </button>
              <div className="date">date</div>
              <div className="cta">cta</div>
              <div className="section">section</div>
            </Section>

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
      <Accordion.Item label="foobar">
        {(isOpen, toggle) => (
          <div>
             <Section>
              <Chevron
                className="chevron"
                color="#000"
                isOpen={isOpen}
                label="foobar"
                size={15}
                onClick={toggle}
              />
              <div className="cta">cta</div>
              <div className="section">section</div>
            </Section>
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
