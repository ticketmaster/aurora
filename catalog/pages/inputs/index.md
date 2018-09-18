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
    Notes: Is required
  - Prop: index
    Type: number
    Default: N/A
    Notes: Is required for keyboard accessibility
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6} style={{ padding: "16px 0" }}>
          <RadioGroup>
                <RadioButton size="large" name="Option1" value="FirstButton" index={0}>
                    Testing One
                </RadioButton>
                <RadioButton size="large" name="Option2" value="SecondButton" index={1}>
                    Testing Two
                </RadioButton>
                <RadioButton size="large" name="Option3" value="ThirdButton" index={2}>
                    Testing Three
                </RadioButton>
          </RadioGroup>
        </Column>
        <Column medium={6} style={{ padding: "16px 0" }}>
          <RadioGroup>
                <RadioButton size="small" name="OptionSmall1" value="1" index={0}>
                    Testing One
                </RadioButton>

                <RadioButton size="small" name="OptionSmall2" value="2" index={1}>
                    Testing Two
                </RadioButton>

                <RadioButton size="small" name="OptionSmall3" value="3" index={2}>
                    Testing Three
                </RadioButton>
          </RadioGroup>
        </Column>
    </Row>
</Container>
```

## Check Box Group

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

## Check Box Button

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
  - Prop: value
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: isActive
    Type: string
    Default: "true"
    Notes: Will disable checkbox input
  - Prop: index
    Type: number
    Default: N/A
    Notes: Is required for keyboard accessibility
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6}  style={{ padding: "16px 0" }}>
            <CheckBoxGroup value={["1","2","3"]}>
                <CheckBoxButton size="large" name="Testing One"  value="1" index={0}>
                    Testing One
                </CheckBoxButton>
                <CheckBoxButton size="large" name="Testing Two" value="2" index={1}>
                    Testing Two
                </CheckBoxButton>
                <CheckBoxButton size="large" name="Testing Three" value="3" index={2}>
                    Testing Three
                </CheckBoxButton>
            </CheckBoxGroup>
        </Column>
        <Column medium={6} style={{ padding: "16px 0" }}>
            <CheckBoxGroup >
                <CheckBoxButton size="small" name="Testing One"  value="1" index={0}>
                    Testing One
                </CheckBoxButton>
                <CheckBoxButton size="small" name="Testing Two" value="2" index={1}>
                    Testing Two
                </CheckBoxButton>
                <CheckBoxButton size="small" name="Testing Three" value="3" index={2}>
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
    Notes: Is not required
  - Prop: name
    Type: string
    Default: N/A
    Notes: Is required
  - Prop: label
    Type: string
    Default: N/A
    Notes: Is required
  - Prop: errorMessage
    Type: string
    Default: N/A
    Notes: Will present a different style when a prop is supplied
  - Prop: disabled
    Type: boolean
    Default: "false"
    Notes: Will disable text input
  - Prop: size
    Type: string
    Default: regular
    Notes: Defines the size of an input field. Can be small, regular or large
```

```react
span: 6
---
<Container>
    <ThemeProvider theme={{ themeName: 'tm' }}>
        <Row>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test2" label="First Name" size="small"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test2" label="First Name"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test2" label="First Name" size="large"/>
                </Spacing>
            </Column>
        </Row>
    </ThemeProvider>
</Container>
```

```react
span: 6
---
<Container>
    <ThemeProvider theme={{ themeName: 'tm' }}>
        <Row>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test2" label="First Name" size="small"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test2" label="First Name"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test1" label="First Name"  errorMessage="Something Went Wrong" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test2" label="First Name" size="large"/>
                </Spacing>
            </Column>
        </Row>
    </ThemeProvider>
</Container>
```

## Drop Down Group

### Props

```table
span: 6
rows:
  - Prop: onChange
    Type: string
    Default: top
    Notes: Can be top or left
  - Prop: variant
    Type: string
    Default: 0:border
    Notes: One of 0:border or 1:no-border
  - Prop: value
    Type: string
    Default: N/A
    Notes: Specifies pre-selected values
  - Prop: label
    Type: string
    Default: N/A
    Notes: for variant 1
  - Prop: placeholder
    Type: string
    Default: N/A
    Notes: for variant 0
```

## Drop Down Option

### Props

```table
span: 6
rows:
  - Prop: value
    Type: string
    Default: N/A
    Notes: Required
  - Prop: index
    Type: string
    Default: N/A
    Notes: Required
  - Prop: className
    Type: string
    Default: ""
    Notes: Passed to StyledDropDownItem
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6}>
            <DropDownGroup variant={0} placeholder="Select an option">
                <DropDownOption value="0" index={0}>Option One</DropDownOption>
                <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                <DropDownOption value="4" index={4}>Option Five</DropDownOption>
          </DropDownGroup>
       </Column>

        <Column medium={6}>
            <DropDownGroup variant={1}>
                <DropDownOption value="0" index={0}>Option One</DropDownOption>
                <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                <DropDownOption value="4" index={4}>Option Five</DropDownOption>
          </DropDownGroup>
       </Column>
    </Row>
</Container>
```

## Toggle

```table
span: 6
rows:
  - Prop: value
    Type: bool
    Default:
    Notes: defines toggle position
  - Prop: size
    Type: string
    Default:
    Notes: defines toggle size, can be one `regular` and `large`
  - Prop: disabled
    Type: bool
    Default:
    Notes: defines if toggle is disabled
  - Prop: onToggle
    Type: function
    Default:
    Notes: on toggle callback function
  - Prop: onClick
    Type: function
    Default:
    Notes: on click callback function
  - Prop: onMouseOver
    Type: function
    Default:
    Notes: on mouseOver callback function
  - Prop: onMouseOut
    Type: function
    Default:
    Notes: on mouseOut callback function
  - Prop: onBlur
    Type: function
    Default:
    Notes: on blur callback function
  - Prop: onFocus
    Type: function
    Default:
    Notes: on focus callback function
  - Prop: onKeyPress
    Type: function
    Default:
    Notes: on keyPress callback function, by default `space` is used to switch the toggle
```

```react
---
<div>
    <DemoToggleWrapper size="small"/>
    <DemoToggleWrapper value={false} size="small" disabled/>
    <DemoToggleWrapper size="large" />
    <DemoToggleWrapper size="large" disabled/>
</div>
```
