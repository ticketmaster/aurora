### Accordion

Accordion Component

### With Component Composition

```react
 state: {openSections: {}}
---
  <Accordion>
    {Array.from({length: 50}, (x,y) => (
      <Accordion.Item label={y}>
        {(isOpen, toggle) => (
          <React.Fragment>
            <Section
              isOpen={isOpen}
              label={y}
              title="foobar"
              onClick={toggle}
            />
            <Accordion.Panel isOpen={isOpen}>
              <Extras
                lineUp
                venueInfo
                addOns
                more
              />
            </Accordion.Panel>
          </React.Fragment>
        )}
      </Accordion.Item>
    ))}
  </Accordion>
```
