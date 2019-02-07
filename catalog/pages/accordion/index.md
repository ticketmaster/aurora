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
            <Chevron
              label="foo"
              onClick={toggle}
              size={15}
              color="#000"
              isOpen={isOpen}
            />
            <h5>I'm an accordion</h5>
            <Accordion.Panel
              isOpen={isOpen}
            >
              foo content
            </Accordion.Panel>
          </React.Fragment>
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
          <React.Fragment>
            <Section>
              <button className="section-chevron" label="foo" onClick={toggle}>
                <Chevron
                  color="#000"
                  isOpen={isOpen}
                  size={15}
                />
              </button>
              <div className="section-date">date</div>
              <div className="section-cta">cta</div>
              <div className="section-header">section</div>
            </Section>

            <Accordion.Panel
              isOpen={isOpen}
            >
              <p>
                Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.
              </p>
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
      <Accordion.Item label="foobar">
        {(isOpen, toggle) => (
          <React.Fragment>
             <Section>
              <button className="chevron" label="foobar" onClick={toggle}>
                <Chevron
                  className="chevron"
                  color="#000"
                  isOpen={isOpen}
                  size={15}
                />
              </button>
              <div className="section-date">date</div>
              <div className="section-cta">cta</div>
              <div className="section-header">section</div>
            </Section>
            <Accordion.Panel isOpen={isOpen}>
              <p>
                Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.
              </p>
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
  </Accordion>
```
