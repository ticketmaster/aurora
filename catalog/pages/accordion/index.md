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
        <div id="foo" onClick={handleToggle}>click me</div>
        <Accordion.Panel isOpen={isOpen}>
          body
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
    {EVENT_DATA.map(({
        id,
        products,
        eventUrlLink: venueUrl,
        venues: [venue],
        attractions,
        ...rest
    }) => (
        <Accordion.Item id={id} key={id}>
          {(isOpen, handleToggle) => (
            <React.Fragment>
              <Event
                animate={true}
                isOpen={isOpen}
                id={id}
                hasProducts={!!products}
                item={{...rest, venue}}
                handleToggle={handleToggle}
              />
              <Accordion.Panel isOpen={isOpen}>
                <EventInfo
                  isOpen={isOpen}
                  items={{
                    products,
                    venue: {...venue, venueUrl},
                    attractions
                  }}
                />
              </Accordion.Panel>
            </React.Fragment>
          )}
        </Accordion.Item>
      )
    )}
  </Accordion>
```