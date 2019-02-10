### Accordion

Accordion Component

### With Component Composition

```react
 state: {openSections: {}}
---
  <Accordion>
    {EVENTS_DATA.map( event => (
      <Accordion.Item label={event.rowId} key={event.rowId}>
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label={event.rowId}
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
