### Container, Row & Columns

A number of different column widths & combinations can be used to create layouts.

By default columns are 100% width which is the equivalent of 12/12

```react
responsive: true
---
<Container>
    <Row>
        <Column><p style={contentStyles}>Default Column</p></Column>
    </Row>
</Container>
```

### Props

```table
span: 6
rows:
  - Prop: small
    Type: number
    Default: 12
    Notes: Sets the base size for columns
  - Prop: medium
    Type: number
    Default:
    Notes: When not provided `small` is used instead
  - Prop: large
    Type: number
    Default:
    Notes: When not provided `medium` is used instead then `small`
  - Prop: xLarge
    Type: number
    Default:
    Notes: When not provided `large` is used instead then `medium`, etc...
```

### Layout Examples

```react
responsive: true
---
<div>
    <Container style={{ paddingBottom: "20px" }}>
        <Row>
            <Column small={12} medium={6}><p style={contentStyles}>One</p></Column>
            <Column small={12} medium={6}><p style={contentStyles}>Two</p></Column>
        </Row>
    </Container>

    <Container style={{ paddingBottom: "20px" }}>
        <Row>
            <Column small={2}><p style={contentStyles}>One</p></Column>
            <Column small={4}><p style={contentStyles}>Two</p></Column>
            <Column small={2}><p style={contentStyles}>Three</p></Column>
            <Column small={4}><p style={contentStyles}>Four</p></Column>
        </Row>
    </Container>

    <Container style={{ paddingBottom: "20px" }}>
        <Row>
            <Column medium={5}><p style={contentStyles}>One</p></Column>
            <Column medium={2}><p style={contentStyles}>Two</p></Column>
            <Column medium={2}><p style={contentStyles}>Three</p></Column>
            <Column medium={2}><p style={contentStyles}>Four</p></Column>
            <Column medium={1}><p style={contentStyles}>Five</p></Column>
        </Row>
    </Container>
</div>
```

```hint
In order to achieve the correct gutter size `Container`, `Row`, `Colum` should be used together
```
