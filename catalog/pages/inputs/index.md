## Search

```react
responsive: true
span: 6
---
<Header>
    <Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
        <Search placeholder="Enter term..." />
    </Column>
</Header>
```

```react
responsive: true
span: 6
---
<Container>
    <Row>
        <Column medium={10} large={7} style={{ padding: "16px 0" }}>
            <Search invert placeholder="Enter term..." />
        </Column>
    </Row>
</Container>
```

## Search Slim

```react
responsive: true
span: 6
---
<Header>
    <Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
        <Search slim placeholder="Enter term..." />
    </Column>
</Header>
```

```react
responsive: true
span: 6
---
<Container>
    <Row>
        <Column medium={10} large={7} style={{ padding: "16px 0" }}>
            <Search invert slim placeholder="Enter term..." />
        </Column>
    </Row>
</Container>
```

## Radio Group Button

### Props

```table
span: 6
rows:
  - Prop: value
    Type: array of strings
    Default: N/A
    Notes: Can only be one value within the array
  - Prop: onChange
    Type: Function
    Default: N/A
    Notes:
```

## Radio Button

### Props

```table
span: 6
rows:
  - Prop: size
    Type: string
    Default: small
    Notes: Can be small or large
  - Prop: name
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: isActive
    Type: boolean
    Default: "true"
    Notes: Will disable radio input
  - Prop: "value"
    Type: string
    Default: N/A
    Notes: Is Requried
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6} style={{ padding: "16px 0" }}>
          <RadioGroup>
                <RadioButton size="large" name="Option1" value="1" >
                    Testing One
                </RadioButton>

                <RadioButton size="large" name="Option2" value="2">
                    Testing Two
                </RadioButton>

                <RadioButton size="large" name="Option3" value="3">
                    Testing Three
                </RadioButton>
          </RadioGroup>
        </Column>
          <Column medium={6} style={{ padding: "16px 0" }}>
          <RadioGroup>
                <RadioButton size="small" name="OptionSmall1" value="1" >
                    Testing One
                </RadioButton>

                <RadioButton size="small" name="OptionSmall2" value="2">
                    Testing Two
                </RadioButton>

                <RadioButton size="small" name="OptionSmall3" value="3">
                    Testing Three
                </RadioButton>
          </RadioGroup>
        </Column>
    </Row>
</Container>
```

## Check Box Button

### Props

```table
span: 6
rows:
  - Prop: value
    Type: array of strings
    Default: N/A
    Notes: Can be many values within the array
  - Prop: onChange
    Type: Function
    Default: N/A
    Notes:
```

```table
span: 6
rows:
  - Prop: size
    Type: string
    Default: small
    Notes: Can be small or large
  - Prop: name
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: value
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: isActive
    Type: string
    Default: "true"
    Notes: Will disable checkbox input
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6}  style={{ padding: "16px 0" }}>
            <CheckBoxGroup value={["1","2","3"]}>
                <CheckBoxButton size="large" name="Testing One"  value="1">
                    Testing One
                </CheckBoxButton>
                <CheckBoxButton size="large" name="Testing Two" value="2">
                    Testing Two
                </CheckBoxButton>
                <CheckBoxButton size="large" name="Testing Three" value="3">
                    Testing Three
                </CheckBoxButton>
            </CheckBoxGroup>
        </Column>
        <Column medium={6} style={{ padding: "16px 0" }}>
            <CheckBoxGroup >
                <CheckBoxButton size="small" name="Testing One"  value="1">
                    Testing One
                </CheckBoxButton>
                <CheckBoxButton size="small" name="Testing Two" value="2">
                    Testing Two
                </CheckBoxButton>
                <CheckBoxButton size="small" name="Testing Three" value="3">
                    Testing Three
                </CheckBoxButton>
            </CheckBoxGroup>
        </Column>
    </Row>
</Container>
```

## Field Input

```table
span: 6
rows:
  - Prop: labelPosition
    Type: string
    Default: top
    Notes: Can be top or left
  - Prop: placeholder
    Type: string
    Default: N/A
    Notes: Is not requried
  - Prop: name
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: label
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: errorMessage
    Type: string
    Default: N/A
    Notes: Will present a different style when a prop is supplied
  - Prop: disbaled
    Type: boolean
    Default: "false"
    Notes: Will disable text input
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6}>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="top" placeholder="Hint Text" name="test2" label="Last Name"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="top" placeholder="Hint Text" name="test2" label="Last Name" errorMessage="Something else Went Wrong" />
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test2" label="First Name"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test3" label="Last Name"/>
            </Spacing>
       </Column>

        <Column medium={6}>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="left" placeholder="Hint Text" name="test2" label="Last Name"/>
            </Spacing>

            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="left" placeholder="Hint Text" name="test2" label="Last Name" errorMessage="Something else Went Wrong" />
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test2" label="First Name"/>
            </Spacing>
            <Spacing top={{small: "cozy"}}>
                <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test3" label="Last Name"/>
            </Spacing>
       </Column>
    </Row>
</Container>
```
