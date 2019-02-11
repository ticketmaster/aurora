### Accordion

Accordion Component

### With Component Composition

```react
 state: {openSections: {}}
---
  <Accordion>
    {EVENT.map( event => {
      const {
        products,
        venues,
        attractions,
      } = event;
      const [ venue ] = venues;

      return (
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
                <Extras data={products, venue, attractions} />
              </Accordion.Panel>
            </React.Fragment>
          )}
        </Accordion.Item>
      )
    })}
  </Accordion>
```
