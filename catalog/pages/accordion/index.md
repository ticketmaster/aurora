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
 state: {openSections: {}}
---
  <Accordion>
      <Accordion.Item label="foobar">
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label="foobar"
              title=""
              onClick={toggle}
            />
            <Accordion.Panel isOpen={isOpen}>
              <p>
                Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.
              </p>
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
      <Accordion.Item label="secondItem">
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label="secondItem"
              onSaleText="On Sale: Mon • Jan 1 • 10 AM"
              statusBadge={{variant: "error", text:"Sold Out"}}
              title="SecondItem"
              onClick={toggle}
            />
            <Accordion.Panel isOpen={isOpen}>
              <p>
                Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.Ipsam quod voluptatem cumque. Sunt laudantium in voluptas. Totam libero voluptatem eum in asperiores cum voluptas.
              </p>
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
      <Accordion.Item label="thirdItem">
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label="thirdItem"
              onSaleText="On Sale: Mon • Jan 1 • 10 AM"
              statusBadge={{variant: "error", text:"Sold Out"}}
              extrasAvailable={{text: "Extras Available", url: "#"}}
              title="thirdItem"
              onClick={toggle}
            />
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

### With OnSale

```react
 state: {openSections: {}}
---
  <Accordion>
      <Accordion.Item label="foobar">
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label="foobar"
              title=""
              onClick={toggle}
            />
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
