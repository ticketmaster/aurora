### Accordion

Accordion Component

### With Component Composition

```react
 state: {openSections: {}}
---
  <Accordion>
    {EVENTS.map( event => (
      <Accordion.Item id={event.rowId} key={event.rowId}>
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              id={event.rowId}
              item={event}
              onToggle={toggle}
              {...event}
            />
            <Accordion.Panel isOpen={isOpen}>
              <Extras data={EXTRAS_DATA} />
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
    ))}
  </Accordion>
```
