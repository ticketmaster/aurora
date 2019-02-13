### Accordion

Accordion Component

### With Component Composition

```react
 state: {openSections: {}}
---
  <Accordion>
    {EVENTS_MANY.map(({
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
                isOpen={isOpen}
                id={id}
                item={{...rest, venue}}
                handleToggle={handleToggle}
              />
              <Accordion.Panel isOpen={isOpen}>
                <EventInfo
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
