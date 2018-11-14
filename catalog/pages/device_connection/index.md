### DeviceConnectionProvider

Analyzes the user's network connection and data usage preferences while listening for changes.

### Props

```table
span: 6
rows:
  - Prop: defaultState
    Type: Object
    Default: null
  - Prop: children
    Type: Node
    Default:
```

### DeviceConnectionConsumer

Receives a render prop containing the DeviceConnectionProvider's state when the DeviceConnectionProvider is above it in the React DOM hierarchy.

### DisplayOn

Returns children when the connection speed/data usage preference prop(s) passed match the user's connection speed or data usage preferences when the DeviceConnectionProvider is above it in the React DOM hierarchy.

### Props

```table
span: 6
rows:
  - Prop: conn4g
    Type: Boolean
    Default: false
  - Prop: conn3g
    Type: Boolean
    Default: false
  - Prop: conn2g
    Type: Boolean
    Default: false
  - Prop: connslow2g
    Type: Boolean
    Default: false
  - Prop: saveData
    Type: Boolean
    Default: null
  - Prop: children
    Type: Node
    Default:
```

```react
responsive: true
---
<Spacing top={{small: "normal"}} bottom={{small: "normal"}}>
    <DeviceConnectionProvider>
        <Container>
            <Row>
                <DisplayOn connslow2g={true}>
                    <Column medium={4}>
                        <Spacing bottom={{small: "moderate"}}>
                            <ImageCard src="https://placekitten.com/g/512/288">
                                <ImageCard.Title>Slow 2g</ImageCard.Title>
                            </ImageCard>
                        </Spacing>
                    </Column>
                </DisplayOn>
                <DisplayOn conn2g={true}>
                    <Column small={6} medium={4}>
                        <Spacing bottom={{small: "moderate"}}>
                            <ImageCard src="https://placekitten.com/g/512/288">
                                <ImageCard.Title>2g</ImageCard.Title>
                            </ImageCard>
                        </Spacing>
                    </Column>
                </DisplayOn>
                <DisplayOn conn3g={true}>
                    <Column small={6} medium={4}>
                        <Column small={6} medium={4}>
                            <Spacing bottom={{small: "moderate"}}>
                                <ImageCard src="https://placekitten.com/g/512/288">
                                    <ImageCard.Title>3g</ImageCard.Title>
                                </ImageCard>
                            </Spacing>
                        </Column>
                    </Column>
                </DisplayOn>
                <DisplayOn conn4g={true}>
                    <Column medium={6}>
                        <Column small={6} medium={4}>
                            <Spacing bottom={{small: "moderate"}}>
                                <ImageCard src="https://placekitten.com/g/512/288">
                                    <ImageCard.Title>4g</ImageCard.Title>
                                </ImageCard>
                            </Spacing>
                        </Column>
                    </Column>
                </DisplayOn>
            </Row>
        </Container>
    </DeviceConnectionProvider>
</Spacing>
```
