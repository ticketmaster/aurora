### Accordion

Accordion Component


#### Examples

##### Default 

```react
 state: {openSections: {}}
---
<Accordion>
  <Accordion.Item id="someId">
      {(isOpen, handleToggle) => (
        <React.Fragment>
          <div id="someId" onClick={() => handleToggle("someId")}>
            Pariatur eligendi itaque suscipit magni veniam expedita officiis.
          </div>
          <Accordion.Panel isOpen={isOpen}>
            Provident incidunt consequuntur corrupti a tempore nostrum. Aliquam eos deserunt impedit. Distinctio enim aspernatur facilis accusamus quam esse.
          </Accordion.Panel>
        </React.Fragment>
      )}
  </Accordion.Item>
</Accordion>
```


##### With Simple Styling

```react
 state: {openSections: {}}
---
<Accordion>
  <Accordion.Item id="foobar">
    {(isOpen, handleToggle) => (
      <div className="content" style={{background: "white"}}>
        <div id="foobar" onClick={() => handleToggle("foobar")}>
          Pariatur eligendi itaque suscipit magni veniam expedita officiis.
        </div>
        <Accordion.Panel isOpen={isOpen}>
          Provident incidunt consequuntur corrupti a tempore nostrum. Aliquam eos deserunt impedit. Distinctio enim aspernatur facilis accusamus quam esse.
        </Accordion.Panel>
      </div>
    )}
  </Accordion.Item>
</Accordion>
```


##### Nested 

```react
 state: {openSections: {}}
---
<Accordion>
  <Accordion.Item id="foobar">
    {(isOpen, handleToggle) => (
      <div className="content" style={{background: "white", padding: "8px"}}>
        <div id="foobar" onClick={() => handleToggle("foobar")}>
          Pariatur eligendi itaque suscipit magni veniam expedita officiis.
        </div>
        <Accordion.Panel isOpen={isOpen}>
          Provident incidunt consequuntur corrupti a tempore nostrum. Aliquam eos deserunt impedit. Distinctio enim aspernatur facilis accusamus quam esse.

          <Accordion>
            <Accordion.Item id="nestedFoobar">
              {(isOpen, handleToggle) => (
                <div className="content" style={{background: "lightgrey", color: "white", padding: "8px"}}>
                  <div id="nestedFoobar" onClick={() => handleToggle("nestedFoobar")}>
                    Pariatur eligendi itaque suscipit magni veniam expedita officiis.
                  </div>
                  <Accordion.Panel isOpen={isOpen}>
                    Provident incidunt consequuntur corrupti a tempore nostrum. Aliquam eos deserunt impedit. Distinctio enim aspernatur facilis accusamus quam esse.
                  </Accordion.Panel>
                </div>
              )}
            </Accordion.Item>
          </Accordion>

        </Accordion.Panel>
      </div>
    )}
  </Accordion.Item>
</Accordion>
```
